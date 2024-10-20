import React from 'react'
import "./AboutMe.css"

export const AboutMe = () => {

  const SkillsData = [
    {
      name: 'JavaScript',
      image: "/jsicon.png",
      text: 'JavaScript é uma linguagem de programação utilizada principalmente para desenvolvimento web, tanto no lado do cliente (front-end) quanto no lado do servidor (back-end). Ele permite a criação de interfaces interativas, a manipulação de elementos em páginas da web e o desenvolvimento de aplicações dinâmicas. No back-end, frameworks como Node.js permitem o uso do JavaScript para construir servidores e APIs escaláveis.'
    },
    {
      name: 'HTML',
      image: "/htmlicon.png",
      text: 'HTML (HyperText Markup Language) é a linguagem base para a criação de páginas da web. Ele estrutura o conteúdo de um site, definindo elementos como textos, imagens, links, tabelas e formulários. Junto com CSS e JavaScript, o HTML é fundamental para o desenvolvimento de interfaces visuais, servindo como a "coluna vertebral" que organiza e exibe as informações em navegadores.'
    },
    {
      name: 'CSS',
      image: "/cssicon.png",
      text: 'CSS (Cascading Style Sheets) é uma linguagem usada para estilizar e formatar a aparência de páginas da web. Ele define como os elementos HTML serão exibidos, permitindo ajustar cores, fontes, espaçamentos, layouts e responsividade para diferentes dispositivos. Com o CSS, é possível transformar uma estrutura básica de HTML em uma interface visualmente atraente e personalizada.'
    },
    {
      name: 'React Js',
      image: "reacticon.jpeg",
      text: 'React é uma biblioteca JavaScript utilizada para criar interfaces de usuário (UI) interativas e eficientes, especialmente em aplicações web de página única (SPAs). Desenvolvido pelo Facebook, ele permite a criação de componentes reutilizáveis, facilitando a construção de interfaces dinâmicas que atualizam rapidamente sem recarregar a página. React é amplamente usado por sua flexibilidade, desempenho e capacidade de gerenciar estados de forma eficiente.'
    },
    {
      name: 'Node Js',
      image: "/nodejsicon.png",
      text: 'Node.js é uma plataforma construída sobre o motor JavaScript do Chrome (V8) que permite a execução de código JavaScript no lado do servidor. Com ele, desenvolvedores podem criar aplicações web escaláveis, rápidas e eficientes, utilizando JavaScript tanto no front-end quanto no back-end. Node.js é conhecido por sua arquitetura orientada a eventos e seu uso em tempo real, ideal para aplicações como chats, APIs e serviços de streaming.'
    }
    
  ]

  return (
    <div className='about-me-container'>
      <div className="a-m-c-first">
        <div className="a-m-image-container">
              <img src="/imagedev2.png" alt="" />
          </div>
          <div className="a-m-texto-container">
              <h1>Sobre mim</h1>
              <h2>Um desenvolvedor à procura de projetos</h2>
              <p>Olá, meu nome é Kauã e sou Desenvolvedor Fullstack. Desde criança, sempre fui apaixonado por criar coisas como vídeos, textos, músicas, mas não sabia nada sobre esse mundo da programação. Porém, no final de 2021 descobri esse universo. Comecei a pesquisar sobre e fui estudando o frontend desde a base até o framework, venho me empenhando bastante na área principalmente com o framework React, venho focando no desenvolvimento de projetos frontend para poder ter um foco maior em uma stack, tenho 2 anos de experiência na área de desenvolvimento web e nesse tempo venho me empenhando bastante para poder cumprir com as exigências do mercado.

              Sou apaixonado por T.I e muito voltado para programação web, amo bastante a música e sou multi-instrumentista. Tenho uma paixão também por audiovisual e nos tempos vagos, crio projetos e estudo para evoluir na área. Sou uma pessoa bastante observadora e acabo tendo ideias de projetos até com coisas do dia a dia.
              </p>
          </div>
      </div>
        <div className="a-m-skills-container">
          <h3>Skills e Tecnologias</h3>
          <div className="a-m-s-c-image-container">
            {
              SkillsData.map((item) => (
                <div className="skill-section">
                  <img src={item.image} alt="" />
                  <div className="s-c-text-section">
                  <p>{item.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}
