import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { StructuredText } from 'react-datocms';

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #122546;
color: white;
height: 960px;
width: 100%;
.content-left {
    display: flex;
    justify-content: center;
    align-items: center;
    
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
        font-size: 50px;
    }
    p {
        font-size: 14px;
    }
}
`

export default function Who(){
    const data = useStaticQuery(graphql`
        query HomepageWhoQuery {
            datoCmsHomepage {
                coachText {
                  value
                }
                coachImage {
                  gatsbyImageData
                  alt
                }
            }
        }
    `)
    let c = data.datoCmsHomepage;
    return(
        <Wrapper>
            <GatsbyImage className="content-left" image={getImage(c.coachImage.gatsbyImageData)} alt={c.coachImage.alt} placeholder="blur"/>
            <div className="content-right">
                <div className="content-box">
                    <StructuredText
                        data={c.coachText.value}
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
        </Wrapper>
    )
}