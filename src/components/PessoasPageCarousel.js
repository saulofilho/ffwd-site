import React from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './PessoasPageCarousel.css';
import arrowDown from '../../static/images/ico-seta-down.png'
import logo from '../../static/images/logo-white-vertical.png'

// const scrollToTop = () => {
//   window.scroll({ top: 0, left: 0, behavior: 'smooth' });
// }

// const scrollToBottom = () => {
//   document.querySelector('#').scrollIntoView({ behavior: 'smooth' });
// }

const PessoasPageCarousel = ({
  posts,
}) => {
  const HorizontalSwiperParams = {
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.swiper-pagination.swiper-pagination-pessoas',
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
    }
  };

  return (
    <>
      <Swiper {...HorizontalSwiperParams}>
        <div data-hash="pessoas">
          <Swiper {...VerticalSwiperParams}>
            <div className="we-are-ffwd" data-hash="teste">
              <p className="default-text-header container">
                as pessoas
                </p>
              <p className="default-text-title container">
                we are
                  <br />
                  ffwd
                </p>
              <p className="default-text-sub container">
                Somos nativos digitais, criativos
                  <br />
                  e especialistas.
                  Mas mais que isso,
                  <br />
                  somos a mistura de conhecimentos
                  <br />
                  múltiplos, um time completo.
                </p>
            </div>
            <div className="the-people-behind" data-hash="teste2">
              <p className="default-text-title container">
                the people behind
                <br />
                our work.
              </p>
              <div className="owner-text-desk">
                <p className="default-text-about container">
                  Todos que entram aqui tem em comum a vontade de fazer
                  diferente. Somos inquietos e nunca paramos de buscar soluções
                  para os problemas: dos nossos clientes, do dia-a-dia, da sociedade.
                  Nossa grande aspiração é mudar a relação entre marcas e pessoas,
                  gerar experiências incríveis e transmitir a verdade das marcas.
                  Para isso, contamos com um time completo, com pessoas que
                  acreditam que a união entre estratégia, comunicação,
                  tecnologia e criatividade são a chave para entregar melhores
                  serviços e experiências.
                    <br />
                  <br />
                    Aqui, abraçamos as suas causas e seus sonhos.
                  </p>
              </div>
              <div className="owner">
                <div className="owner-name">
                  <p>
                    fernando werner
                    <br />
                    <p>Owner</p>
                  </p>
                </div>
              </div>
            </div>
            <div className="todos-que-entram" data-hash="teste3">
              <div className="owner-text">
                <p className="default-text-about container">
                  Todos que entram aqui tem em comum a vontade de fazer
                  diferente. Somos inquietos e nunca paramos de buscar soluções
                  para os problemas: dos nossos clientes, do dia-a-dia, da sociedade.
                  Nossa grande aspiração é mudar a relação entre marcas e pessoas,
                  gerar experiências incríveis e transmitir a verdade das marcas.
                  Para isso, contamos com um time completo, com pessoas que
                  acreditam que a união entre estratégia, comunicação,
                  tecnologia e criatividade são a chave para entregar melhores
                  serviços e experiências.
                    <br />
                  <br />
                    Aqui, abraçamos as suas causas e seus sonhos.
                  </p>
              </div>
              <div className="the-team">
                <p className="default-text-title container">
                  the
                  <br />
                  team
                </p>
                <p className="default-text-about container">
                  E que time! Nossos atendimentos, social
                  <br /> medias, designers,
                  desenvolvedores e recursos
                  <br />
                  humanos. Nossos FFrs.
                </p>
              </div>
            </div>
            <div className="wrapper-team-heads" data-hash="test4">
              <div className="team-photo">
              </div>
              <div className="the-heads">
                <p className="default-text-title container">
                  the heads
                </p>
                <p className="default-text-about container">
                  Nossas lideranças, os representantes
                  <br />
                  dos valores da FFWD.
                </p>
              </div>
            </div>
            <div className="wrapper-photos-heads" data-hash="teste5">
              <div className="man">
              </div>
              <div className="woman">
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
              </div>
            </footer>
          </Swiper>
        </div>
        <div data-hash="cultura">
          <Swiper {...VerticalSwiperParams}>
            <div className="our-culture" data-hash="cultura">
              <p className="default-text-header container">
                cultura
                </p>
              <p className="default-text-title container">
                our culture
                </p>
              <p className="default-text-sub container">
                Cultura nos ajuda a atrair pessoas incríveis e motivadas,
                ela amplifica suas habilidades e os ajuda a alcançar sua
                melhor forma. Esta palavras do código de cultura não são vazias.
                </p>
            </div>
            <div className="wrapper-cultura-imgs" data-hash="cultura2">
              <p className="default-text-header container">
                cultura
              </p>
              <h3 className="container">
                01/10. Amazing People
                Don't like average goals
                </h3>
              <p className="default-text-about container">
                Oferecemos grandes desafios para grandes conquistas e queremos
                ser parceiros no crescimento de cada indivíduo, por isso aqui
                contratamos por atitude e treinamos a técnica. Acreditamos que
                tudo é possível quando se tem convicção, direcionamento e amor.
                30% conhecimento 70% comportamento
                </p>
              <div className="wrapper-img">
                <div className="img-1-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs">
              <p className="default-text-header container">
                cultura
              </p>
              <h3 className="container">
                02/10. Não tenha medo de errar. Erre cedo. Aprenda com o erro.
                </h3>
              <p className="default-text-about container">
                Ser ousado significa ter medo, e conhecer profundamente o motivo
                desse medo, depois agir enfrentando ele.
                </p>
              <div className="wrapper-img">
                <div className="img-2-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs">
              <p className="default-text-header container">
                cultura
              </p>
              <h3 className="container">
                03/10. O sucesso é quando o dom encontra a paixão.
                </h3>
              <p className="default-text-about container">
                Queremos encontrar o propósito de cada indivíduo e conectar com a FFWD.
                Nosso sonho é que cada um seja uma
                estrela em sua posição, por isso as pessoas devem amar o que fazem
                de maneira sincera.
                </p>
              <div className="wrapper-img">
                <div className="img-3-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs">
              <p className="default-text-header container">
                cultura
              </p>
              <h3 className="container">
                04/10. Áreas, times e indivíduos são independentes entre si.
              </h3>
              <p className="default-text-about container">
                Queremos encontrar o propósito de cada indivíduo e conectar com
                a FFWD. Nosso sonho é que cada um seja uma estrela em sua posição,
                por isso as pessoas devem amar o que fazem de maneira sincera.
              </p>
              <div className="wrapper-img">
                <div className="img-4-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs">
              <p className="default-text-header container">
                cultura
              </p>
              <h3 className="container">
                05/10. Precisamos nos livrar da “tirania do ou”.
              </h3>
              <p className="default-text-about container">
                Isto é, quando confrontados com duas escolhas que parecem opostas,
                podemos sim, escolher seguir os dois caminhos
              </p>
              <div className="wrapper-img">
                <div className="img-5-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs">
              <p className="default-text-header container">
                cultura
              </p>
              <h3 className="container">
                06/10. O conflito deve fazer parte do nosso dia a dia
              </h3>
              <p className="default-text-about container">
                Nós confiamos em suas habilidades individuais. se confiamos em
                você, não existe razão para microgerenciar suas atividades. mas
                se nossos pensamentos forem diferentes é preciso expor o racional
                de cada pessoa e chegar a uma conclusão. Decisão tomada, caminho
                que segue. Quando você cultiva um jardim é preciso tirar ervas
                daninhas, mas as flores morrerão se tudo que você fizer for tirar
                ervas daninhas. Elas precisam de outros cuidados.
                Não foque em coisas pequenas.
              </p>
              <div className="wrapper-img">
                <div className="img-6-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs">
              <p className="default-text-header container">
                cultura
              </p>
              <h3 className="container">
                07/10. Uma verdade transformadora
              </h3>
              <p className="default-text-about container">
                Entenda que todos os problemas que te cercam são da sua
                responsabilidades. A partir daí a solução é simples, basta você
                encontrar um caminho. Seja o exemplo. Tenha iniciativa.
                Caso aconteça algo a partir de uma decisão sua, saiba que nossas
                lideranças preferem dar perdão do que dar permissão. Nunca vamos
                mascarar resultados e opiniões.
              </p>
              <div className="wrapper-img">
                <div className="img-7-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs">
              <p className="default-text-header container">
                cultura
              </p>
              <h3 className="container">
                08/10. Divida seus sonhos com pessoas melhores que você
              </h3>
              <p className="default-text-about container">
                Seja direto e claro quanto as regras e objetivos.
                Pense positivamente e passe isso para os outros.
              </p>
              <div className="wrapper-img">
                <div className="img-8-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs">
              <p className="default-text-header container">
                cultura
              </p>
              <h3 className="container">
                09/10. Criatividade é a arte de conectar ideias.
              </h3>
              <p className="default-text-about container">
                Somos tão criativos que quando não temos problemas nós os criamos.
                E acreditamos que para ter criatividade não se deve ter medo de
                fracassar. Você não pode esgotar a sua criatividade.
                Quanto você mais usa, mais você tem. Nosso trabalho não pode
                ser industrial. Cada cliente é único, e assim deve ser o
                trabalho que entregamos.
              </p>
              <div className="wrapper-img">
                <div className="img-9-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs">
              <p className="default-text-header container">
                cultura
              </p>
              <h3 className="container">
                10/10. Opte pelo simples e faça bem feito.
              </h3>
              <p className="default-text-about container">
                Essa é coisa mais importante que eu deveria fazer com meu tempo
                e meus recursos no momento? Se não responder SIM categoricamente,
                não execute a tarefa. Se não estabelecermos prioridades alguém
                fará isso por nós. Escolha onde aplicar sua energia. Quase tudo
                é ruído e poucas coisas tem valor excepcional.
                Explore {'>'} Elimine {'>'} Execute
              </p>
              <div className="wrapper-img">
                <div className="img-10-10 container"></div>
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
              </div>
            </footer>
          </Swiper>
        </div>
        <div data-hash="vagas">
          <Swiper {...VerticalSwiperParams}>
            <div className="nossas-vagas" data-hash="nossas-vagas">
              <p className="default-text-header container">
                vagas
              </p>
              <h1 className="container">
                nossas
                <br/> 
                vagas
              </h1>
              <p className="default-text-sub container">
                Se você gosta de aprender, trocar
                <br /> experiências e criar coisas
                F*DAS,
                <br /> esse é o seu lugar.
              </p>
              <div className="anchor-down container ">
                <a href="#vagas-index">
                  <img src={arrowDown} alt="arrowDown" />
                </a>
              </div>
            </div>
            {posts.map(img => (
              <div className="vagas-index" id="vagas-index" data-hash="vagas-index">
                <div className="default-text-header container">
                  {img.header}
                </div>
                <div className="default-text-title container">
                  {img.title}
                </div>
                <div className="default-text-about container">
                  {img.about}
                </div>
                <div className="apply container">
                  <a href={img.slug} key={img.featuredImage}>
                    <p className="container">
                      APPLY
                    </p>
                  </a>
                </div>
              </div>
            ))}
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
              </div>
            </footer>
          </Swiper>
        </div>
      </Swiper>
    </>
  );
};

export default PessoasPageCarousel;