import React, { Component } from "react"
import Project from "./Project"
import portfolio1 from "../images/portfolio1.png"
import portfolio2 from "../images/portfolio2.png"
import portfolio3 from "../images/portfolio3.png"
import portfolio4 from "../images/portfolio4.png"
import portfolio5 from "../images/portfolio5.png"
import portfolio6 from "../images/portfolio6.png"
import portfolio7 from "../images/portfolio7.png"
import portfolio8 from "../images/portfolio8.png"
import portfolio9 from "../images/portfolio9.png"

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          id: 1,
          cardImage: portfolio6,
          imageAlt: "Sihuapilapa Resort",
          cardTitle: "Sihuapilapa Resort",
          cardSubtitle: "Hotel Resort page",
          cardText: ["React", "Node", "Bootsrtrap","Contentful"],
          githubLink: "https://github.com/k4is3r/react-sectionTry",
          demoLink: "https://sihuapilaparesort.netlify.com/",
        },
        {
          id: 2,
          cardImage: portfolio8,
          imageAlt: "instaclone",
          cardTitle: "StalkerGram",
          cardSubtitle: "Instagram clone",
          cardText: ["Python", "Django"],
          githubLink: "https://github.com/k4is3r/stalkergram-django",
          demoLink: "http://stalkergram.iwdevelop.com",
        },
        {
          id: 3,
          cardImage: portfolio3,
          imageAlt: "Page Screenshot",
          cardTitle: "Landing Page Resume",
          cardSubtitle: "Resume",
          cardText: ["Html5", "CSS3", "jQuerry", "Javascript"],
          githubLink: "https://github.com/k4is3r",
          demoLink: "https://www.iwdevelop.com/projects/production1/",
        },
        {
          id: 4,
          cardImage: portfolio4,
          imageAlt: "Page Screenshot",
          cardTitle: "Car List",
          cardSubtitle: "App",
          cardText: ["Html5", "Css3", "Ruby On Rails"],
          githubLink: "https://github.com/k4is3r/my_frist_rails_app",
          demoLink: "https://enigmatic-garden-60350.herokuapp.com/",
        },
        {
          id: 5,
          cardImage: portfolio5,
          imageAlt: "Page Screenshot",
          cardTitle: "Juego de Colores",
          cardSubtitle: "Game",
          cardText: ["Javascript", "CSS3", "Htlm5"],
          githubLink: "https://github.com/k4is3r/juegoColores",
          demoLink: "https://www.iwdevelop.com/projects/production2/",
        },
        {
          id: 6,
          cardImage: portfolio1,
          imageAlt: "Page Screenshot",
          cardTitle: "Rock Paper Sccissors",
          cardSubtitle: "Game",
          cardText: ["Html5", "CSS3", "jQuerry", "Javascript"],
          githubLink: "https://github.com/k4is3r",
          demoLink:"https://www.iwdevelop.com/projects/rock%20paper%20scciors/",
        },
        {
          id: 7,
          cardImage: portfolio7,
          imageAlt: "ninatex",
          cardTitle: "Industrias Ninatex",
          cardSubtitle: "",
          cardText: ["Wordpress", "CSS3", "Bootsrtrap","Javascript"],
          githubLink: "http://www.industriasninatex.com/",
          demoLink: "http://www.industriasninatex.com/",
        },
        {
          id: 8,
          cardImage: portfolio8,
          imageAlt: "instaclone",
          cardTitle: "StalkerGram",
          cardSubtitle: "Instagram clone",
          cardText: ["Python", "Django"],
          githubLink: "https://github.com/k4is3r/stalkergram-django",
          demoLink: "http://stalkergram.iwdevelop.com",
        },
        {
          id: 9,
          cardImage: portfolio9,
          imageAlt: "adivina",
          cardTitle: "ChoreBot",
          cardSubtitle: "Game",
          cardText: ["Javascript", "Html5","CSS3"],
          githubLink: "https://github.com/k4is3r/stalkergram-django",
          demoLink: "https://iwdevelop.com/projects/production3/",
        },
        {
          id: 10,
          cardImage: portfolio2,
          imageAlt: "Page Screenshot",
          cardTitle: "TodoList",
          cardSubtitle: "App",
          cardText: ["React", "Javascript"],
          githubLink: "https://github.com/k4is3r/todolist_react",
          demoLink: "https://silly-clarke-5e1c50.netlify.com/",
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
