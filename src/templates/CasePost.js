import React, { Fragment } from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './CasePost.css'

export const CasePostTemplate = ({
  containerOne = [],
  about,
  header,
  hero,
  title,
  body,
  nextPostURL,
  prevPostURL,
  categories = []
}) => (
    <main className="CasePostPage">
      <article
        className="home-case"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="single-case">
          <Link className="CasePost--BackButton" to="/blog/">
            <ChevronLeft /> Voltar
          </Link>
          <div className="CasePost--Meta">
            {categories && (
              <Fragment>
                <span>|</span>
                {categories.map((cat, index) => (
                  <span
                    key={cat.category}
                    className="CasePost--Meta--Category"
                  >
                    {cat.category}
                    {/* Add a comma on all but last category */}
                    {index !== categories.length - 1 ? ',' : ''}
                  </span>
                ))}
              </Fragment>
            )}
          </div>
          <div className="CasePost--InnerContent">
            <div className="case-hero container">
              <p className="default-text-header">{header} header</p>
              {title && (
                <h1 className="default-text-title" itemProp="title">
                  {title}
                </h1>
              )}
              <p className="default-text-sub">{hero}</p>
              <div className="btn-scroll">
                <a href="#containerOne">
                  scroll
                  + svg
                  </a>
              </div>
            </div>
            <div className="containerOne" id="containerOne">
              {containerOne.map(item => (
                <>
                  <div className="case-imgs">
                    <img src={item.imageOne} alt="" />
                  </div>
                  <div className="case-texts container">
                    <p className="default-text-h2">{item.titleOne}</p>
                    {console.log("veremos", body)}
                    <Content source={body} />
                  </div>
                </>
              ))}
            </div>
            <div className="containerTwo" id="containerTwo">
              {containerOne.map(item => (
                <>
                  <div className="case-imgs">
                    <img src={item.imageOne} alt="" />
                  </div>
                  <p className="default-text-h2">{item.titleOne}</p>
                </>
              ))}
            </div>
          </div>
          <div className="CasePost--Pagination">
            {prevPostURL && (
              <Link
                className="CasePost--Pagination--Link prev"
                to={prevPostURL}
              >
                Previous Post
              </Link>
            )}
            {nextPostURL && (
              <Link
                className="CasePost--Pagination--Link next"
                to={nextPostURL}
              >
                Next Post
              </Link>
            )}
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
        containerOne {
          imageOne
          titleOne
        }
        template
        about
        header
        title
        hero
        date(formatString: "MMMM Do, YYYY")
        categories {
          category
        }
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
            containerOne {
              imageOne
              titleOne
            }
            template
            about
            header
            title
            hero
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
