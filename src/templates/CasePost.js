import React from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './CasePost.css'
import arrowDown from '../../static/images/ico-seta-down.png'
import arrowLeft from '../../static/images/arrow-left-wht.png'
import arrowRight from '../../static/images/arrow-right-wht.png'

const scrollToBottom = () => {
  document.querySelector('#containerCasePost').scrollIntoView({ behavior: 'smooth' });
}

export const CasePostTemplate = ({
  container = [],
  resultadoscontainer = [],
  ClientTitle,
  CaseTitle,
  CaseAbout,
  nextPostURL,
  prevPostURL,
}) => {

  const newArrOfObjects = container
    .map(
        obj => 
        Object.keys(obj).filter(e => obj[e] !== null)
        .reduce((o, e) => {o[e]  = obj[e]; return o;}, {})
    )

    // console.log('FILTRADO', newArrOfObjects)

  return(
    <main>
      <article
        className="home-case"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="single-case">
          <div className="CasePost--InnerContent">
            <div className="case-hero container">
              <p className="default-text-header">
                {ClientTitle}
              </p>
              <h1>
                {CaseTitle}
              </h1>
              <div className="default-text-about">
                <Content
                  source={CaseAbout}
                />
              </div>
              <div className="anchor-down btn-down-case container">
                <button
                  onClick={() => {
                    scrollToBottom()
                  }}
                >
                  <img src={arrowDown} alt="arrowDown" />
                </button>
              </div>
            </div>
            <div className="containerCasePost" id="containerCasePost">
              {newArrOfObjects.map((item, index) => (
                <div
                  key={item + index}
                >
                  {/* {console.log('MAP', newArrOfObjects)} */}
                  <div className="case-imgs display-none-desk">
                    {item.imagemob === null ? <></> : <img src={item.imagemob} alt={item.alt} />}
                  </div>
                  <div className="case-imgs display-none-mob">
                    {item.image === null ? <></> : <img src={item.image} alt={item.alt} />}
                  </div>
                  <div className="case-content">
                    <div className="case-title container">
                      {item.title === null ? 'x' : <Content className="case-title" source={item.title} />}
                    </div>
                    <div className="case-texts container">
                      {item.text === null ? 'xx' : <Content className="case-text" source={item.text} />}
                    </div>
                  </div>
                  <div className="yt-wrapper">
                    <div className="case-yt display-none-mob">
                      {item.youtube === null ? <></> : <Content className="case-yt" source={item.youtube} />}
                    </div>
                    <div className="case-yt display-none-desk">
                      {item.youtube === null ? <></> : <Content className="case-yt" source={item.youtube} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="resultados container">
              {resultadoscontainer.map((item, index) => (
                <div
                  key={item.title + index}
                >
                  <Content
                    className="case-content-title"
                    source={item.title}
                  />
                  <Content
                    className="case-content-resultados"
                    source={item.resultado}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="case-post-wrapper">
            <div className="case-post container">
              {prevPostURL && (
              <div className="prev">
                <img src={arrowLeft} alt="arrowLeft" />
                <Link
                  className="case-post-link"
                  to={prevPostURL}
                >
                  ANTERIOR
                </Link>
              </div>
              )}
              {nextPostURL && (
                <div className="next">
                  <Link
                    className="case-post-link"
                    to={nextPostURL}
                  >
                    PRÓXIMO
                  </Link>
                  <img src={arrowRight} alt="arrowRight" />
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

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
          title
          text
          image
          imagemob
          alt
          youtube
        }
        resultadoscontainer {
          title
          resultado
        }
        title
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
