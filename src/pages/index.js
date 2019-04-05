import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Animated } from "react-animated-css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from "reactstrap"
import { FaGithubAlt, FaLinkedin, FaTwitter } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="landing">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Helmet>
      <div className="dark-overlay landing-inner text-light">
        <div className="container" id="landingWrapper">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4" id="landingHeader">
                Eduardo Imery
              </h1>
              <p className="lead" id="landingParagraph">
                Front End Developer
              </p>
              <Animated
                animationIn="slideInRight"
                animationOut="fadeOut"
                isVisible={true}
              >
                <Link to="/my-work">
                  <Button className="mt-5 mb-4" id="projectBtn">
                    View Projects
                  </Button>
                </Link>
              </Animated>
              <div className="landingIcons">
                <Animated
                  animationIn="rollIn"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <a
                    className="contactMainLink"
                    id="githubMainLink"
                    target="_blank"
                    href="https://github.com/k4is3r"
                    rel="noopener noreferrer"
                  >
                    <FaGithubAlt id="iconMainLink" />
                  </a>
                </Animated>
                <Animated
                  animationIn="rollIn"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <a
                    className="contactMainLink"
                    id="linkedinMainLink"
                    target="_blank"
                    href="https://www.linkedin.com/in/eduardo-imery-25b9b545/"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin id="iconMainLink" />
                  </a>
                </Animated>
                <Animated
                  animationIn="rollIn"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <a
                    className="contactMainLink"
                    id="twitterMainLink"
                    target="_blank"
                    href="https://twitter.com/k4is3er"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter id="iconMainLink" />
                  </a>
                </Animated>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
