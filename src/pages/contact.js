import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithubAlt, FaLinkedin, FaTwitter } from "react-icons/fa"
import Header from "../components/Header"

const contact = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <Header headingTitle="Contact" />
    <div className="container contactWrapper">
      <h3 className="mb-5" id="contactText">
        If you are interested in working with me or want more information about
        my work, I would love to hear from you! You can contact me through any
        of the methods below:
      </h3>

      <h1 className="display-4 contactHeader">Social Media:</h1>
      <div className="icons">
        <a
          className="contactLink"
          id="githubLink"
          target="_blank"
          href="https://github.com/k4is3r"
          rel="noopener noreferrer"
        >
          <FaGithubAlt id="iconLink" />
        </a>
        <a
          className="contactLink"
          id="linkedinLink"
          target="_blank"
          href="https://www.linkedin.com/in/eduardo-imery-25b9b545/"
          rel="noopener noreferrer"
        >
          <FaLinkedin id="iconLink" />
        </a>
        <a
          className="contactLink"
          id="twitterMainLink"
          target="_blank"
          href="https://twitter.com/k4is3er"
          rel="noopener noreferrer"
        >
          <FaTwitter id="iconLink" />
        </a>
      </div>

      <h1 className="display-4 mt-5 contactHeader">Email:</h1>
      <p id="email">iw.developsv@gmail.com</p>
    </div>
  </Layout>
)

export default contact
