import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"

const about = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Header headingTitle="About" />
    <div className="container">
      <h1 className="display-4 mt-5" id="skillsHeader">
        Skills
      </h1>
      <div className="skills" />
    </div>
  </Layout>
)
export default about
