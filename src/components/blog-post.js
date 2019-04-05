import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby'
import PrevNext from '../components/prevnext';

function BlogPost(props) {

    const { title, image } = props.data.markdownRemark.frontmatter;
    const { prev, next } = props.pageContext;

    return (
    <Layout>
        <div className="container" id="blogContainer">
            <h1 className="mb-5">{title}</h1>
            {image && <Img fluid={image.childImageSharp.fluid} />}

            <div className="mb-5" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />

            <PrevNext prev={prev && prev.node} next={next && next.node} />
        </div>
    </Layout>
    )
}


export default BlogPost

export const query = graphql`

 query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       excerpt
       frontmatter {
        title
       }
   }
}
`