import React from 'react'
/*import { Link } from 'gatsby'*/
import styled from 'styled-components';
import PostListing from '../components/Posts/PostListing';

import Layout from '../components/layout'
/* import Image from '../components/image'*/

const LayoutWrapper = styled.div`
  background: #000000;
  margin-bottom: 1.45rem;
  text-align: center;
  h1 {
    img {
      height:200px;
    }
  }
`;

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
`
