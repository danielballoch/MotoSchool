import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"

const Wrapper = styled.div`
display: grid;
justify-content: center;
align-items: center;
background-color: grey;
height: 100vh;
width: 100%;
// padding-top: 100px;
::before {
    z-index: 100;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8); /* Change the color and opacity as needed */
}
.background-image {
    grid-area: 1/1;
    width: 100%;
    margin: 0;
    padding: 0;
    max-height: 100vh;
}

.content-wrapper {
    z-index: 200;
    grid-area: 1/1;
    position: relative;
    place-items: center;
    display: grid;
    max-height: 100vh;
}
.main-content {
    width: 580px;
    padding-right: 400px;
    height: fit-content;
    h1 {
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 100px;
        font-size: 42px;
        font-weight: 600px;
        color: #111;
    }
    p {
        font-size: 18px;
        margin-bottom: 40px;
    }
    button {
        width: 300px;
        height: 60px;
        color: black;
        font-size: 14px;
        font-weight: 600;
        color: white;
        background-color: #FA5014;
        border: 2px solid #FA5014;
        // background-color: #4a9c2d;
        // border: 2px solid #4a9c2d;
        :hover {
            cursor: pointer;
        }
    }
}
`

export default function Hero(){
    const data = useStaticQuery(graphql`
        query HomeHeroQuery {
            datoCmsHomepage {
                heroTitle
                heroBlurb
                heroButton
                introImage {
                    gatsbyImageData
                    alt
                }
            }
        }
    `)
    let c = data.datoCmsHomepage;
    return(
        <Wrapper>
            <GatsbyImage className="background-image" image={getImage(c.introImage.gatsbyImageData)} alt={c.introImage.alt} placeholder="blur"/>
            <div className="content-wrapper">
                <div className="main-content">
                    <h1>{c.heroTitle}</h1>
                    <p>{c.heroBlurb}</p>
                    <button>{c.heroButton}</button>
                </div>
            </div>
        </Wrapper>
    )
}