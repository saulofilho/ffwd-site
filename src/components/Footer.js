import React from 'react'
import './Footer.css'
import logo from '../../static/images/logo-white-vertical.png'

export default () => (
    <footer>
      <div className="footer-custom container">
        <div className="logo-footer">
          <img src={logo} alt="logo-white-vertical" />
        </div>
        <div className="phone">
          <p>
            <strong>+55 48 3364 5570</strong>
          </p>
          <p>go@ffwd.rocks</p>
        </div>
        <div className="endereco">
          <div className="escritorio">
            <p>
              <strong>Escritório</strong>
            </p>
            <p>
              <br />
              Rua Niberto Haase, 100 - Sala 301
              <br />
              Santa Mônica, Florianópolis, SC
              <br />
              88035-215
          </p>
          </div>
          <div className="social">
            <p>
              <strong>Social</strong>
            </p>
            <p>
              <br />
              <a href="facebook">Facebook</a>
            </p>
            <p><a href="insta">Instagramk</a></p>
            <p><a href="linkedin">LinkedIn</a></p>
          </div>
        </div>
        <div className="all-right">
          <p>
            <strong>
              ©{new Date().getFullYear()}FFWD INC.
            </strong>
          </p>
          <p>All right reserve</p>
        </div>
      </div>
    </footer>
)
