import React from 'react'

export default ({ location }) => (
  <>
    {location.pathname === '/' ||
      location.pathname.split('/')[1] === 'contato' ||
      location.pathname.split('/')[1] === 'vaga'
      ?
      <img src={'/images/logo-wht-color.svg'} />
      :
      <img src={'/images/logo-black.svg'} />
    }
  </>
)
