import React from "react"
import styled from "@emotion/styled"
import ContactForm from "../components/contact-form"
import Phone from "../images/phone.svg"
import Email from "../images/mail.svg"

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: grey;
height: 760px;
width: 100%;
.content-right {

}
.content-left {
    background-color: white;
    max-width: 400px;
    padding: 40px;
    height: fit-content;
    h2 {
        margin-top: 40px;
        margin-bottom: 0;
    }
    h4 {
        margin-top: 40px;
        margin-bottom: 0;
        font-size: 16px;
        :first-of-type {
            margin-top: 0;
        }
    }
    p {
        font-size: 14px;
        margin: 0;
    }
    .menu-subtext {
        font-size: 12px;
    }
    .contact-div {
        display: flex;
    }
    .contact-paragraph {
        display: flex;
        align-items: center;
        margin-top: 10px;
        font-size: 16px;
        img {
            margin-right: 10px;
            width: 23px;
        }
        :first-of-type {
            margin-right: 20px;
        }
    }
}
.content-right {
    padding: 20px;
}
`

export default function Hero(){
    return(
        <Wrapper>
            <div className="content-left">
            <div className="content-box">
                    <h4><b>Booking Options</b></h4>
                        <hr/>
                        <p>1 hour private w/ own bike - $100</p>
                        <hr/>
                        <p>1 hour beginner group (max 4 people) - $200</p>
                        <hr/>
                        <p>4+ hour out-of-town option - $400</p>
                        <hr/>
                        <p>Track access only (must book in advance) - $20 per rider</p>
                        <hr/>
                        
                    
                    <h4><b>Bike and protective gear hire:</b></h4>
                        <hr/>
                        <p>Kids bike/gear hire - $20 per session</p>
                        <hr/>
                        <p>Beginner (electric) bike/gear hire - $20 per session</p>
                        <hr/>
                        <p>Intermediate bike/gear hire - $30 per session</p>
                        <hr/>
                        <p className="menu-subtext"><i>*Gear hire and associated payment made in person*</i></p>
                    {/* <h4><b>Contact Us:</b></h4>
                    <div className="contact-div">
                    <p className="contact-paragraph"><img alt="telephone silhouette" src={Phone}/>021 304 228</p>
                    <p className="contact-paragraph"><img alt="envolope silhouette" src={Email}/> motoschool@gmail.com</p>
                    </div> */}
                   
                </div>
            </div>
            <div className="content-right">
                <ContactForm/>
            </div>
        </Wrapper>
    )
}