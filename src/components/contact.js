import React from "react"
import styled from "@emotion/styled"
import ContactForm from "../components/contact-form"
import Phone from "../images/phone.svg"
import Email from "../images/mail.svg"
import { useStaticQuery, graphql } from "gatsby"
import { StructuredText } from 'react-datocms';
import { GatsbyImage, getImage} from "gatsby-plugin-image"

const Wrapper = styled.div`
display: grid;
justify-content: center;
align-items: center;
background-color: grey;
min-height: 960px;
height: 100vh;
width: 100vw;
box-sizing: border-box;
::before {
    display: grid;
    grid-area: 1/1;
    z-index: 100;
    content: "";
    display: block;
    width: 100vw;
    height: 100%;
    background-color: rgba(18,37,70, 0.8); /* Change the color and opacity as needed */
}
.background-image {
    grid-area: 1/1;
    width: 100vw;
    margin: 0;
    padding: 0;
    height: 100%;
    filter: 
}

.content-wrapper {
    z-index: 200;
    grid-area: 1/1;
    position: relative;
    flex-direction: row;
    display: grid;
    max-height: 100%;
    justify-content: center;
    align-items: center;
}
.content-left {
    justify-self: end;
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
    em {
        font-size: 13px;
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
.content {
    display: flex;
    justify-content: center;
    max-width: 100vw;
    align-items: center;
}
@media(max-width:980px){
    height: auto;
    .content-wrapper {
        width: 90%;
        margin: auto;
        .content {
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 50px 0;
            .content-left {
                justify-self: center;
                margin-bottom: 50px;
            }
            .content-right {
                width: 95%;
            }
        }
    }   
}
`

export default function Hero(){
    const data = useStaticQuery(graphql`
        query HomepageContactQuery {
            home: datoCmsHomepage {
                contentLeft {
                  value
                }
                formLabel1
                formLabel2
                formLabel3
                formLabel4
                introImage {
                    gatsbyImageData
                    alt
                }
            }
            times: allDatoCmsTimesAvailable {
                nodes {
                    time
                }
            }
            unavailable: allDatoCmsBookedDate {
                nodes {
                  bookedDate
                }
            }
        }
        
    `)
    let c = data.home;
    let timesAvailable = data.times.nodes
    let datesUnavailable = data.unavailable.nodes
    return(
        <Wrapper id="booking-options">
            <GatsbyImage className="background-image" image={getImage(c.introImage.gatsbyImageData)} alt={c.introImage.alt} placeholder="blur"/>
            <div className="content-wrapper">
                <div className="content">
                    <div className="content-left">
                        <div className="content-box">
                        <StructuredText
                                data={c.contentLeft.value}
                                renderInlineRecord={({ record }) => {
                                    switch (record.__typename) {
                                    case 'DatoCmsArticle':
                                        return <a href={`/articles/${record.slug}`}>{record.title}</a>;
                                    default:
                                        return null;
                                    }
                                }}
                        />
                        </div>
                    </div>
                    <div className="content-right">
                        <ContactForm formLabel1={c.formLabel1} formLabel2={c.formLabel2} formLabel3={c.formLabel3} formLabel4={c.formLabel4} timesAvailable={timesAvailable} datesUnavailable={datesUnavailable}/>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}