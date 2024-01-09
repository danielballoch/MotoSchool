import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { StructuredText } from 'react-datocms';
import styled from "@emotion/styled"

const Wrapper = styled.div`
max-width: 900px;
margin: auto;
padding: 200px 20px 100px 20px;
`



const IndexPage = (data) => {
  console.log(data)
  return (
    <Layout invert={true} location={data.location.pathname}>
      <Wrapper>
        <StructuredText
            data={data.data.datoCmsTermsAndConditionsPage.termsAndConditions.value}
            renderInlineRecord={({ record }) => {
                switch (record.__typename) {
                case 'DatoCmsArticle':
                    return <a href={`/articles/${record.slug}`}>{record.title}</a>;
                default:
                    return null;
                }
            }}
        />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO
title="MotoSchool | Terms & Conditions"
description="View Motoschools Terms & Conditions"
/>

export const pageQuery = graphql`
    query TermsAndConditions{
      datoCmsTermsAndConditionsPage {
        termsAndConditions {
          value
        }
    }
    }
`