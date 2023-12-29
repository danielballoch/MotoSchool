import React, {useState} from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { StructuredText } from 'react-datocms';

const Wrapper = styled.div`
display: flex;
padding: 150px 0;
justify-content: center;
background-color: white;
min-height: 960px;
height: 100vh;
box-sizing: border-box;
width: 100%;
.title-rotate {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    position: absolute;
    left: 0;
    height: 100vh;
    min-height: 960px;
    margin-top: -150px;
    h2 {
        font-size: 100px;
        padding: 0;
        text-align: center;
        margin: 0;
        color: #122546;
        opacity: 0.2;
        line-height: 90%;
    }
}
.content-left {
    height: fit-content;
    max-width: 800px;
    b {
        margin-left: -18px;
    }
    .image-placeholder {
        width: 800px;
    }
    .track-list {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
        margin-top: 30px;
    }
    .track-text {
        max-width: 220px;
        padding: 0 20px;
        opacity: 0.6;
        p {
            margin: 5px 0;
        }
        :hover {
            opacity: 1;
            cursor: pointer;
        }
    }
    .active {
        opacity: 1;
    }
}
.content-right {
    max-width: 400px;
    padding-left: 40px;
    .image-placeholder {
        width: 400px;
        border: none;
    }
    .content-box {
        margin-top: 30px;
        padding: 0 10px;
    }
}
.image-placeholder {
    height: 360px;
    width: 500px;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content-left-mobile {
 display: none;       
}
@media(max-width: 1270px){
    flex-direction: column;
    height: auto;
    padding: 50px 0;
    .title-rotate {
        writing-mode: unset;
        text-orientation: unset;
        position: relative;
        height: fit-content;
        min-height: unset;
        margin-top: 0;
    }
    .content-left {
        display: none;
    }
    .content-left-mobile {
        display: flex;
        margin-top: 50px;
        .mobile-track-item {
            width: 90%;
            margin: 0 auto 50px auto;
            .image-placeholder {
                width: 100%;
            }
        }
    }
    .content-right {
        max-width: 90%;
        padding-left: 0;
        margin: auto;
        .image-placeholder {
            width: 100%;
            border: none;
        }
        .content-box {
            margin-top: 30px;
            padding: 0;
        }
    }
}
@media(max-width: 922px){
.title-rotate {
    h2 {
        font-size: 70px;
    }
    
}
}
`

export default function TrackWhere(){
    const [active, setActive] = useState(0);
    const data = useStaticQuery(graphql`
        query HomepageTrackWhereQuery {
            tracks: allDatoCmsMotoschoolTrack {
                nodes {
                  trackName
                  trackBlurb
                  mainImage {
                    gatsbyImageData
                    alt
                  }
                }
            }
            main: datoCmsHomepage {
                tracksTrailsHeading
                locationText {
                  value
                } 
            }
        }
    `)
    let tracks = data.tracks.nodes;
    let main = data.main;
    let order = []
    let orderedTracks = []
    for (let i = 0; i <= tracks.length-1; i++){
        order.push([tracks[i].trackName, i])
    }
    order.sort()
    for (let i = 0; i <= tracks.length-1; i++){
        orderedTracks.push(tracks[order[i][1]])
    }
    return(
        <Wrapper id="our-tracks">
            <div className="title-rotate"><h2>TRACKS & TRAILS</h2></div>
            <div className="content-left">
                <GatsbyImage className="image-placeholder" image={getImage(orderedTracks[active].mainImage.gatsbyImageData)} alt={orderedTracks[0].mainImage.alt} placeholder="blur"/>
                {/* <div className="image-placeholder">Image Placeholder</div> */}
                <div className="track-list">
                    {orderedTracks.map((track, i) => (
                        <div onClick={() => setActive(i)} className={active === i? "track-text active" : "track-text"}><p><b>{track.trackName}: </b>{track.trackBlurb}</p></div>
                    ))}
                </div>
            </div>
            <div className="content-left-mobile">
                <div className="track-list">
                    {orderedTracks.map((track, i) => (
                        <div className="mobile-track-item">
                            <GatsbyImage className="image-placeholder" image={getImage(track.mainImage.gatsbyImageData)} alt={track.mainImage.alt} placeholder="blur"/>
                            <div onClick={() => setActive(i)} className={active === i? "track-text active" : "track-text"}><p><b>{track.trackName}: </b>{track.trackBlurb}</p></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="content-right">
                {/* <div className="image-placeholder">Image Placeholder</div> */}
                <iframe className="image-placeholder" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35666.34531285192!2d176.03591442279213!3d-37.80199983327254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6dcfbbc92ec5cb%3A0xb11b99cb54815c53!2sOmanawa%20Hall!5e0!3m2!1sen!2snz!4v1702947643477!5m2!1sen!2snz" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="content-box">
                    <StructuredText
                            data={main.locationText.value}
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