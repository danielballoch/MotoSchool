import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { StructuredText } from 'react-datocms';

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #17181C;
color: white;
box-sizing: border-box;
min-height: 960px;
height: 100vh;
width: 100%;
.content-left {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
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
@media(max-width:1100px){
    flex-direction: column;
    .content-right {
        max-width: 600px;
        padding: 0;
        margin-bottom: 50px;
    }
    .content-left {
        margin-top: 50px;
    }
}
@media(max-width: 650px){
    .content-left {
        width: 100%;
        margin-top: 0;
    }
    .content-right {
        width: 90%; 
    }
}
`

export default function Intro(){
    const data = useStaticQuery(graphql`
        query HomepageIntroQuery {
            datoCmsHomepage {
                introImage {
                    gatsbyImageData
                    alt
                }
                introText {
                    value
                }
            }
        }
    `)
    let c = data.datoCmsHomepage;
    return(
        <Wrapper>
            <GatsbyImage className="content-left" image={getImage(c.introImage.gatsbyImageData)} alt={c.introImage.alt} placeholder="blur"/>
            {/* <div className="content-left">Image Placeholder</div> */}
            <div className="content-right">
            <StructuredText
                data={c.introText.value}
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
        </Wrapper>
    )
}