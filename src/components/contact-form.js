import React, {useRef, useEffect, useState} from "react"
import styled from "@emotion/styled"
// import BackgroundImage from "../images/engineering-images/Hero2Dark.png"
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
// import Calendar from "react-calendar"
// import DRP from "../components/dateRangePicker"
// import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
// import 'react-calendar/dist/Calendar.css';
import { isWithinInterval } from "date-fns";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';


const FormDiv = styled.div`
max-width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
/* background-color: #543C3C; */
/* height: 800px; */
background-size: contain;
background-position: center;
background-filter: brightness(10%);
.react-daterange-picker__wrapper input:hover {
    cursor: pointer !important;
}
form {
    max-width: 400px;
    padding: 40px 80px;
    width: 100vw;
    min-height: 500px;
    height: 100%;
    max-height: 800px;
    background-color: white;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .react-date-picker__inputGroup__input {
        // min-width: 1.2em!important;
    }
    .react-calendar__tile--active, .react-calendar__tile:enabled:hover {
        background-color: #4a9c2d!important;
        color: white !important;
    }
    label, input, textarea, button {
        // margin: 0 20px;
        // margin-left: 20px;
    }
    .time-selection {
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-between;
        div {
            // border: solid 1px black;
            font-size: 13px;
            font-weight: 600;
            padding: 14px 14px;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
            margin: 0 10px 10px 0;
            // background-color: grey;
            :hover {
                cursor: pointer;
            }
        }
        .active-time {
            background-color: #c9d2c8;
        }
    }
    .select-style {
        background-color: white;
        padding: 5px;
        border: solid 1px black;
        :hover {
            cursor: pointer;
        }
    }
    .button-style {
        margin-top: 20px;
        padding: 20px;
        background-color: #4a9c2d;
        color: white;
        border: solid 1px #4a9c2d;
        font-size: 14px;
        font-weight: 600;
        :hover {
            cursor: pointer;
        }
    }
    option:hover {
        cursor: pointer;
    }
    h2 {
        margin-top: 0;
    }
    #name {
        padding: 5px;
        border: 1px solid black;
    }
    label {
        margin-top: 20px;
        margin-bottom: 2px;
        :first-of-type {
            margin-top: 0;
        }
    }
    textarea {
        font-size: 16px;
        padding: 5px;
    }
    textarea {
        height: 100px;
        resize:vertical;
    }
    .react-daterange-picker__wrapper {
        // margin-left: 20px;
        margin-bottom: 20px;
        :hover {
            cursor: pointer;
        }
    }
    .message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // margin: -40px;
        position: absolute;
        z-index: 100;
        max-width: 400px;
        width: 100vw;
        height: 0px;
        overflow: hidden;
        color: rgba(255,255,255,0);
        background-color: rgba(255,255,255,0);
        transition: background-color .5s ease, color .5s ease,  height 2s;
        p, h2 {
            transition: color .5s ease;
            color: rgba(255,255,255,0);
        }
    }
    .sent {
        color: black;
        transition: background-color .5s ease, color .5s ease;
        height: 700px;
        background-color: rgba(255,255,255,.9);
        p, h2 {
            transition: color .5s ease;
            color: black;
        }
    }
}
.info-div {
    align-self: center;
    margin-left: 40px;
    color: white;
    width: 500px;
    h2 {
        margin: 0 0 20px 0;
        color: white;
        padding-bottom: 40px;
        border-bottom: 10px solid white;
    }
    .contacts-div {
        max-width: 500px;
        display: flex;
        flex-wrap: wrap;

        div {
            max-width: 200px;
            margin-right: 20px;
        }
    }
}
@media(max-width:1200px){
    flex-direction: column;
    .info-div {
        margin-left: 0;
        padding: 20px;
        h2 {
            margin: 40px 0px 20px;
        }
    }

}
@media(max-width:763px){
    h1 {
        font-size: 60px!important;
    }
}
@media(max-width:600px){
    width: 100%;
    max-width: 100%;
    form {
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
        padding: 30px 30px 20px 30px; 
    }
    .message {
        box-sizing: border-box!important;
        padding: 30px 30px 20px 30px;
        max-width: 100%!important;
    }
    .sent {
        max-width: 100%!important;
        width: 95%!important;
        margin-left: -30px;
        height: 700px!important
    }
    .info-div {
        // width: 100vw;
        padding: 20px;
    }
    .time-selection {
        // justify-content: start !important;
        div {
            margin: 0 10px 10px 0 !important;
        }
    }
}
@media(max-width:380px){
    form {
        h2 {
            font-size: 28px; 
        }
    }
}
#name , #email, #lesson, .select-style {
    font-size: 16px;
    color: black;
    padding: 5px;
    border: solid 1px black;
    border-radius: 0;
}
#lesson, .react-date-picker__wrapper {
    padding: 5px;
}
.lesson-options {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    font-size: 16px;
    select {
        padding: 5px;
        font-size: 16px;
    }
}
.option-div {
    width: 50%;
    select {
        width: 90%;
    }
    label {
        width: 90%;
    }
    :last-of-type {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        
    }
}
.lesson-hours-div {
    margin-top: 20px;
    select {
        font-size: 16px;
        width: 100%;
    }
}
`


function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
  }
  function isWithinRanges(date, ranges) {
    return ranges.some(range => isWithinRange(date, range));
  }
  let in3Days = new Date(2023, 11, 28);
  let in5Days = new Date(2023, 11, 28);
  let in13Days = new Date(2023, 11, 26);
  let in15Days = new Date(2023, 11, 26);

export default function ContactElectrical({formLabel1, formLabel2, formLabel3, formLabel4, timesAvailable, datesUnavailable}){

    ///need to reformat dates here before adding to state, or do in useEffect

    const reRef = useRef();
    const [selectedDate, updateSelectedDate] = useState(new Date());
    const [activeTime, setActiveTime] = useState(0)
    const [serverState, setServerState] = useState({formSent: false});
    const [bookedDates, setBookedDates] = useState([ [in3Days, in5Days],[in13Days, in15Days],])
    const [totalPrice, setTotalPrice] = useState(80)
    const [lessonPrice, setLessonPrice] = useState(80)
    const [gearPrice, setGearPrice] = useState(0)
    const [bikeCost, setBikeCost] = useState(0)
    const [hourCost, setHourCost] = useState(0)

    useEffect(() => {
        console.log("update price")
        if (lessonPrice === 100){setTotalPrice(lessonPrice + hourCost)} else {setTotalPrice(lessonPrice + gearPrice + bikeCost + hourCost)}
    },[lessonPrice, gearPrice, bikeCost, hourCost])


    
    useEffect(()=> {
        console.log(datesUnavailable[0].bookedDate)
        console.log("old:",bookedDates)
        let datesUnavailableRanges = []
        for(let i = 0; i < datesUnavailable.length; i++){
            let d = datesUnavailable[i].bookedDate.split("/")
            console.log(d)
            console.log("test date:", d[0], d[1],d[2])
            //except here they need to be in the right format so I need to seperate and make it so it's like this: new Date(2023, 11, 26);
            datesUnavailableRanges.push([new Date(Number(d[2]), Number(d[1])-1, Number(d[0])), new Date(Number(d[2]), Number(d[1])-1, Number(d[0]))])
        }
        setBookedDates(datesUnavailableRanges);
        console.log("new:",datesUnavailableRanges)
    },[datesUnavailable])

    function tileDisabled({ date, view}) {
      // Add class to tiles in month view only
    //   console.log("test og",bookedDates )
      if (view === 'month') {
        // Check if a date React-Calendar wants to check is within any of the ranges
        return isWithinRanges(date, bookedDates);
      }
    }
    



    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


      async function onSubmit(data){
        // const reRef = useRef<>();
        console.log(data)
        const token = await reRef.current.executeAsync();
        reRef.current.reset();
        // console.log("this is where form data should log")
        // console.log(data)
        // console.log(token)
        let dd = selectedDate.getDate();
        let mm = selectedDate.getMonth()+1;
        let yyyy = selectedDate.getFullYear();
        let reformattedDate = dd+"/"+mm+"/"+yyyy;
        console.log(reformattedDate)
        fetch(`/api/sendgrid`, {
          method: `POST`,
          body: JSON.stringify({
            name: data.Name,
            email: data.Email,
            lesson: data.Lesson,
            date: reformattedDate,
            time: orderedTimes[activeTime].time,
            gear: data.Gear,
            bike: data.Bike,
            hours: data.Hours,
            totalPrice: totalPrice,
            token,
        }),
          headers: {
            "content-type": `application/json`,
          },
        })
          .then(res => res.json())
          .then(body => {
            console.log(`response from API:`, body);
          })
          .then(setServerState({formSent: true}))
      }
      console.log({ errors })
      useEffect(() => {
          if (serverState.formSent === true) {
            setTimeout(() => {
                setServerState({
                    formSent: false
                })
            }, 3000)
          }
      })
      let order = []
      let orderedTimes = []
      for (let i = 0; i <= timesAvailable.length-1; i++){
          order.push([timesAvailable[i].time, i])
      }
      order.sort()
      for (let i = 0; i <= timesAvailable.length-1; i++){
          orderedTimes.push(timesAvailable[order[i][1]])
      }
  return (
            <FormDiv>
                <ReCAPTCHA 
                    sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY} 
                    size="invisible"
                    ref={reRef} 
                />
                <form onSubmit={handleSubmit(onSubmit)} autocomplete="on">
                    <div className={serverState.formSent === true ? "message sent" : "message"}>
                        <div>
                            <h2>Your booking request has been sent!</h2>
                            <p>Please check your email and follow payment instructions to confirm you're MotoSchool booking.</p>
                        </div>
                    </div>
                    {/* <h2>{title}</h2> */}
                    <label htmlFor="name">{formLabel1}</label>
                    <input
                        placeholder="i.e Alex 7, Kate 12, Tom 35"
                        id="name"
                        type="text" 
                        name="name" 
                        required  
                        {...register("Name", { required: true, maxLength: 100 })} 
                    />
                    <label htmlFor="email">Contact Email:</label>
                    <input
                        id="email"
                        type="email" 
                        name="email" 
                        required  
                        {...register("Email", { required: true, maxLength: 100 })} 
                    />
                    <label htmlFor="lesson">{formLabel2}</label>
                    <select
                    className="select-style"
                         id="lesson"
                         type="lesson" 
                         name="lesson" 
                         required
                         {...register("Lesson", { required: true})}
                         onChange={(e) => setLessonPrice(Number(e.target.value))}
                    >
                        <option value="80" selected>30 minute lesson - $80</option>
                        <option value="145" >1 hour lesson - $145</option>
                        <option value="100" >Coaching only - $100 p/h</option>
                    </select>
                    


                    {lessonPrice !== 100?
                        <div className="lesson-options">
                        <div className="option-div">
                            <label htmlFor="gear">Gear Hire:</label>
                            <select
                            className="select-style"
                                id="gear"
                                type="gear" 
                                name="gear" 
                                required
                                {...register("Gear", { required: true})}
                                onChange={(e) => setGearPrice(Number(e.target.value))}
                            >
                                <option value="0" selected>1 Set - (included)</option>
                                <option value="15" >2 Sets - $15</option>
                                <option value="30" >3 Sets - $30</option>
                                <option value="45" >4 Sets - $45</option>
                            </select> 
                        </div>
                        <div className="option-div">
                            <label htmlFor="bike">Bike Hire:</label>
                            <select
                            className="select-style"
                                id="bike"
                                type="bike" 
                                name="bike" 
                                required
                                {...register("Bike", { required: true})}
                                onChange={(e) => setBikeCost(Number(e.target.value))}
                            >
                                <option value="0" selected>1 bike - (included)</option>
                                <option value="45" >2 bikes - $45</option>
                                <option value="90" >3 bikes - $90</option>
                                <option value="130" >4 bikes - $135</option>
                            </select> 
                            </div>
                        </div>
                    : 
                        <div className="lesson-hours-div">
                            <label htmlFor="hours">Lesson Hours:</label>
                            <select
                            className="select-style"
                                 id="hours"
                                 type="hours" 
                                 name="hours" 
                                 required
                                 {...register("Hours", { required: true})}
                                 onChange={(e) => setHourCost(Number(e.target.value))}
                            >
                                <option value="0" >1 hour</option>
                                <option value="100" >2 hours</option>
                                <option value="200" >3 hours</option>
                            </select>     
                        </div>}
                    <label htmlFor="bikes">{formLabel4}</label>
                    {/* <DRP /> */}
                    {/* <Calendar/> */}
                    <DatePicker onChange={updateSelectedDate} value={selectedDate} tileDisabled={tileDisabled} minDate={new Date()} format="dd-MM-y"/>
                    <label>Time Selection:</label>
                    <div className="time-selection">
                        {orderedTimes.map((time, i)=>(
                            <div onClick={()=>setActiveTime(i)} className={i === activeTime ? "active-time" : ""}>{time.time}</div>
                        ))}
                    </div>

                    <h3>Total: ${totalPrice}</h3>
                       
                    
                    <button
                        type="submit" 
                        class="g-recaptcha button-style"
                        data-sitekey="site_key"
                        data-callback='onSubmit'
                        data-action='submit'
                    >
                    SEND BOOKING REQUEST</button>
                </form>
                {/* <div className="info-div">
                    <h2><b>{infoTitle}</b> {infoNumber}</h2>
                    <div className="contacts-div">
                        {infoContacts.map(contact => (
                            <div>
                            <p><b>{contact.name}</b><br/>{contact.title}<br/>{contact.email}<br/>{contact.phone}</p>
                            </div>
                        ))}
                    </div>
                </div> */}
            </FormDiv>
  )
}