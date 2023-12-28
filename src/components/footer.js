import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from 'gatsby-plugin-image'
import Phone from "../images/phone.svg"
import Email from "../images/mail.svg"

const Wrapper = styled.footer`
position: relative;
background-color: black;
color: white;
width: 100%;
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
align-content: center;
bottom: 0;
height: 150px;
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
    height: 140px;
    margin: 0;
    .nav {
        display: flex;
        flex-direction: row;
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
.footer-logo {
max-width: 200px;
max-height: 200px;
width: 100vw;
height: 100%;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin: 0 30px;
}
}
.bottom-footer {
    margin: 10px;
}
`

export default function Footer() {
  return (
    <Wrapper>
        <div className="footer-content">
            <h2>MotoSchool</h2>
            {/* <StaticImage alt="coast sweep chimney cleaning - in circle wrapped around chimney cleaner cartoon" placeholder="blurred" className="footer-logo" src="../images/icon.png"/> */}
            <div className="nav">
                   <Link to="/">Home</Link>
                   <Link to="/why-coast-sweep">Trials Lessons</Link>
                   <Link to="/why-coast-sweep">Our Tracks</Link>
                   <Link to="/contact">Support</Link>
            </div>

        </div>
        <div className="bottom-footer">
            <Link to="/">© MotoSchool 2023</Link>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </div>
        
    </Wrapper>
  )
}