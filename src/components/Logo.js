import React from 'react'
import './Logo.css'

export default ({ location }) => (
  <>
    {location.pathname === '/' ||
      location.pathname.split('/')[1] === 'contato' ||
      location.pathname.split('/')[1] === 'vaga'
      ?
      <img src={'/images/logo-white.png'} />
      :
      <img src={'/images/logo-black.png'} />
    }
  </>
)
