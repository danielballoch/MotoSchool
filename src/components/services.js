import React, {useState} from "react"
import styled from "@emotion/styled"
import {useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"

const Wrapper = styled.div`
display: grid;
flex-direction: column;
background-color: rgba(0,0,0,0.7);
justify-content: center;
align-items: center;
box-sizing: border-box;
min-height: 960px;
height: 100vh;
width: 100%;
color: white;
overflow: hidden;
.background-image {
    grid-area: 1/1;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    // max-height: 100vh;
    filter: blur(20px) brightness(50%);
    transform: scale(1.1); 
    
}

.content-wrapper {
    
    z-index: 200;
    grid-area: 1/1;
    position: relative;
    place-items: center;
    display: grid;
    width: 100vw;
    // max-height: 100vh;
}
.title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
    h2 {
        font-size: 30px;
        margin: 0;
    }
    p {
        font-size: 18px;
        margin: 10px 0 0 0;
        max-width: 680px;
    }
}
.skill-level-wrapper {
    display: flex;
    fit-content;
    color: black;
    .skill-level {
        // border: solid 10px white;
        width: 300px;
        margin: 10px;
        background-color: white;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        transition: .3s;
        img {
            transition: .3s;
            filter: brightness(110%); 
            filter: contrast(110%);
        }
        :hover {
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transform: scale(1.015);
            img {
                filter: brightness(110%); 
                filter: contrast(110%);
            }
            
        }
        .level-content {
            box-sizing: border-box;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            min-height: 210px;
            h3 {
                margin-top: 0;
            }
            p {
                margin: 0;
            }
            a {
                margin-top: auto
            }
        }
        .img {
            width: 300px;
            height: 200px;
            background-color: grey;
            display: flex;
            justify-content: center;
            align-items:center;
        }
    }
    
}
@media(max-width:1350px){
    .skill-level-wrapper {
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 50px;
    }
    .title-wrapper {
        padding: 50px 50px 0 50px;
    }
    height: auto;
}
`

export default function Services(){
    const [activeLesson, setActiveLesson] = useState(0)
    const data = useStaticQuery(graphql`
        query HomepageLessonsQuery {
            main: datoCmsHomepage {
                lessonsHeading
                lessonsSubheading
            }
            lessons: allDatoCmsLessonLevel {
                nodes {
                  title
                  blurb
                  buttonText
                  mainImage {
                    gatsbyImageData
                    alt
                  }
                }
              }
        }
    `)
    let main = data.main;
    let lessons = data.lessons.nodes;
    let order = []
    let orderedLessons = []
    for (let i = 0; i <= lessons.length-1; i++){
        order.push([lessons[i].title, i])
    }
    order.sort()
    for (let i = 0; i <= lessons.length-1; i++){
        orderedLessons.push(lessons[order[i][1]])
    }
    return(
        <Wrapper id="trials-lessons">
            <GatsbyImage className="background-image" image={getImage(orderedLessons[activeLesson].mainImage.gatsbyImageData)} alt={orderedLessons[activeLesson].mainImage.alt} placeholder="blur"/>
            <div className="content-wrapper">
                <div className="title-wrapper">
                    <h2>{main.lessonsHeading}</h2>
                    <p>{main.lessonsSubheading}</p>
                </div>
                <div className="skill-level-wrapper">
                {orderedLessons.map((lesson, i) => (
                        <div className="skill-level" onMouseEnter={() => setActiveLesson(i)}>
                        <GatsbyImage className="img" image={getImage(lesson.mainImage.gatsbyImageData)} alt={lesson.mainImage.alt} placeholder="blur"/>
                        {/* <div className="img">Image Placeholder</div> */}
                        <div className="level-content">
                            <h3>{lesson.title}</h3>
                            <p>{lesson.blurb}</p>
                            <a>{lesson.buttonText}</a>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}