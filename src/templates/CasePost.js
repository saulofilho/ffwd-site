import React, { Fragment } from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './CasePost.css'

export const CasePostTemplate = ({
  container = [],
  title,
  HomeDescription,
  HomeImage,
  ProjetosTitle,
  ProjetosDescription,
  ClientTitle,
  CaseTitle,
  CaseAbout,
  body,
  nextPostURL,
  prevPostURL,
}) => (
    <main className="CasePostPage">
      <article
        className="home-case"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="single-case">
          <div className="CasePost--InnerContent">
            <div className="case-hero container">
                <p className="default-text-header">{ClientTitle}</p>
                <p className="default-text-title" itemProp="title">
                  {CaseTitle}
                </p>
              <p className="default-text-sub">{CaseAbout}</p>
                <div className="anchor-down">
                  <a href="#containerOne">
                    ↓
                  </a>
                </div>
            </div>
            <div className="containerOne" id="containerOne">
              {container.map(item => (
                <>
                  <div className="case-imgs">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="case-texts container">
                    <p className="default-text-h2">{item.title}</p>
                    <Content source={item.text} />
                  </div>
                </>
              ))}
            </div>
            <div className="resultados container">
              <Content source={body} />
            </div>
          </div>
          <div className="CasePost--Pagination">
            <div className="container">
              {prevPostURL && (
                <Link
                  className="CasePost--Pagination--Link prev"
                  to={prevPostURL}
                >
                  ANTERIOR ‹
                </Link>
              )}
              {nextPostURL && (
                <>
                  <div className="next">
                    <Link
                      className="CasePost--Pagination--Link next"
                      to={nextPostURL}
                    >
                      › PRÓXIMO
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
  )

// Export Default CasePost for front-end
const CasePost = ({ data: { post, allPosts }, location }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <Layout
      location={location}
      meta={post.frontmatter.meta || false}
      title={post.frontmatter.title || false}
    >
      <CasePostTemplate
        {...post}
        {...post.frontmatter}
        body={post.html}
        nextPostURL={_get(thisEdge, 'next.fields.slug')}
        prevPostURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default CasePost

export const pageQuery = graphql`
  ## Query for CasePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query CasePost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        container {
          image
          title
          text
        }
        title
        HomeDescription
        HomeImage
        ProjetosTitle
        ProjetosDescription
        ClientTitle
        CaseTitle
        CaseAbout
        template
        date(formatString: "MMMM Do, YYYY")
      }
    }
    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "cases" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
