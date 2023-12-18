import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from 'gatsby-plugin-image'
import Phone from "../images/phone.svg"
import Email from "../images/mail.svg"

const Wrapper = styled.footer`
position: absolute;
background-color: black;
color: white;
width: 100%;
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
align-content: center;
/* height: 150px; */
margin: auto;
a {
    color: white;
    margin: 0 20px;
    padding: 10px;
    text-decoration: none;
}
.footer-content {
    display: flex;
    align-items: center;
    .nav {
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        margin-bottom: 10px;
        a {
            font-size: 18px;
        }
    }
    .main-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        /* margin-left: 50px; */
        h2 {
            margin: 0 20px;
            padding: 10px;
        }
        p {
            max-width: 450px;
            margin: 0 20px;
            padding: 10px;
        }
        .contact-info {
            display: flex;
            flex-wrap: wrap;
            margin-top: 0;
            a {
                display: flex;
                align-items: start;
                font-size: 18px;
            }
            img {
                filter: invert(100);
                margin-right: 5px;
            }
        }
    }
}
div {
    :last-of-type {
        margin-top: 40px;
        margin-bottom: 10px;
    }
}
.footer-logo {
max-width: 200px;
max-height: 200px;
width: 100vw;
height: 100%;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin: 0 30px;
}
@media(max-width: 970px){
    .footer-content {
        flex-direction: column;
        align-items: start;
    }
    .bottom-footer {
        font-size: 12px;
        max-width: 470px;
        width: 100%;
        display: flex;
        justify-content: start;
        a {
            padding: 0 10px;
        }
    }
}
@media(max-width:440px){
    .footer-logo{
        max-width: 200px;
        max-height: 200px;
    }
    
}
`

export default function Footer() {
  return (
    <Wrapper>
        <div className="footer-content">
            <StaticImage alt="coast sweep chimney cleaning - in circle wrapped around chimney cleaner cartoon" placeholder="blurred" className="footer-logo" src="../images/icon.png"/>
            <div className="nav">
                   <Link to="/">Home</Link>
                   <Link to="/why-coast-sweep">Our Tracks</Link>
                   <Link to="/contact">Support</Link>
                   <Link to="/why-coast-sweep">Book a lesson</Link>
            </div>
            <div className="main-content">
                <h2>Book Your Trials Lesson Today!</h2>
                <p>MX Coaching ages 4 to 104. For first-timers and speed demons alike; Bikes and safety gear available for hire.</p>
            </div>
        </div>
        <div className="bottom-footer">
            <Link to="/">© MotoSchool 2023</Link>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </div>
        
    </Wrapper>
  )
}