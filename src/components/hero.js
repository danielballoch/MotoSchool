import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: grey;
height: 100vh;
width: 100%;
// padding-top: 100px;
.main-content {
    width: 580px;
    padding-right: 400px;
    height: fit-content;
    h1 {
        margin-top: 0;
        padding-top: 100px;
        font-size: 45px;
    }
    p {
        font-size: 18px;
    }
    button {
        width: 300px;
        height: 60px;
        color: black;
        font-size: 16px;
        background-color: rgba(0,0,0,0);
        border: 2px solid black;
        :hover {
            cursor: pointer;
        }
    }
}
`

export default function Hero(){
    return(
        <Wrapper>
            <div className="main-content">
                <h1>Motocross Trails Training and Family Dirt Bike Fun.</h1>
                <p>MX Coaching ages 4 to 104. For first-timers and speed demons alike; Bikes and safety gear available for hire.</p>
                <button>View Booking Options</button>
            </div>
        </Wrapper>
    )
}