import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: lightblue;
height: 960px;
width: 100%;
.skill-level-wrapper {
    display: flex;
    .skill-level {
        border: solid 1px black;
        width: 300px;
        margin: 10px;
        .level-content {
            padding: 10px 20px;
        }
        .img {
            width: 300px;
            height: 200px;
            background-color: grey;
            display: flex;
            justify-content: center;
            align-items:center;
        }
    }
    
}
`

export default function Hero(){
    return(
        <Wrapper>
            <div className="title-wrapper">
                <h2>Motocross Lessons for every age and level</h2>
                <p>We can take you or your kids from absolute beginners to competitive racers.</p>
            </div>
            <div className="skill-level-wrapper">
                <div className="skill-level">
                    <div className="img">Image Placeholder</div>
                    <div className="level-content">
                        <h3>Level 1: First Timers</h3>
                        <p>This level will get you comfortable and confident with the basics of riding at your pace.</p>
                        <a>Learn More</a>
                    </div>
                </div>
                <div className="skill-level">
                    <div className="img">Image Placeholder</div>
                        <div className="level-content">
                        <h3>Level 2: Beginners</h3>
                        <p>Once you know the basics it’s time to learn the needed skills to ride our beginner tracks with confidence. </p>
                        <a>Learn More</a>
                    </div>
                </div>
                <div className="skill-level">
                    <div className="img">Image Placeholder</div>
                    <div className="level-content">
                        <h3>Level 3: Intermediate</h3>
                        <p>Intermediate lessons will get you slinging mud round corners and even catching some air.</p>
                        <a>Learn More</a>
                    </div>
                </div>
                <div className="skill-level">
                    <div className="img">Image Placeholder</div>
                    <div className="level-content">
                        <h3>Level 4: Advanced</h3>
                        <p>For advanced students we keep improving the basics and build more advanced techniques to improve lap times and help reach your goals.</p>
                        <a>Learn More</a>
                    </div>
                </div>
            </div>
            
            
            
        </Wrapper>
    )
}