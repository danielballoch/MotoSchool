import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(0,0,0,0.7);
justify-content: center;
align-items: center;
height: 960px;
width: 100%;
color: white;
.title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin-bottom: 40px;
    h2 {
        font-size: 30px;
        margin: 0;
    }
    p {
        font-size: 18px;
        margin: 0;
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
        
        :hover {
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
`

export default function Services(){
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
        order.push([lessons[i].trackName, i])
    }
    order.sort()
    for (let i = 0; i <= lessons.length-1; i++){
        orderedLessons.push(lessons[order[i][1]])
    }
    console.log(lessons,order,orderedLessons)
    return(
        <Wrapper>
            <div className="title-wrapper">
                <h2>{main.lessonsHeading}</h2>
                <p>{main.lessonsSubheading}</p>
            </div>
            <div className="skill-level-wrapper">
            {orderedLessons.map((lesson, i) => (
                    <div className="skill-level">
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
        </Wrapper>
    )
}