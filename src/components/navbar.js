import React, {useState} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from 'gatsby-plugin-image'
import Phone from "../images/phone.svg"
import Email from "../images/mail.svg"
import Hamburger from "../components/hamburger"

const Wrapper = styled.header`
display: flex;
justify-content: center;
.wrapper {
    z-index: 500;
    position: absolute;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    align-content: center;
    height: 140px;
    margin: 10px auto;
    .logo {
        margin-right: auto;
    }
    .nav-middle {
        margin-right: 25px;
    }
    @media(max-width: 1080px) {
        justify-content: space-between;
        a {
        margin: 0 0 0 40px;
        }
        .menu {
            display: block!important;
        }
        .contact-us {
            display: none;
        }
    }
    .menu {
        display: none;
        margin: 0 40px 0 0;
        padding: 20px;
        z-index: 600;
    }
    a {
        color: white;
        text-decoration: none;
        font-size: 18px;
    }
    .logo {
        z-index: 800;
        color: black;
        font-size: 30px;
        font-weight: 600;
        // width: 100px;
        // height: 100px;
        // box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        // border-radius: 50%;
    }
    .contact-us {
        padding: 15px 45px;
        border: 2px solid white;
        border-radius: 1px;
        background-color: white;
        color: #333;
        transition: .3s;
        font-weight: 600;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        :hover {
            /* background-color: white ;
            color: #333; */
            background-color: #663199;
            border: 2px solid #663199;
            color: white;
            cursor: pointer;
        }
    }
    .nav-middle {
        a {
            padding: 15px 25px;
            font-size: 15px;
            font-weight: 600; 
        }
        .arrow {
            padding-left: 5px;
            /* padding:0 5px; */
            transition: .3s;
        }
        @media(max-width: 1080px) {
            display: none;
        }
    }
    .invert {
        a {
            color: black!important;
        }
    }
    .services-dropdown {
        display: none;
        /* display:flex; */
        margin-top: 10px;
        position: absolute;
        flex-direction: column;
        background-color: white;
        width: 250px;
        z-index: 500;
        margin-left: 95px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        a {
            color: #111;
            transition: .3s;
            :hover {
                /* background-color: #f2ece6; */
                background-color: rgb(229, 86, 57);
                color: white!important;
                p {
                    color: white!important;
                }
            }
        }
        p {
            transition: .3s;
            font-size: 14px;
            font-weight: 400;
            color: #333;
        }
    }
    .services:hover {
        .arrow {
            transform: rotate(-180deg);
            padding-right: 5px;
            padding-left: 0;
        }
        .services-dropdown {
            display: flex;
        }
    }
    .side-drawer {
        padding-top: 75px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        right: 0;
        top: 0;
        // max-width: 400px;
        width: 100vw;
        height: 100vh;
        background-color: white;
        // z-index: 500;
        a {
            color: black!important;
            font-size: 20px;
            margin: 20px 60px;
        }
        .contact-info {
            a {
                display: flex;
                align-items: center;
                img {
                    margin-right: 10px;
                }
            }
        }
    }
    .hide {
        display:none; 
    }
}
.fixed {
    position: fixed;
}
`

export default function Navbar({contact, invert}) {
    const [menu, updateMenu] = useState(false);
    const [toggle, updateToggle] = useState(false);
    return (
    <Wrapper>
            <div className={menu? "wrapper fixed" : "wrapper"}>
                <Link to="/" className="logo">
                    {/* <StaticImage alt="coast sweep chimney cleaning - in circle wrapped around chimney cleaner cartoon" placeholder="blurred" className="nav-logo" src="../images/icon.png"/> */}
                    MotoSchool</Link>
                <div className={invert? "nav-middle invert" : "nav-middle" }>
                    <Link to="/">Home</Link>
                    <Link to="/#trials-lessons">Trials Lessons</Link>
                    <Link to="/#our-tracks">Our Tracks</Link>
                    <Link to="/support">Support</Link>
                </div>
                {/* <Link className="contact-us" to="/contact">Contact Us</Link> */}
                {/* <button className="menu" onClick={() => updateMenu(!menu)}>Menu</button> */}
                <Hamburger invert={invert} toggle={toggle} clickFunction={() => {updateMenu(!menu); updateToggle(!toggle)}}/>
                <div className={menu ? "side-drawer" : "hide"}>
                    <Link  onClick={() => {updateMenu(!menu); updateToggle(!toggle)}} to="/">Home</Link>
                    <Link onClick={() => {updateMenu(!menu); updateToggle(!toggle)}} to="/#trials-lessons">Trial Lessons</Link>
                    <Link onClick={() => {updateMenu(!menu); updateToggle(!toggle)}} to="/#our-tracks">Our Tracks</Link>
                    <Link onClick={() => {updateMenu(!menu); updateToggle(!toggle)}} to="/support">Support</Link>
                </div>
            </div>
    </Wrapper>
  )
}