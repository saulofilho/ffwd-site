import React, { useState, useEffect } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { X } from 'react-feather'
import Logo from './Logo'
import Headroom from 'react-headroom'
import './Nav.css'

export const Navigation = (props) => {
  const [active, setActive] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState(false);
  const [activeSubNavPessoas, setActiveSubNavPessoas] = useState(false);
  const [currentPath, setCurrentPath] = useState(false);

  useEffect(() => {
    setCurrentPath(props.location.pathname);
  }, [])

  const handleMenuToggle = () => setActive(!active)

  const handleLinkClick = () => setActive(active) && handleMenuToggle()

  const toggleSubNavSobre = () =>
    setActiveSubNav(!activeSubNav)

  const toggleSubNavPessoas = () =>
    setActiveSubNavPessoas(!activeSubNavPessoas)

  const { subNav } = props,
    NavLink = ({ to, className, children, ...props }) => (
      <Link
        to={to}
        className={`NavLink ${
          to === currentPath ? 'active' : ''
          } ${className}`}
        onClick={() => handleLinkClick()}
        {...props}
      >
        {children}
      </Link>
    )

  return (
    <nav className={`${active ? 'nav-active' : ''}`}>
      <Headroom
      parent={() => document }
      style={{
        position: "fixed",
        background: "transparent",
        zIndex: 9
      }} 
      >
      <div className="navbar">
        <div className="nav-wrapper container">
          <Link to="/" onClick={() => handleLinkClick()}>
            <Logo {...props} />
          </Link>
          {
            props.location.pathname === '/' ||
              props.location.pathname.split('/')[1] === 'contato' ||
              props.location.pathname.split('/')[1] === 'vaga'
              ?
              <button
                className="Button-blank nav-btn"
                onClick={() => handleMenuToggle()}
              >
                {active ?
                  <X color='#000' />
                  :
                  <img src={`/images/menu-ham-white.png`} alt="logo-black" />}
              </button>
              :
              <button
                className="Button-blank nav-btn"
                onClick={() => handleMenuToggle()}
              >
                {active ?
                  <X color='#000' />
                  :
                  <img src={`/images/menu-ham-black.png`} alt="logo-black" />}
              </button>
          }
        </div>
      </div>
      </Headroom>
      <div className="nav-links">
        <div className="nav-links-nav">
          <Link to="/" onClick={() => handleMenuToggle()}>
            <img src={'/images/logo-black.png'} alt="logo da ffwd" />
          </Link>
          <button
            className="Button-blank nav-btn"
            onClick={() => handleMenuToggle()}
          >
            <X color='#000' />
          </button>
        </div>
        <div className="nav-links-menu-hamburger">
          <div
            className={`nav-group ${
              activeSubNav === true ? 'active' : ''
              }`}
          >
            <button
              className={`NavLink active`}
              onClick={() => toggleSubNavSobre()}
            >
              <p>
                sobre
              </p>
              <div className="nav-group-links">
                <NavLink 
                  to="/sobre/#mais-que-digital" 
                  className="great-launches-font"
                  onClick={() => handleMenuToggle()}
                >
                  quem somos
                </NavLink>
                <NavLink 
                  to="/sobre/#mais-que-digital" 
                  onClick={() => handleMenuToggle()}
                >
                  serviços
                </NavLink>
                <a 
                  href="https://greatlaunches.ffwd.rocks" 
                  className="NavLink great-launches-font"
                  onClick={() => handleMenuToggle()}
                >
                  great launches
                </a>
              </div>
            </button>
          </div>
          <NavLink to="/projetos/" onClick={() => handleMenuToggle()}>projetos</NavLink>
          <div
            className={`nav-group ${
              activeSubNavPessoas === true ? 'active' : ''
              }`}
          >
            <button
              className={`NavLink active`}
              onClick={() => toggleSubNavPessoas()}
            >
              <p>
                pessoas
              </p>
              <div className="nav-group-links">
                <NavLink to="/pessoas/#pessoas" onClick={() => handleMenuToggle()}>
                  pessoas
                </NavLink>
                <NavLink to="/pessoas/#cultura" onClick={() => handleMenuToggle()}>
                  cultura
                </NavLink>
                <NavLink to="/pessoas/#vagas" onClick={() => handleMenuToggle()}>
                  vagas
                </NavLink>
              </div>
            </button>
          </div>
          <NavLink to="/blog/" onClick={() => handleMenuToggle()}>blog</NavLink>
          <NavLink to="/contato/" onClick={() => handleMenuToggle()}>contato</NavLink>
          <div className="contact-menu-hamburger display-none-desk">
            <div className="contato-address-container">
              <div className="call-us">
                <p className="default-text-about">
                  <strong>Call us on</strong>
                </p>
                <p className="default-text-about">
                  <br />
              +55 48 3364 5570
              <br />
              go@ffwd.com.br
            </p>
              </div>
              <div className="address">
                <p className="default-text-about">
                  <strong>Address</strong>
                </p>
                <p className="default-text-about">
                  <br />
              Rua Niberto Haase, 100 - Sala 301
              <br />
              Santa Mônica, Florianópolis, SC
              <br />
              88035-215
            </p>
              </div>
            </div>
          </div>
          <button
            className="Button-blank nav-btn"
            onClick={() => handleMenuToggle()}
          >
          </button>
        </div>
      </div>
    </nav>
  )
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
