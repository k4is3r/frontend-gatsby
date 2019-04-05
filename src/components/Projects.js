import React, { Component } from "react"
import Project from "./Project"
import portfolio1 from "../images/portfolio1.png"

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          id: 1,
          cardImage: portfolio1,
          imageAlt: "Page Screenshot",
          cardTitle: "Rock Paper Sccissors",
          cardSubtitle: "Game",
          cardText: ["Html5", "Css3", "jQuerry", "Javascript"],
          githubLink: "https://github.com/k4is3r",
          demoLink:
            "https://www.iwdevelop.com/projects/rock%20paper%20scciors/",
        },
        {
          id: 2,
          cardImage: portfolio1,
          imageAlt: "Page Screenshot",
          cardTitle: "Rock Paper Sccissors",
          cardSubtitle: "Game",
          cardText: ["Html5", "Css3", "jQuerry", "Javascript"],
          githubLink: "https://github.com/k4is3r",
          demoLink:
            "https://www.iwdevelop.com/projects/rock%20paper%20scciors/",
        },
        {
          id: 3,
          cardImage: portfolio1,
          imageAlt: "Page Screenshot",
          cardTitle: "Rock Paper Sccissors",
          cardSubtitle: "Game",
          cardText: ["Html5", "Css3", "jQuerry", "Javascript"],
          githubLink: "https://github.com/k4is3r",
          demoLink:
            "https://www.iwdevelop.com/projects/rock%20paper%20scciors/",
        },
        {
          id: 4,
          cardImage: portfolio1,
          imageAlt: "Page Screenshot",
          cardTitle: "Rock Paper Sccissors",
          cardSubtitle: "Game",
          cardText: ["Html5", "Css3", "jQuerry", "Javascript"],
          githubLink: "https://github.com/k4is3r",
          demoLink:
            "https://www.iwdevelop.com/projects/rock%20paper%20scciors/",
        },
        {
          id: 5,
          cardImage: portfolio1,
          imageAlt: "Page Screenshot",
          cardTitle: "Rock Paper Sccissors",
          cardSubtitle: "Game",
          cardText: ["Html5", "Css3", "jQuerry", "Javascript"],
          githubLink: "https://github.com/k4is3r",
          demoLink:
            "https://www.iwdevelop.com/projects/rock%20paper%20scciors/",
        },
      ],
    }
  }

  render() {
    return (
      <div className="projects">
        <div className="container mb-5">
          <div className="row">
            {this.state.projects.map(project => {
              return (
                <Project
                  key={project.id}
                  cardImage={project.cardImage}
                  imageAlt={project.imageAlt}
                  cardTitle={project.cardTitle}
                  cardSubtitle={project.cardSubtitle}
                  cardText={project.cardText}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
