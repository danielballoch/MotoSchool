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

function getStripeLink(data){ 
let LS1 = "30 minute lesson - $80"
let LS2 = "1 hour lesson - $80"
let LS3 = "Coaching only - $100 p/h"

let GS1 = "1 set - (included)"
let GS2 = "2 sets - $15"
let GS3 = "3 sets - $30"
let GS4 = "4 sets - $45"

let BS1 = "1 bike - (included)"
let BS2 = "2 bikes - $45"
let BS3 = "3 bikes - $90"
let BS4 = "4 bikes - $135"

let HS1 = "1 Hour"
let HS2 = "2 Hours"
let HS3 = "3 Hours"

if (data.body.lesson === LS3){
  if(data.body.hours === HS1){return "https://buy.stripe.com/fZe5nb8h9gql7Kg5kn"} 
  else if (data.body.hours === HS2){return "https://buy.stripe.com/6oE8znfJBde98Ok4gk"} 
  else if (data.body.hours === HS3){return "https://buy.stripe.com/dR67vj7d56PL5C85kp"} 
} 
else if (data.body.lesson === LS2){
  if (data.body.gear === GS1){
    if(data.body.bike === BS1){return "https://buy.stripe.com/aEU4j71SL8XT7KgfZj"}
    else if(data.body.bike === BS2){return "https://buy.stripe.com/00g8zngNF6PL5C8eVe"}
    else if(data.body.bike === BS3){return "https://buy.stripe.com/6oE8zn691eid0hOcN5"}
    else if(data.body.bike === BS4){return "https://buy.stripe.com/00gcPD9ld0rn6GccN4"}
  }
  else if (data.body.gear === GS2){
    if(data.body.bike === BS1){return "https://buy.stripe.com/3cs3f354X3Dz6Gc00h"}
    else if(data.body.bike === BS2){return "https://buy.stripe.com/cN2aHvgNFca5ggMeVa"}
    else if(data.body.bike === BS3){return "https://buy.stripe.com/4gwaHv6917TP2pW6oD"}
    else if(data.body.bike === BS4){return "https://buy.stripe.com/9AQ02Raph5LHfcIfZc"}
  }
  else if (data.body.gear === GS3){
    if(data.body.bike === BS1){return "https://buy.stripe.com/7sI3f3fJB6PLe8EcMZ"}
    else if(data.body.bike === BS2){return "https://buy.stripe.com/fZeaHvdBt3Dz3u05kw"}
    else if(data.body.bike === BS3){return "https://buy.stripe.com/6oEaHv40T3Dze8EeV5"}
    else if(data.body.bike === BS4){return "https://buy.stripe.com/5kAcPD8h91vr4y47sC"}
  }
  else if (data.body.gear === GS4){
    if(data.body.bike === BS1){return "https://buy.stripe.com/eVabLz2WP1vr9So3cl"}
    else if(data.body.bike === BS2){return "https://buy.stripe.com/8wMcPDaph0rn6Gc6ow"}
    else if(data.body.bike === BS3){return "https://buy.stripe.com/28oaHvcxpgqlggM14b"}
    else if(data.body.bike === BS4){return "https://buy.stripe.com/6oE4j740T4HDggM28e"}
  }
}
else if (data.body.lesson === LS1){
  if (data.body.gear === GS1){
    if(data.body.bike === BS1){return "30 minute lesson $80 - 1"}
    else if(data.body.bike === BS2){return "https://buy.stripe.com/cN2eXL1SL1vrggM14E"}
    else if(data.body.bike === BS3){return "https://buy.stripe.com/cN2g1PeFx3DzfcIdRp"}
    else if(data.body.bike === BS4){return "https://buy.stripe.com/14k4j7fJB2zvggM9B8"}
  }
  else if (data.body.gear === GS2){
    if(data.body.bike === BS1){return "https://buy.stripe.com/7sI02ReFxfmh0hOfZv"}
    else if(data.body.bike === BS2){return "https://buy.stripe.com/8wM9Dr7d5eid0hOdRm"}
    else if(data.body.bike === BS3){return "https://buy.stripe.com/6oE8zn40T7TPaWscNh"}
    else if(data.body.bike === BS4){return "https://buy.stripe.com/3csaHvbtla1X0hO14y"}
  }
  else if (data.body.gear === GS3){
    if(data.body.bike === BS1){return "https://buy.stripe.com/5kA16V54Xfmh2pW5kN"}
    else if(data.body.bike === BS2){return "https://buy.stripe.com/9AQ4j71SLa1Xe8E9B2"}
    else if(data.body.bike === BS3){return "https://buy.stripe.com/00g2aZgNF3Dz9So14v"}
    else if(data.body.bike === BS4){return "https://buy.stripe.com/cN2aHv1SL7TP1lScNc"}
  }
  else if (data.body.gear === GS4){
    if(data.body.bike === BS1){return "https://buy.stripe.com/9AQ3f3fJB2zv5C8dRf"}
    else if(data.body.bike === BS2){return "https://buy.stripe.com/3csbLzfJB2zv7Kg8wU"}
    else if(data.body.bike === BS3){return "https://buy.stripe.com/7sI4j79ld3Dz4y428v"}
    else if(data.body.bike === BS4){return "https://buy.stripe.com/cN202R2WP4HD6Gc5kG"}
  }
}

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

  let stripeLink = getStripeLink(req)
  console.log(stripeLink)

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
        "price": req.body.totalPrice,
        "stripeLink": stripeLink
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
