import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Projects from '../components/Projects'

const myWork = () => (
  <Layout>
    <SEO title="My Work" keywords={[`gatsby`, `application`, `react`]} />
    <Header headingTitle="Personal Projects" />
    <Projects />
  </Layout>
)

export default myWork 