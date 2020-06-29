import React from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './SobrePageCarousel.css';
import arrowDown from '../../static/images/ico-seta-down.png'
import arrowUp from '../../static/images/arrow-up-blk.png'

const SobrePageCarousel = () => {
  const HorizontalSwiperParams = {
    loop: true,
    grabCursor: false,
    effect: 'fade',
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
    grabCursor: false,
    freeMode: false,
    hashNavigation: {
      watchState: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
      clickable: true
    },
    mousewheel: true,
    freeMode: true,
  }
  return (
    <>
      <Swiper {...HorizontalSwiperParams}>
        <div>
          <Swiper {...VerticalSwiperParams}>
            <div className="mais-que-digital">
              <p className="default-text-header container">
                nós somos
              </p>
              <p className="default-text-title container">
                mais que digital
              </p>
              <p className="default-text-sub-sobre container">
                Você pode pensar que somos uma agência de marketing digital.
                Mas nós somos mais do que isso.
              </p>
              <div className="default-btn container">
                <button>
                  we make great launches
                </button>
              </div>
              <div className="anchor-down container display-none-mob">
                <a href="#experiencias">
                  <img src={arrowDown} alt="arrowDown" />
                </a>
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
                    Conheça nossos cases
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
                    MAIS QUE COMUNICAÇÃO. EXPERIÊNCIAS.
                  </p>
                </div>
                <div className="img-manifesto">
                  <button></button>
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
                <p className="default-text-about-sobre container">
                  <strong>
                    O Digital First provoca a deixar de lado
                    o favoritismo pelo que é tradicional.
                  </strong>
                  <br />
                  <br />
                    É estar conectado com o mundo, com as mudanças.
                    É colocar os consumidores no centro das decisões.
                    Propomos um novo pensamento, uma nova forma de enxergar
                    oportunidades, de solucionar problemas, de conquistar o mundo.
                </p>
                <div className="default-btn container display-none-desk">
                  <button>
                    Nossos Servicos
                  </button>
                </div>
            </div>
            <div className="make-great-launches">
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
                <div className="default-btn container">
                  <button>
                    Great Launches
                  </button>
                </div>
                <div className="container">
                  <div className="btn-up display-none-mob">
                    <a href="#mais-que-digital">
                      <h4>
                      <img src={arrowUp} alt="arrowUp" /> subir
                      </h4>
                    </a>
                  </div>
                </div>
            </div>
          </Swiper>
        </div>
        <div>
          <Swiper {...VerticalSwiperParams}>
            <div className="servicos">
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
                <a href="#escala">
                  <img src={arrowDown} alt="arrowDown" />
                </a>
              </div>
            </div>
            <div className="escala" id="escala"></div>
            <div className="pilares-wrapper">
              <div className="pilares container">
                  <div className="pilares-div container">
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
                    <p className="pilares-text">
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
            <div className="we-make-great">
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
                    Great Launches
                  </button>
                </div>
                <div className="container">
                  <div className="btn-up display-none-mob">
                    <a href="#mais-que-digital">
                      <h4>
                      <img src={arrowUp} alt="arrowUp" /> subir
                      </h4>
                    </a>
                  </div>
                </div>
            </div>
          </Swiper>
        </div>
      </Swiper>
    </>
  );
};

export default SobrePageCarousel;