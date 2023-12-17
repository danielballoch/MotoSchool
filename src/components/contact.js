import React from "react"
import styled from "@emotion/styled"
import ContactForm from "../components/contact-form"

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: lightblue;
// height: 960px;
width: 100%;
.content-right {

}
.content-left {
    max-width: 400px;
    padding-left: 40px;
    h2 {
        margin-top: 40px;
        margin-bottom: 0;
    }
    p {
        font-size: 14px;
    }
}
`

export default function Hero(){
    return(
        <Wrapper>
            <div className="content-left">
            <div className="content-box">
                    <h2>Booking Options</h2>
                    <p><b>Track Options</b></p>
                    <ol>
                        <li>1 hour private w/ own bike - $100</li>
                        <li>1 hour beginner group (max 4 people) - $200</li>
                        <li>4+ hour out-of-town option - $400</li>
                        <li>Track access only (must book in advance) - $20 per rider</li>
                    </ol>
                    <p><b>Bike and protective gear hire:</b></p>
                    <ol>
                        <li>All gear hire done in person</li>
                        <li>Kids bike/gear hire - $20 per session</li>
                        <li>Beginner (electric) bike/gear hire - $20 per session</li>
                        <li>Intermediate bike/gear hire - $30 per session</li>
                    </ol>
                    <p><b>Contact Us:</b></p>
                    <p>Phone: 021 304 228</p>
                    <p>Email: motoschool@gmail.com</p>
                    
                </div>
            </div>
            <div className="content-right">
                <ContactForm/>
            </div>
        </Wrapper>
    )
}