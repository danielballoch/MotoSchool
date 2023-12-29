import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"




const IndexPage = () => {
  return (
    <Layout invert={true}>
      <div>
        <h1>Terms & Conditions</h1>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO
title="MotoSchool | Terms & Conditions"
description="View Motoschools Terms & Conditions"
/>
