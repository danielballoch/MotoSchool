import fetch from "node-fetch"

// using gatsby example with dynamic data
const sendgrid = require("@sendgrid/mail")
//Your API Key from Sendgrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

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
    // console.log("This is where the req should be logging")
    console.log(req.body);

    //this is where I'm getting response error, validate token function above
    const human = await validateHuman(req.body.token);
    if (!human){
        // console.log("this message shows we're getting to the !human part")
        res.status(400);
        res.json({errors: ["Please, you're not fooling us, bot."]})
        return;
    }



  try {
    if (req.method !== "POST") {
      res.json({ message: "Try a POST!" })
    }
    const message = {
          to: "daniel@thoughtfulhq.com",
          templateId: 'd-ac2bbcc54a3047ae9da07bfd5dc77e21',
          from: {
            email: "daniel@thoughtfulhq.com",
            name:'MotoSchool Form',
          },
          subject: 'MotoSchool Form',
          dynamicTemplateData: {
            subject: 'MotoSchool Form',
            name: req.body.name,
            email: req.body.email,
            lesson: req.body.lesson,
            date: req.body.date,
            time: req.body.time,
          }
    }

    return sendgrid.send(message).then(
      () => {
        console.log("are we getting here?")
        const msg = {
          to: req.body.email,
          templateId: 'd-7844369c463c40349f90eccc5ed5db01',
          from: {
            email:process.env.SENDGRID_AUTHORIZED_EMAIL,
            name:'MotoSchool',
          },
          subject: 'Thanks for your MotoSchool Enquiry!',
          dynamicTemplateData: {
            subject: 'Thanks for your MotoSchool Enquiry!',
            name: req.body.name,
            email: req.body.email,
            lesson: req.body.lesson,
            date: req.body.date,
            time: req.body.time,
          }
        }
        sendgrid.send(msg);
        res.status(200).json({
          message: "I will send email",
        })
      },
      error => {
        console.error(error)
        if (error.response) {
          return res.status(500).json({
            error: error.response,
          })
        }
      }
    )
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was an error", error: err })
  }
}
