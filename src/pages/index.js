import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Services from "../components/services"
import Who from "../components/who"
import TrackWhere from "../components/track-where"
import Contact from "../components/contact"
import SEO from "../components/seo"




const IndexPage = ({location}) => {
  return (
    <Layout invert={true} location={location.pathname}>
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

export const Head = () => <SEO
title="MOTOSCHOOL | Kids and Adults Trials Coaching Tauranga"
description="Trials and Motocross facility and coaching in Tauranga, New Zealand. We help dirt bike riders gain confidence and improve their skills."
/>
