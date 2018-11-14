import React from 'react'

import PostListing from '../components/Posts/PostListing';

import Layout from '../components/layout'

import Linkify from 'react-linkify';






const IndexPage = ({data}) => (
  
  
  <Layout>
   
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
      
    ))}
    >> <Linkify>
  <a href='https://www.krisbach.com'>
    Return to krisbach.com
  </a>.
</Linkify>
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
