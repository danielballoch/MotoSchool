import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { StructuredText } from 'react-datocms';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"


const Wrapper = styled.div`
/* padding-top: 200px; */
padding: 200px 20px 100px 20px;
margin: auto;
max-width: 900px;
hr {
        margin: 50px 0;
    }
header {
    min-height: 300px;
    
}
.button-div {
    .button2 {
        margin-left: 40px;
    }
}
.button1 {
    width: fit-content;
    padding: 20px 40px;
    /* height: 60px; */
    border-radius: 0;
    font-weight: 600;
    text-decoration: none;
    transition: .3s;
    border: 2px solid #4a9c2d;
    background-color: #4a9c2d;
    color: white;
    // box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    // box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    :hover {
        cursor: pointer;
        // color: white;
        // background-color: #c9d2c8;
        // border-color: #c9d2c8;
    }
}
.button2{
    width: fit-content;
    padding: 20px 40px;
    /* height: 60px; */
    border-radius: 0;
    font-weight: 600;
    background-color: #FA5014;
    border: 2px solid #FA5014;
    text-decoration: none;
    transition: .3s;
    color: white;
    :hover {
        cursor: pointer;
        // color: white;
        // background-color: black;
    }
}
section {
    margin-top: 50px;
    .gatsby-resp-image-wrapper {
        margin: 0!important;
        max-width: 100%!important;
    }
    img {

    }
    /* display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start; */
}
.main-image {
    height: 500px;
    width: 100%;
}
@media(max-width: 500px){
    .button-div {
        display: flex;
        flex-direction: column;
        .button2 {
            margin-left: 0;
            margin-top: 20px;
        }
    }
}
`

const BlogPostTemplate = (data) => {
    
//   const siteTitle = site.siteMetadata?.title || `Title`
    console.log("temData: ", data)
    let service = data.data.datoCmsLessonLevel
    console.log("service: ", service)
    const image = getImage(service.mainImage.gatsbyImageData)
  return (
    <Layout invert={true}>
        <Wrapper id="top">
        <article
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                <GatsbyImage image={image} alt="alt" className="main-image"/>
                
                <h1 itemProp="headline">{service.title}</h1>
                <p>{service.blurb}</p>
                <p>{service.lessonText}</p>
                <hr></hr>
                
                <div className="button-div">
                    <Link to="/#booking-options" className="button1">View Booking Options</Link>
                    <Link to="/#trials-lessons" className="button2">Go Back To Lessons</Link>
                </div>
                
            </header>
        </article>
      </Wrapper>
    </Layout>
  )
}

export const Head = (data) => {
    let lesson = data.data.datoCmsLessonLevel;
    return (
      <Seo
        title={lesson.title + " | MotoSchool"}
        description={lesson.blurb}
      />
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
        datoCmsLessonLevel(id: {eq: $id}) {
            id
            title 
            blurb
            lessonText
            buttonText
            mainImage {
                gatsbyImageData
                alt
            }
        }

    }
`