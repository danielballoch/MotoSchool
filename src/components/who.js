import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: lightgrey;
height: 960px;
width: 100%;
.content-left {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    color: white;
    width: 600px;
    height: 600px;
}
.content-right {
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
            <div className="content-left">Image Placeholder</div>
            <div className="content-right">
                <div className="content-box">
                    <h2>Youth & Adult Motocross Coach</h2>
                    <p>Phil Shilton takes all classes at MotoSchool Tauranga. His dad got him on a bike at 6, along with his sister, and he’s had a passion ever since. </p>
                    <ul>
                        <li>National and International MX/trials competitor</li>
                        <li>Riding dirt bikes/trial bikes for 32 years </li>
                        <li>Private coaching for 16+ years</li>
                        <li>First aid trained </li>
                    </ul>
                    <p>Now with a young family passing on the lessons of the sport and building tracks at home has been a dream come true. Phil, his wife Suzy and their kids live right by the track and keep it maintained while also running their LawnFix lawn care business by day. </p>
                </div>
            </div>
        </Wrapper>
    )
}