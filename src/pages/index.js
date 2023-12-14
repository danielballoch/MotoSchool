import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Services from "../components/services"




const IndexPage = () => {
  return (
    <Layout invert={true}>
      <Hero/>
      <Intro/>
      <Services/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
