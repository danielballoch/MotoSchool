import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from "./navbar"
import Footer from "./footer"


export default function Layout({children, invert}){
  return (
    <div>
      <Navbar invert={invert} contact={"hello"}/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

