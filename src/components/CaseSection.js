import React from 'react'
import CaseCard from './CaseCard'
import './CaseSection.css'

const CaseSection = ({
  posts = []
}) => {

  return (
    <>
      {!!posts.length && (
        <div className="cases-wrapper">
          {posts.map((post, index) => (
            <CaseCard key={post.title + index} {...post} />
          ))}
        </div>
      )}
    </>
  )
}

export default CaseSection
