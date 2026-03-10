import "./About.scss";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__text">
          <h2>Sobre mim</h2>

          <p>
            Sou desenvolvedora formada em Análise e Desenvolvimento de Sistemas
            e atualmente cursando pós-graduação em Ciência de Dados e
            Inteligência Artificial. Possuo experiência em desenvolvimento
            front-end e estou ampliando minha atuação para a área de dados, com
            foco em análise de dados e no desenvolvimento de soluções
            inteligentes orientadas por dados.
          </p>
        </div>
        <div className="about__timeline">
          <div className="timeline__item">
            <span>2014</span>
            <p className="timeline__title">Primeira experiência profissional</p>
            <p className="timeline__details">
              Início da minha trajetória profissional atuando como Assistente
              Administrativa na COOPEAGRO, desenvolvendo habilidades em
              organização de processos, atendimento e gestão administrativa.
            </p>
          </div>

          <div className="timeline__item">
            <span>2015</span>
            <p className="timeline__title">
              Ingresso no programa Crediamigo (Banco do Nordeste)
            </p>
            <p className="timeline__details">
              Iniciei minha atuação no programa de microcrédito Crediamigo,
              desenvolvendo experiência com atendimento a empreendedores,
              análise de crédito e gestão de carteira de clientes.
            </p>
          </div>

          <div className="timeline__item">
            <span>2019</span>
            <p className="timeline__title">
              Início da graduação em Análise e Desenvolvimento de Sistemas
            </p>
            <p className="timeline__details">
              Comecei minha formação em tecnologia, conciliando os estudos com
              minha carreira administrativa e tendo os primeiros contatos com
              programação e desenvolvimento de software.
            </p>
          </div>

          <div className="timeline__item">
            <span>2022</span>
            <p className="timeline__title">
              Promoção a Coordenadora de Unidade e conclusão da graduação
            </p>
            <p className="timeline__details">
              Fui promovida a Coordenadora de Unidade no programa Crediamigo,
              assumindo responsabilidades de liderança e gestão de equipe. No
              mesmo período concluí minha graduação em Análise e Desenvolvimento
              de Sistemas e iniciei meus primeiros projetos práticos em
              programação.
            </p>
          </div>

          <div className="timeline__item">
            <span>2023</span>
            <p className="timeline__title">Gerente Geral da COOPEAGRO</p>
            <p className="timeline__details">
              Retornei à COOPEAGRO assumindo a posição de Gerente Geral, atuando
              na gestão administrativa da cooperativa e no acompanhamento de
              processos e equipes.
            </p>
          </div>

          <div className="timeline__item">
            <span>2025</span>
            <p className="timeline__title">
              Foco em tecnologia e atuação como bolsista no EASY
            </p>
            <p className="timeline__details">
              Passei a direcionar minha carreira para a área de tecnologia,
              ampliando meus estudos em Ciência de Dados e Inteligência
              Artificial e iniciando minha atuação como bolsista no centro de
              pesquisa EASY, contribuindo com projetos e atividades na área de
              tecnologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
