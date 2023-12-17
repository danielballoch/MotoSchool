import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Services from "../components/services"
import Who from "../components/who"
import TrackWhere from "../components/track-where"
import Contact from "../components/contact"




const IndexPage = () => {
  return (
    <Layout invert={true}>
      <Hero/>
      <Intro/>
      <Services/>
      <Who/>
      <TrackWhere/>
      <Contact/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
