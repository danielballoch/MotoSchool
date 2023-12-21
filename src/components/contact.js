import React from "react"
import styled from "@emotion/styled"
import ContactForm from "../components/contact-form"
import Phone from "../images/phone.svg"
import Email from "../images/mail.svg"
import { useStaticQuery, graphql } from "gatsby"
import { StructuredText } from 'react-datocms';

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: grey;
height: 760px;
width: 100%;
.content-right {

}
.content-left {
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
        <Wrapper>
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
        </Wrapper>
    )
}