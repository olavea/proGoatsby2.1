import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allFile(limit: 100, sort: { order: ASC, fields: name }) {
      edges {
        node {
          name
        }
      }
    }
  }
`

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 0.33rem;
  border-radius: 4px;
  margin-bottom: 0.33rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #ffa500;
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allFile }) =>
      allFile.edges.map(({ node }) => (
        <Post key={node.name}>
          <Link class="read-more" to={`/${node.name}`}>
            <h2>Page {node.name}</h2>
          </Link>
        </Post>
      ))
    }
  />
)

export default Listing

// deleted line 53, 54, 55, 56 and 57 in video 15 tutScott
// <Link to={`/posts${node.frontmatter.slug}`}>
// <h2>{node.frontmatter.title}</h2>
// </Link>

//          <p>{node.frontmatter.date}</p>
// <p>{node.excerpt}</p>
