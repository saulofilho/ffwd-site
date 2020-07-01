import React from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './PessoasPageCarousel.css';
import arrowDown from '../../static/images/ico-seta-down.png'
import arrowUp from '../../static/images/arrow-up-blk.png'
import arrowUpWht from '../../static/images/arrow-up-wht.png'
import logo from '../../static/images/logo-white-vertical.png'

const scrollToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

const scrollToBottom = () => {
  document.querySelector('#').scrollIntoView({ behavior: 'smooth' });
}

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
            <div className="we-are-ffwd" data-hash="we-are-ffwd">
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
                <div className="anchor-down container display-none-mob">
              <button
                    onClick={() => {
                      scrollToBottom()
                    }}
                  >
                  <img src={arrowDown} alt="arrowDown" />
                  </button>
              </div>
            </div>
            <div className="the-people-behind" data-hash="the-people-behind">
              <div className="people-desk-wrapper">
                <div className="people-text-wrapper">
                  <p className="default-text-title container">
                    the people behind
                    <br />
                    our work.
                  </p>
                  <div className="owner-text-desk">
                    <div className="owner-texts-wrapper">
                      <h4 className="">
                      Somos nativos digitais, criativos e especialistas. 
                      <br/> 
                      Mas mais que isso, somos a mistura 
                      <br/>
                      de conhecimentos múltiplos, um time completo.
                      </h4>
                      <p className="default-text-about container">
                        Todos que entram aqui tem em comum a vontade
                        <br/> 
                        de fazer
                        diferente. Somos inquietos e nunca paramos 
                        <br/> 
                        de buscar soluções
                        para os problemas: dos nossos 
                        <br/> 
                        clientes, do dia-a-dia, da sociedade.
                        Nossa grande 
                        <br/> 
                        aspiração é mudar a relação entre marcas e pessoas,
                        <br/>
                        gerar experiências incríveis e transmitir a verdade das
                        <br/> 
                        marcas.
                        Para isso, contamos com um time completo, 
                        <br/>
                        com pessoas que
                        acreditam que a união entre 
                        <br/>
                        estratégia, comunicação,
                        tecnologia e criatividade são 
                        <br/>
                        a chave para entregar melhores
                        serviços e experiências.
                        <br />
                        <br />
                          <strong>
                            Aqui, abraçamos as suas causas e seus sonhos.
                          </strong>
                        </p>
                    </div>
                  </div>
                </div>
                <div className="owner">
                  <div className="owner-name">
                    <p>
                      fernando werner
                      <br />
                    </p>
                    <p>Owner</p>
                  </div>
                </div>
              </div>
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
            </div>
            <div className="the-team-wrapper" data-hash="the-team-wrapper">
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
              <div className="team-photo" />
            </div>
            <div className="wrapper-team-heads" data-hash="wrapper-team-heads">
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
              <div className="wrapper-photos-heads">
                <div className="couple-wrapper display-none-mob">
                  <div className="person-1">
                    <div className="person-1-photo">
                    </div>
                    <div className="person-1-text">
                      <h3 className="">
                        NOME DA PESSOA
                      </h3>
                      <p className="default-text-sub">
                        The quick brown fox jumps
                        <br/>
                        over the lazy dog
                      </p>
                    </div>
                  </div>
                  <div className="person-2">
                    <div className="person-2-text">
                      <h3 className="">
                        NOME DA PESSOA
                      </h3>
                      <p className="default-text-sub">
                        The quick brown fox jumps
                        <br/>
                        over the lazy dog
                      </p>
                    </div>
                    <div className="person-2-photo">
                    </div>
                  </div>
                </div>
                <div className="display-none-desk">
                  <div className="couple-mob">
                  </div>
                </div>
                <div className="pessoas-btn-up container">
                  <div className="btn-up display-none-mob">
                  <button
                    onClick={() => {
                      scrollToTop()
                    }}
                  >
                      <h4>
                      <img src={arrowUp} alt="arrowUp" /> subir
                      </h4>
                    </button>
                  </div>
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
              <p className="default-text-sub container display-none-desk">
                Cultura nos ajuda a atrair pessoas incríveis e motivadas,
                ela amplifica suas habilidades e os ajuda a alcançar sua
                melhor forma. Esta palavras do código de cultura não são vazias.
              </p>
              <p className="default-text-sub container display-none-mob">
                Cultura nos ajuda a atrair pessoas incríveis
                <br/> 
                e motivadas, ela amplifica suas habilidades 
                <br/>
                e os ajuda a alcançar sua melhor forma. Esta 
                <br/>
                palavras do código de cultura não são vazias.
              </p>
              <div className="anchor-down container display-none-mob">
              <button
                    onClick={() => {
                      scrollToBottom()
                    }}
                  >
                  <img src={arrowDown} alt="arrowDown" />
                  </button>
              </div>
            </div>
            <div className="wrapper-cultura-imgs cultura-img-1" data-hash="wrapper-cultura-imgs">
              <p className="default-text-header container">
                cultura
              </p>
              <div className="display-none-desk">
                <h3 className="container">
                  01/10. Amazing People
                  <br/>
                  Don't like average goals
                </h3>
                <p className="default-text-about container">
                  Oferecemos grandes desafios para grandes conquistas
                  <br/> e queremos
                  ser parceiros no crescimento de cada 
                  <br/> indivíduo, por isso aqui
                  contratamos por atitude e 
                  <br/> treinamos a técnica. Acreditamos que
                  tudo é possível 
                  <br/> quando se tem convicção, direcionamento e amor.
                  30% 
                  <br/> conhecimento 70% comportamento
                </p>
              </div>
              <div className="display-none-mob">
                <h3 className="container">
                  01/10. Amazing People
                  Don't like average goals
                </h3>
                <p className="default-text-about container">
                  Oferecemos grandes desafios para grandes conquistas e queremos
                  ser parceiros no crescimento de cada 
                  <br/>
                  indivíduo, por isso aqui
                  contratamos por atitude e treinamos a técnica. Acreditamos que
                  tudo é possível quando 
                  <br/>
                  se tem convicção, direcionamento e amor.
                  30% conhecimento 70% comportamento
                </p>
              </div>
              <div className="wrapper-img">
                <div className="img-1-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs cultura-img-2">
              <div className="display-none-desk">
                <h3 className="container">
                  02/10. Não tenha medo de
                  <br/> 
                  errar. Erre cedo. Aprenda
                  <br/> 
                  com o erro.
                </h3>
                <p className="default-text-about container">
                  Ser ousado significa ter medo, e conhecer 
                  <br/>
                  profundamente o motivo
                  desse medo, depois agir 
                  <br/>
                  enfrentando ele.
                </p>
              </div>
              <div className="display-none-mob">
                <h3 className="container">
                  02/10. Não tenha medo de errar. 
                  <br/>
                  Erre cedo. Aprenda com o erro.
                </h3>
                <p className="default-text-about container">
                  Ser ousado significa ter medo, e conhecer profundamente o motivo
                  desse medo, depois agir enfrentando ele.
                </p>
              </div>
              <div className="wrapper-img">
                <div className="img-2-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs cultura-img-3">
            <div className="display-none-desk">
              <h3 className="container">
                03/10. O sucesso é 
                <br/>
                quando o dom encontra 
                <br/>
                a paixão.
                </h3>
              <p className="default-text-about container">
                Queremos encontrar o propósito de cada indivíduo 
                <br/> 
                e conectar com a FFWD.
                Nosso sonho é que cada um seja 
                <br/>
                uma
                estrela em sua posição, por isso as pessoas devem 
                <br/>
                amar o que fazem
                de maneira sincera.
                </p>
            </div>
            <div className="display-none-mob">
              <h3 className="container">
                03/10. O sucesso é 
                quando o dom encontra 
                a paixão.
                </h3>
              <p className="default-text-about container">
                Queremos encontrar o propósito de cada indivíduo 
                e conectar com a FFWD.
                Nosso sonho é que cada um seja 
                <br/>
                uma
                estrela em sua posição, por isso as pessoas devem 
                amar o que fazem
                de maneira sincera.
                </p>
            </div>
              <div className="wrapper-img">
                <div className="img-3-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs cultura-img-4">
            <div className="display-none-desk">
              <h3 className="container">
                04/10. Áreas, times e 
                <br/>
                indivíduos são 
                <br/>
                independentes entre si.
              </h3>
              <p className="default-text-about container">
                Queremos encontrar o propósito de cada indivíduo e 
                <br/> conectar com
                a FFWD. Nosso sonho é que cada um seja 
                <br/> uma estrela em sua posição,
                por isso as pessoas devem 
                <br/>
                amar o que fazem de maneira sincera.
              </p>
              </div>
            <div className="display-none-mob">
              <h3 className="container">
                04/10. Áreas, times e 
                indivíduos 
                <br/>
                são 
                independentes entre si.
              </h3>
              <p className="default-text-about container">
                Queremos encontrar o propósito de cada indivíduo e conectar com
                a FFWD. Nosso sonho é que cada um seja 
                <br/>
                uma estrela em sua posição,
                por isso as pessoas devem 
                amar o que fazem de maneira sincera.
              </p>
              </div>
              <div className="wrapper-img">
                <div className="img-4-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs cultura-img-5">
            <div className="display-none-desk">
              <h3 className="container">
                05/10. Precisamos nos 
                <br/>
                livrar da “tirania do ou”.
              </h3>
              <p className="default-text-about container">
                Isto é, quando confrontados com duas escolhas 
                <br/>
                que parecem opostas,
                podemos sim, escolher seguir 
                <br/>
                os dois caminhos
              </p>
              </div>
            <div className="display-none-mob">
              <h3 className="container">
                05/10. Precisamos nos 
                livrar 
                <br/>
                da “tirania do ou”.
              </h3>
              <p className="default-text-about container">
                Isto é, quando confrontados com duas escolhas 
                que parecem opostas,
                podemos sim, 
                <br/>
                escolher seguir 
                os dois caminhos
              </p>
              </div>
              <div className="wrapper-img">
                <div className="img-5-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs cultura-img-6">
            <div className="display-none-desk">
              <h3 className="container">
                06/10. O conflito deve 
                <br/>
                fazer parte do nosso dia a dia
              </h3>
              <p className="default-text-about container">
                Nós confiamos em suas habilidades individuais. se 
                <br/>
                confiamos em
                você, não existe razão para microgerenciar 
                <br/>
                suas atividades. mas
                se nossos pensamentos forem 
                <br/>
                diferentes é preciso expor o racional
                de cada pessoa e 
                <br/>
                chegar a uma conclusão. Decisão tomada, caminho
                que 
                <br/>
                segue. Quando você cultiva um jardim é preciso tirar ervas
                daninhas, mas as flores morrerão se tudo que você fizer 
                for tirar
                ervas daninhas. Elas precisam de outros 
                <br/>
                cuidados.
                Não foque em coisas pequenas.
              </p>
              </div>
            <div className="display-none-mob">
              <h3 className="container">
                06/10. O conflito deve 
                fazer parte 
                <br/>
                do nosso dia a dia
              </h3>
              <p className="default-text-about container">
                Nós confiamos em suas habilidades individuais. se 
                confiamos em
                você, não existe razão para microgerenciar 
                <br/>
                suas atividades. mas
                se nossos pensamentos forem 
                diferentes é preciso expor o racional
                de cada pessoa e 
                <br/>
                chegar a uma conclusão. Decisão tomada, caminho
                que 
                segue. Quando você cultiva um jardim é preciso tirar ervas
                daninhas, mas as flores morrerão se tudo que você fizer 
                for tirar
                <br/>
                ervas daninhas. Elas precisam de outros 
                cuidados.
                Não foque em coisas pequenas.
              </p>
              </div>
              <div className="wrapper-img">
                <div className="img-6-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs cultura-img-7">
            <div className="display-none-desk">
              <h3 className="container">
                07/10. Uma verdade
                <br/>
                transformadora
              </h3>
              <p className="default-text-about container">
                Entenda que todos os problemas que te cercam são da 
                <br/>
                sua
                responsabilidades. A partir daí a solução é simples, 
                <br/>
                basta você
                encontrar um caminho. Seja o exemplo. Tenha 
                <br/>
                iniciativa.
                Caso aconteça algo a partir de uma decisão sua, 
                <br/>
                saiba que nossas
                lideranças preferem dar perdão do que 
                <br/>
                dar permissão. Nunca vamos
                mascarar resultados e 
                <br/>
                opiniões.
              </p>
              </div>
            <div className="display-none-mob">
              <h3 className="container">
                07/10. Uma verdade
                transformadora
              </h3>
              <p className="default-text-about container">
                Entenda que todos os problemas que te cercam são da 
                <br/>
                sua
                responsabilidades. A partir daí a solução é simples, 
                <br/>
                basta você
                encontrar um caminho. Seja o exemplo. Tenha 
                <br/>
                iniciativa.
                Caso aconteça algo a partir de uma decisão sua, 
                <br/>
                saiba que nossas
                lideranças preferem dar perdão do que 
                <br/>
                dar permissão. Nunca vamos
                mascarar resultados e 
                <br/>
                opiniões.
              </p>
              </div>
              <div className="wrapper-img">
                <div className="img-7-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs cultura-img-8">
            <div className="display-none-desk">
              <h3 className="container">
                08/10. Divida seus 
                <br/>
                sonhos com pessoas 
                <br/>
                melhores que você
              </h3>
              <p className="default-text-about container">
                Seja direto e claro quanto as regras e objetivos.
                <br/>
                Pense positivamente e passe isso para os outros.
              </p>
              </div>
            <div className="display-none-mob">
              <h3 className="container">
                08/10. Divida seus 
                sonhos 
                <br/>
                com pessoas 
                melhores que você
              </h3>
              <p className="default-text-about container">
                Seja direto e claro quanto as regras e objetivos.
                Pense positivamente e passe isso para os outros.
              </p>
              </div>
              <div className="wrapper-img">
                <div className="img-8-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs cultura-img-9">
            <div className="display-none-desk">
              <h3 className="container">
                09/10. Criatividade é a 
                arte de conectar ideias.
              </h3>
              <p className="default-text-about container">
                Somos tão criativos que quando não temos 
                problemas nós os criamos.
                E acreditamos que para 
                ter criatividade 
                <br/>
                não se deve ter medo de
                fracassar. 
                Você não pode esgotar a sua criatividade.
                Quanto 
                você mais usa, mais você 
                <br/>
                tem. Nosso trabalho não 
                pode
                ser industrial. Cada cliente é único, e assim 
                deve ser o
                trabalho que entregamos.
              </p>
              </div>
            <div className="display-none-mob">
              <h3 className="container">
                09/10. Criatividade é a 
                <br/>
                arte de conectar ideias.
              </h3>
              <p className="default-text-about container">
                Somos tão criativos que quando não temos 
                <br/>
                problemas nós os criamos.
                E acreditamos que para 
                <br/>
                ter criatividade não se deve ter medo de
                fracassar. 
                <br/>
                Você não pode esgotar a sua criatividade.
                Quanto 
                <br/>
                você mais usa, mais você tem. Nosso trabalho não 
                <br/>
                pode
                ser industrial. Cada cliente é único, e assim 
                <br/>
                deve ser o
                trabalho que entregamos.
              </p>
              </div>
              <div className="wrapper-img">
                <div className="img-9-10 container"></div>
              </div>
            </div>
            <div className="wrapper-cultura-imgs cultura-img-10">
            <div className="display-none-desk">
              <h3 className="container">
                10/10. Opte pelo simples 
                <br/>
                e faça bem feito.
              </h3>
              <p className="default-text-about container">
                Essa é coisa mais importante que eu deveria fazer 
                <br/>
                com meu tempo
                e meus recursos no momento? Se 
                <br/>
                não responder SIM categoricamente,
                não execute a 
                <br/>
                tarefa. Se não estabelecermos prioridades alguém
                <br/>
                fará isso por nós. Escolha onde aplicar sua energia. 
                <br/>
                Quase tudo
                é ruído e poucas coisas tem valor 
                <br/>
                excepcional.
                Explore {'>'} Elimine {'>'} Execute
              </p>
              </div>
            <div className="display-none-mob">
              <h3 className="container">
                10/10. Opte pelo simples 
                e faça bem feito.
              </h3>
              <p className="default-text-about container">
                Essa é coisa mais importante que eu deveria fazer 
                com meu tempo
                e meus recursos no momento? Se 
                não responder 
                <br/>
                SIM categoricamente,
                não execute a 
                tarefa. Se não estabelecermos prioridades alguém
                fará isso por nós. Escolha onde 
                <br/>
                aplicar sua energia. 
                Quase tudo
                é ruído e poucas coisas tem valor 
                excepcional.
                Explore {'>'} Elimine {'>'} Execute
              </p>
              </div>
              <div className="wrapper-img">
                <div className="img-10-10 container"></div>
              </div>
            </div>
            <div className="btn-up-cultura">
              <div className="btn-up display-none-mob container">
                <button
                  onClick={() => {
                    scrollToTop()
                  }}
                >
                  <h4>
                    <img src={arrowUpWht} alt="arrowUpWht" /> topo
                      </h4>
                </button>
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
            <div className="nossas-vagas" id="nossas-vagas"  data-hash="nossas-vagas">
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
            <div className="vagas-index" id="vagas-index" data-hash="vagas-index">
              {posts.map((post, index) => (
                <div className="vagas-item" key={post.title + index}>
                  <div className="default-text-header container">
                    {post.header}
                  </div>
                  <div className="default-text-title container">
                    {post.title}
                  </div>
                  <div className="default-text-about container">
                    {post.about}
                  </div>
                  <div className="apply container">
                    <button>
                      <a href={post.slug} key={post.featuredImage}>
                      APPLY
                      </a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-up-cultura">
              <div className="btn-up display-none-mob container">
                <button
                  onClick={() => {
                    scrollToTop()
                  }}
                >
                  <h4>
                    <img src={arrowUpWht} alt="arrowUpWht" /> topo
                      </h4>
                </button>
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
      </Swiper>
    </>
  );
};

export default PessoasPageCarousel;