import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"




const IndexPage = () => {
  return (
    <Layout invert={true}>
      <Hero/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
