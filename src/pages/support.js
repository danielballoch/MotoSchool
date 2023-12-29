import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"




const IndexPage = () => {
  return (
    <Layout invert={true}>
      <div>
        <h1>Support Page</h1>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO
title="MotoSchool | Support"
description="Read through our frequently asked questions or get in touch through the contact form"
/>