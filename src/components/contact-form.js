import React, {useRef, useEffect, useState} from "react"
import styled from "@emotion/styled"
// import BackgroundImage from "../images/engineering-images/Hero2Dark.png"
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import Calendar from "react-calendar"
import DRP from "../components/dateRangePicker"
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import { isWithinInterval } from "date-fns";
import { useStaticQuery, graphql } from "gatsby"

const FormDiv = styled.div`
max-width: 100vw;
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
    padding: 20px;
    width: 100vw;
    min-height: 500px;
    height: 100%;
    max-height: 800px;
    background-color: white;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    label, input, textarea, button {
        // margin: 0 20px;
        // margin-left: 20px;
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
        max-width: 700px;
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
        div {
            width: 90vw;
            max-width: 450px;
        }
    }
    .sent {
        color: black;
        transition: background-color .5s ease, color .5s ease;
        height: 500px;
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
    form {
        max-width: 600px!important;
        width: 100vw!important;
    }
    .info-div {
        width: 100vw;
        padding: 20px;
    }
}
@media(max-width:380px){
    form {
        h2 {
            font-size: 28px; 
        }
    }
}
`

export default function ContactElectrical({formLabel1, formLabel2, formLabel3, formLabel4}){
    const reRef = useRef();
    const [serverState, setServerState] = useState({formSent: false});
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
        
        
        fetch(`/api/sendgrid`, {
          method: `POST`,
          body: JSON.stringify({
            name: data.Name,
            phone: data.Phone,
            email: data.Email,
            message:data.Message,
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
  return (
            <FormDiv>
                {/* <ReCAPTCHA 
                    sitekey={process.env.RECAPTCHA_SITE_KEY} 
                    size="invisible"
                    ref={reRef} 
                /> */}
                <form onSubmit={handleSubmit(onSubmit)} autocomplete="on">
                    <div className={serverState.formSent === true ? "message sent" : "message"}>
                        <div>
                            <h2>Your message has been sent!</h2>
                            <p>Thanks for enquiring with CoastSweep Chimney Cleaning. We'll be in touch as soon as possible.</p>
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
                    
                    <label htmlFor="track">{formLabel2}</label>
                    <select
                    className="select-style"
                         id="track"
                         type="track" 
                         name="track" 
                         required
                         {...register("Track", { required: true})}
                    >
                        <option>1 hour private w/ own bike - $100</option>
                        <option selected>1 hour beginner group (max 4 people) - $200</option>
                        <option>1 hour Intermediate groups (max 6 people) - $250</option>
                        <option>4+ hour out-of-town option - $400 </option>
                        <option>Track access only - $20 per rider</option>
                    </select>  

                    <label htmlFor="bikes">{formLabel3}</label>
                    <select
                    className="select-style"
                         id="bikes"
                         type="bikes" 
                         name="bikes" 
                         required
                         {...register("Bikes", { required: true})}
                    >
                        <option selected>Need to hire</option>
                        <option>Bringing Own Bikes</option>
                        <option>Mixed</option>
                    </select>  

                    <label htmlFor="bikes">{formLabel4}</label>
                    <DRP />
                       
                    
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