import React, { Component } from "react"
import { Link, withPrefix } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      links: [
        {
          id: 0,
          path: "/",
          name: "Home",
        },
        {
          id: 1,
          path: "/my-work",
          name: "Projects",
        },
        {
          id: 2,
          path: "/contact",
          name: "Contact",
        },
      ],
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <Navbar className="fixed-top" expand="lg">
        <NavbarBrand href="/">
          <span className="branding">iWDevelop</span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.state.links.map(link => {
              return (
                <NavItem key={link.id}>
                  <Link
                    className="nav-link"
                    to={link.path}
                    activeClassName="active"
                  >
                    {link.name}
                  </Link>
                </NavItem>
              )
            })}
            <NavItem>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/eduardo-imery-25b9b545/"
                //{withPrefix("/Resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
