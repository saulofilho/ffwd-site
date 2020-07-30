import React, { useState, useEffect, useRef } from 'react'; 
import 'swiper/css/swiper.css';
import 'react-modal-video/scss/modal-video.scss';
import Swiper from 'react-id-swiper';
import './SobrePageCarousel.css';
import arrowDown from '../../static/images/ico-seta-down.png'
import arrowUp from '../../static/images/arrow-up-blk.png'
import logo from '../../static/images/logo-mais-que-digital.svg'
import ModalVideo from 'react-modal-video'
import NavCarousel from './NavCarousel'

const SobrePageCarousel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal  = () => setIsOpen(true);

  const HorizontalSwiperParams = {
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.swiper-pagination.swiper-pagination-sobre',
      clickable: true
    }
  };
  const VerticalSwiperParams = {
    autoHeight: true,
    direction: 'vertical',
    mousewheel: true,
    freeMode: true,
    slidesPerView: 'auto',
    hashNavigation: {
      watchState: true,
    },
    on: {
      setTranslate: 
      function (e) {
        if (window.pageYOffset <= e) {
          document.querySelector(".navbar-car").style.top = "0";
        } else { 
          document.querySelector(".navbar-car").style.top = "-600px";
        }
        window.pageYOffset = e;
      },
    }
  }
  
  const scrollToBottomMais = () => {
    document.querySelector('#experiencias').scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToBottomServicos = () => {
    document.querySelector('#escala').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <ModalVideo channel='youtube' isOpen={isOpen} videoId='Q-If3ld6x-I' onClose={() => setIsOpen(false)} />
      <NavCarousel></NavCarousel>
      <Swiper {...HorizontalSwiperParams}>
        <div data-hash="mais-que-digital" className="teste">
          <Swiper {...VerticalSwiperParams} >
            <div className="mais-que-digital" data-hash="mais-que-digital-top">
              <p className="default-text-header container">
                nós somos
              </p>
              <h1 className="container">
                mais que
                <br/> 
                digital
              </h1>
              <p className="default-text-sub-sobre container">
                Você pode pensar que somos uma agência de marketing digital.
                Mas nós somos mais do que isso.
              </p>
              {/* <div className="default-btn container">
                <button>
                  <a href="#make-great">
                    we make great launches
                  </a>
                </button>
              </div> */}
              <div className="anchor-down container display-none-mob">
              <button
                    onClick={() => {
                      scrollToBottomMais()
                    }}
                  >
                  <img src={arrowDown} alt="arrowDown" />
                  </button>
              </div>
            </div>
            <div className="experiencias" id="experiencias">
                <p className="default-text-header-sobre container">
                  nós somos
                </p>
                <p className="default-text-title-sobre container">
                  mais que comunicação. experiências.
                </p>
                <p className="default-text-about-sobre container">
                  Nascemos digital e evoluímos. Combinamos estratégia,
                  criatividade e inovação para criar experiências completas em
                  todos os pontos de contato das marcas com seus consumidores.
                </p>
                <div className="default-btn container">
                  <button>
                    <a href="/projetos/">
                     Conheça nossos cases
                    </a>
                  </button>
                </div>
            </div>
            <div className="quem-somos-wrapper">
              <div className="container quem-somos">
                <div className="quem-somos-texts">
                  <p className="default-text-header-sobre container">
                    quem somos
                  </p>
                  <p className="default-text-title-sobre container display-none-desk">
                    assista ao nosso manifesto.
                  </p>
                  <p className="default-text-title-sobre container display-none-mob">
                    FFWD É  MAIS QUE DIGITAL
                  </p>
                </div>
                <div className="img-manifesto">
                  <button onClick={() => openModal()}></button>
                </div>
              </div>
            </div>
            <div className="nossa-abordagem">
                <p className="default-text-header-sobre container">
                  nossa abordagem
                </p>
                <p className="default-text-title-sobre container">
                  digital 
                  <br/>
                  first
                </p>
                <p className="default-text-about-sobre container display-none-desk">
                  <strong>
                    O Digital First provoca a deixar de lado
                    <br/> 
                    o favoritismo pelo que é tradicional.
                  </strong>
                  <br />
                  <br />
                    É estar conectado com o mundo, com as mudanças.
                    <br/> 
                    É colocar os consumidores no centro das decisões.
                    <br/> 
                    Propomos um novo pensamento, uma nova forma 
                    <br/> 
                    de enxergar oportunidades, de solucionar 
                    <br/> 
                    problemas, de conquistar o mundo.
                </p>
                <p className="default-text-about-sobre container display-none-mob">
                  <strong>
                    O Digital First provoca a deixar de lado
                    o favoritismo
                    <br/> 
                    pelo que é tradicional.
                  </strong>
                  <br />
                  <br />
                    É estar conectado com o mundo, com as mudanças.
                    É colocar 
                    <br/> 
                    os consumidores no centro das decisões.
                    Propomos um novo 
                    <br/> 
                    pensamento, uma nova forma de enxergar
                    oportunidades, 
                    <br/> 
                    de solucionar problemas, de conquistar o mundo.
                </p>
                <div className="default-btn container display-none-desk">
                  <button>
                    <a href="/sobre/#servicos">
                      Nossos serviços
                    </a>
                  </button>
                </div>
            </div>
            <div className="make-great-launches" data-hash="make-great">
              <div className="make-great-launches-bg">
              </div>
                <p className="default-text-title-sobre container">
                  we make
                  <br/> 
                  great launches
                </p>
                <p className="default-text-about-sobre container display-none-desk">
                  Nossa capacidade interdisciplinar 
                  <br/>
                  e abordagem digital first
                  garantem 
                  <br/>
                  a criação de
                  experiências que abrangem 
                  <br/>
                  todos os pontos de contato digitais
                  e 
                  <br/>
                  físicos das marcas,
                  gerando muito mais 
                  <br/>
                  impacto e valor para os consumidores.
                </p>
                <p className="default-text-about-sobre container display-none-mob">
                  <strong>
                    O Digital First provoca a deixar de lado o favoritismo 
                    <br/>
                    pelo que é tradicional. 
                  </strong>
                  <br/>
                  <br/>
                  É estar conectado com o mundo, com as mudanças. É colocar 
                  <br/>
                  os consumidores no centro das decisões. Propomos um novo 
                  <br/>
                  pensamento, uma nova forma de enxergar oportunidades, 
                  <br/>
                  de solucionar problemas, de conquistar o mundo.
                </p>
                <p className="nave-text-upper container">
                  Nós
                  <br/>
                  fazemos 
                  <br/>
                  grandes 
                  <br/>
                  lançamentos
                </p>
                <div className="default-btn container">
                  <button>
                    <a href="https://greatlaunches.ffwd.rocks">
                      Great Launches
                    </a>
                  </button>
                </div>
                <div className="container">
                  <div className="btn-up display-none-mob">
                    <a href="#mais-que-digital-top">
                      <h4>
                        <img src={arrowUp} alt="arrowUp" /> subir
                      </h4>
                    </a>
                  </div>
                </div>
            </div>
            <footer>
              <div className="footer-custom container">
                <div className="logo-footer">
                  <img src={logo} alt="logo-white-vertical" />
                </div>
                <div className="endereco-desk">
                  <div className="phone">
                    <p>
                      <strong>+55 48 3364 5570</strong>
                    </p>
                    <p>go@ffwd.com.br</p>
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
              </div>
            </footer>
          </Swiper>
        </div>
        <div data-hash="servicos">
          <Swiper {...VerticalSwiperParams}>
            <div className="servicos" data-hash="servicos-top">
                <p className="default-text-header container">
                  serviços
                </p>
                <p className="default-text-sub-sobre container">
                  Criamos experiências autênticas 
                  <br/>
                  e apaixonantes para conectar
                  marcas e pessoas.
                </p>
                <p className="default-text-about container">
                  Unindo diferentes competências a abordagem 
                  <br/>
                  digital first,
                  estamos aqui para fazer grandes 
                  <br/>
                  lançamentos para o mercado.
                  Como? 
                  <br/>
                  <br/>
                  A partir dos pilares:
                </p>
                <div className="servicos-texts container">
                  <p>
                    ESTRATÉGIA
                  </p>
                  <p>
                    MARKETING
                  </p>
                  <p>
                    EXPERIÊNCIA
                  </p>
                </div>
                <div className="anchor-down container display-none-mob">
              <button
                    onClick={() => {
                      scrollToBottomServicos()
                    }}
                  >
                  <img src={arrowDown} alt="arrowDown" />
                  </button>
              </div>
            </div>
            {/* <div className="escala" id="escala"></div> */}
            <div className="we-make-great container" id="escala">
                <p className="default-text-title-sobre container">
                  we make 
                  <br/>
                  great launches
                </p>
                <p className="default-text-about-sobre container display-none-desk">
                  Nossa capacidade interdisciplinar 
                  <br/>
                  e abordagem digital first
                  garantem 
                  <br/>
                  a criação de
                  experiências que abrangem 
                  <br/>
                  todos os pontos de contato digitais
                  e 
                  <br/>
                  físicos das marcas,
                  gerando muito mais 
                  <br/>
                  impacto e valor para os consumidores.
                </p>
                <p className="default-text-about-sobre container display-none-mob">
                  <strong>
                    O Digital First provoca a deixar de lado o favoritismo 
                    <br/>
                    pelo que é tradicional. 
                  </strong>
                  <br/>
                  <br/>
                  É estar conectado com o mundo, com as mudanças. É colocar 
                  <br/>
                  os consumidores no centro das decisões. Propomos um novo 
                  <br/>
                  pensamento, uma nova forma de enxergar oportunidades, 
                  <br/>
                  de solucionar problemas, de conquistar o mundo.
                </p>
            </div>
            <div className="pilares-wrapper">
              <div className="pilares container">
                  <div className="pilares-div">
                    <h2>
                      pilares
                    </h2>
                  </div>
                  <div className="pilares-row container">
                    <p className="pilares-title">
                      Estratégia
                    </p>
                    <p className="pilares-text">
                      Campanhas/Launches
                      <br />
                      Consultoria de Presença Digital
                      <br />
                      Branding
                      <br />
                      Inovação Aberta
                      <br />
                      Planejamento Estratégico
                    </p>
                  </div>
                  <div className="pilares-row container">
                    <p className="pilares-title">
                      Marketing 
                    </p>
                    <p className="pilares-text">
                    Produção Multimidia
                      <br />
                      Conteúdo
                      <br />
                      Design
                      <br />
                      Performance
                    </p>
                  </div>
                  <div className="pilares-row container">
                    <p className="pilares-title">
                      Experiência
                    </p>
                    <p className="pilares-text pilar-third">
                    Ações integradas
                      <br />
                      Consultoria de Presença Digital
                      <br />
                      UX/UI
                      <br />
                      Desenvolvimento
                      <br />
                      Apps/Webapps
                    </p>
                  </div>
              </div>
            </div>
            <div className="we-make-great container">
                <p className="default-text-title-sobre container">
                  we make 
                  <br/>
                  great launches
                </p>
                <p className="default-text-about-sobre container display-none-desk">
                  Nossa capacidade interdisciplinar 
                  <br/>
                  e abordagem digital first
                  garantem 
                  <br/>
                  a criação de
                  experiências que abrangem 
                  <br/>
                  todos os pontos de contato digitais
                  e 
                  <br/>
                  físicos das marcas,
                  gerando muito mais 
                  <br/>
                  impacto e valor para os consumidores.
                </p>
                <p className="default-text-about-sobre container display-none-mob">
                  <strong>
                    O Digital First provoca a deixar de lado o favoritismo 
                    <br/>
                    pelo que é tradicional. 
                  </strong>
                  <br/>
                  <br/>
                  É estar conectado com o mundo, com as mudanças. É colocar 
                  <br/>
                  os consumidores no centro das decisões. Propomos um novo 
                  <br/>
                  pensamento, uma nova forma de enxergar oportunidades, 
                  <br/>
                  de solucionar problemas, de conquistar o mundo.
                </p>
                <p className="nave-text-upper container">
                  Nós
                  <br/>
                  fazemos 
                  <br/>
                  grandes 
                  <br/>
                  lançamentos
                </p>
                <div className="default-btn container">
                  <button>
                    <a href="https://greatlaunches.ffwd.rocks">
                      Great Launches
                    </a>
                  </button>
                </div>
                <div className="container">
                  <div className="btn-up display-none-mob">
                  <a href="#servicos-top">
                      <h4>
                        <img src={arrowUp} alt="arrowUp" /> subir
                      </h4>
                    </a>
                  </div>
                </div>
            </div>
            <footer>
              <div className="footer-custom container">
                <div className="logo-footer">
                  <img src={logo} alt="logo-white-vertical" />
                </div>
                <div className="endereco-desk">
                  <div className="phone">
                    <p>
                      <strong>+55 48 3364 5570</strong>
                    </p>
                    <p>go@ffwd.com.br</p>
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
              </div>
            </footer>
          </Swiper>
        </div>
      </Swiper>
    </>
  );
};

export default SobrePageCarousel;