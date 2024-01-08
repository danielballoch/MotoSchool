import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { StructuredText } from 'react-datocms';
import VideoSRC from "../images/phil-motoschool.mp4"

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #122546;
color: white;
min-height: 960px;
height: 100vh;
box-sizing: border-box;
width: 100%;
.content-left {
    display: flex;
    justify-content: center;
    align-items: center;
    // object-fit: cover;
    color: white;
    width: 800px;
    height: fit-content;
}
.content-right {
    max-width: 400px;
    padding: 0 40px;
    h2 {
        margin-top: 40px;
        margin-bottom: 0;
        font-size: 50px;
    }
    p {
        font-size: 14px;
    }
}
@media(max-width:860px){
    flex-direction: column;
    height: auto;
    .content-left {
        width: 100%;
        img {
            object-position: 50% 0%;
        }   
    }
    .content-right {
        margin-bottom: 50px;
        h2 {
            font-size: 40px;
        }
    }
}
@media(max-width: 385px){
.content-right {
    h2 {
        font-size: 35px;
    }
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
            <video autoplay className="content-left"
              controls
              disablePictureInPicture 
              controlsList="nodownload"
              id="BgVideo"
              title="Phil MX"
              height="100%"
              width="100%"
              loop
              muted
              autoPlay={true}
              playsInline 
              preload="auto"
            >
                <source  src={VideoSRC} disablePictureInPicture  type="video/mp4" />
            </video>
            {/* <GatsbyImage className="content-left" image={getImage(c.coachImage.gatsbyImageData)} alt={c.coachImage.alt} placeholder="blur"/> */}
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