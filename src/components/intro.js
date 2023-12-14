import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: lightblue;
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
                    <h2>Build Skills & Confidence Safely</h2>
                    <p>Phil has 17+ years MX coaching experience and teaches riders at their pace and with safety at the forefront. </p>
                </div>
                <div className="content-box">
                    <h2>Rental Bikes & Gear Provided</h2>
                    <p>We have a range of bikes from 50cc for the kids, 150, 250 and also electric trails bikes and all the protective gear needed.</p>
                </div>
                <div className="content-box">
                    <h2>Progress 6 Different Tracks</h2>
                    <p>Tracks for all skill levels. We teach you the techniques needed to progress from our basic Oval to advanced circuits.</p>
                </div>
                <div className="content-box">
                    <h2>Ride Gas or Electric</h2>
                    <p>Our electric trials bikes are perfect for first timers! We also have traditional gas bikes from 50cc - 500cc for the bigger tracks.</p>
                </div>
            </div>
        </Wrapper>
    )
}