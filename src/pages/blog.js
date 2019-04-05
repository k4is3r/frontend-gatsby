import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from "../components/Header"

const Blog = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
    <div className="container">
      <Header headingTitle="Blog" />
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} key={i} className="link" >
          <div className="postList">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
    </Layout>
  )
}

export default Blog;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`