// Require:
var postmark = require("postmark");

// Send an email:
var client = new postmark.ServerClient(process.env.POSTMARK_AUTH);

//validate token through google
async function validateHuman(token){
  // console.log("validate human running")
const secret = process.env.GATSBY_RECAPTCHA_SECRET;
const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
  {
      method: "POST",
  } 
)
//this is where It's failing??
const data = await response.json();
return data.success;
}

//main function
export default async(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  const human = await validateHuman(req.body.token);
  if (!human){
      // console.log("this message shows we're getting to the !human part")
      res.status(400);
      res.json({errors: ["Please, you're not fooling us, bot."]})
      return;
  }
  try {
    let option = "No options selected"
    let optionValue = ""
    if (req.body.lesson === "Coaching only - $100 p/h"){option = "Lesson Hours: "; optionValue = req.body.hours} else {option = "Rental Bikes & Gear: "; optionValue = req.body.bike + ", " + req.body.gear}
    let message = {
      "From": "info@motoschool.co.nz",
      "To": req.body.email,
      "ReplyTo": "philsmotoschool@outlook.com",
      "Headers": [
        {
          "Name": "MOTOSCHOOL",
          "Value": "MOTOSCHOOL"
        }
      ],
      "TemplateId" : 34429558,
      "TemplateModel": {
        "name": req.body.name,
        "email": req.body.email,
        "lesson": req.body.lesson,
        "option": option,
        "optionValue": optionValue,
        "date": req.body.date,
        "time": req.body.time,
        "price": req.body.totalPrice
      },
      "MessageStream": "outbound"
    }
    return client.sendEmailWithTemplate(message).then(
      () => {
        console.log("client-message-sent")
        message.To = "philsmotoschool@outlook.com"
        message.ReplyTo = req.body.email
        message.TemplateId = 34430549
        client.sendEmailWithTemplate(message)
      }
    ).then(
      () => {
        console.log("admin-message-sent")
        message.To = "daniel@thoughtfulhq.com"
        client.sendEmailWithTemplate(message)
      }
    ).then(
      () => {
        console.log("backup-message-sent")
        res.status(200).json({
          message: "This is updated",
        })
      }
    )
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was an error", error: err })
  }
}
