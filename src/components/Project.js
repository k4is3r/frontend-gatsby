import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import { Animated } from "react-animated-css";
import { 
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  CardTitle,
  CardSubtitle,
  Button,
  ListGroup,
  ListGroupItem } from "reactstrap";

class Project extends Component {
  render() {
    const { 
      cardImage, 
      imageAlt, 
      cardTitle, 
      cardSubtitle, 
      cardText, 
      githubLink, 
      demoLink } = this.props

    return (
      <div className="col-md-6 col-lg-4">
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
      </Helmet>
        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
          <Card className="mb-5 projectCard">
            <CardImg className="img-fluid" top width="100%" src={ cardImage } alt={ imageAlt } />
            <CardBody>
              <a href={ githubLink } target="_blank" rel="noopener noreferrer">
                <Button className="mr-3 mt-3 githubBtn">View on GitHub</Button>
              </a>
              <a href={ demoLink } target="_blank" rel="noopener noreferrer">
                <Button className="mt-3 mb-3 liveBtn">View Live Version</Button>
              </a>
              <CardTitle>{ cardTitle }</CardTitle>
              <CardSubtitle>{ cardSubtitle }</CardSubtitle>
              <p className="muted lead">Skills Used:</p>
              <CardText>
                <ListGroup>
                  {
                    cardText.map((skill, index) => {
                    return(
                      <ListGroupItem key={index}>{skill}</ListGroupItem>
                    )
                  })
                  }
                </ListGroup>
              </CardText>
            </CardBody>
          </Card>
        </Animated>
      </div>
    )
  }
}

Project.propTypes = {
  cardImage: PropTypes.string,
  imageAlt: PropTypes.string,
  cardTitle: PropTypes.string,
  cardText: PropTypes.array,
  githubLink: PropTypes.string,
  demoLink: PropTypes.string
}

Project.defaultProps = {
  cardImage: '',
  imageAlt: '',
  cardTitle: '',
  cardText: '',
  githubLink: '',
  demoLink: ''
}

export default Project 