import React from 'react'

import PostListing from '../components/Posts/PostListing';

import Layout from '../components/layout'






const IndexPage = ({data}) => (
  
  <Layout>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
      
    ))}
  </Layout>
);

export default IndexPage

export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      title
      desc
    }
  }
  background: imageSharp(id: { regex: "/bg.jpg/" }) {
    sizes(maxWidth: 1240) {
      ...GatsbyImageSharpSizes
    }
  }

  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM YYYY")
        }
        html
        excerpt(pruneLength: 999999999)
      }
    }
  }
}
`;
