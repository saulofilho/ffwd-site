import React, { useState, useEffect } from 'react'
import classnames from "classnames";
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './Nav.css'

export const Navigation = (props) => {
  const [active, setActive] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState(false);
  const [currentPath, setCurrentPath] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setCurrentPath({ currentPath: props.location.pathname })
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    setPrevScrollpos({
      prevScrollpos: currentScrollPos,
      visible
    })
  };

  const handleMenuToggle = () => setActive({ active: !active })

  // Only close nav if it is open
  const handleLinkClick = () => setActive(active) && handleMenuToggle()

  const toggleSubNav = subNav =>
    setActiveSubNav({
      activeSubNav: activeSubNav === subNav ? false : subNav
    })

  const { subNav } = props,
    NavLink = ({ to, className, children, ...props }) => (
      <Link
        to={to}
        className={`NavLink ${
          to === currentPath ? 'active' : ''
          } ${className}`}
        onClick={handleLinkClick}
        {...props}
      >
        {children}
      </Link>
    )

  return (
    <nav
      className={
        classnames
          ("navbar",
            {
              "navbar--hidden": !visible
            },
            `Nav ${active ? 'Nav-active' : ''}`
          )
      }
    >
      <div className="Nav--Container">
        <Link to="/" onClick={handleLinkClick}>
          <Logo />
        </Link>
        <div className="Nav--Links">
          <NavLink to="/sobre/">sobre</NavLink>
          <NavLink to="/projetos/">projetos</NavLink>
          <NavLink to="/pessoas/">pessoas</NavLink>
          <NavLink to="/blog/">blog</NavLink>
          {/* <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'posts' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('posts') ||
                  this.props.location.pathname.includes('blog') ||
                  this.props.location.pathname.includes('post-categories')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('posts')}
              >
                Blog
                <div className="Nav--GroupLinks">
                  <NavLink to="/blog/" className="Nav--GroupLink">
                    All Posts
                  </NavLink>
                  {subNav.posts.map((link, index) => (
                    <NavLink
                      to={link.slug}
                      key={'posts-subnav-link-' + index}
                      className="Nav--GroupLink"
                    >
                      {link.title}
                    </NavLink>
                  ))}
                </div>
              </span>
            </div> */}
          <NavLink to="/contato/">contato</NavLink>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={handleMenuToggle}
          >
            X
          </button>
        </div>
        {
          props.location.pathname === '/' || 
          props.location.pathname.split('/')[1] === 'contato' || 
          props.location.pathname.split('/')[1] === 'vaga'
            ?
            <button
              className="Button-blank Nav--MenuButton"
              onClick={handleMenuToggle}
            >
              {active ? <X color='#000' /> : <img src={`/images/menu-ham-white.png`} alt="logo-black" />}
            </button>
            :
            <button
              className="Button-blank Nav--MenuButton"
              onClick={handleMenuToggle}
            >
              {active ? <X color='#000' /> : <img src={`/images/menu-ham-black.png`} alt="logo-black" />}
            </button>
        }
      </div>
    </nav>
  )
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
