import React from 'react'
import "./AboutMe.css"

export const AboutMe = () => {

  return (
    <div className='about-me-container'>
        <div className="a-m-image-container">
        <img src="/imagedev2.png" alt="" id='image-dev'/>
          </div>
          <div className="a-m-texto-container">
              <h1>Sobre mim</h1>
              <h2>Um desenvolvedor à procura de projetos</h2>
              <p>Olá, meu nome é Kauã e sou Desenvolvedor Fullstack. Desde criança, sempre fui apaixonado por criar coisas como vídeos, textos, músicas, mas não sabia nada sobre esse mundo da programação. Porém, no final de 2021 descobri esse universo. Comecei a pesquisar sobre e fui estudando o frontend desde a base até o framework, venho me empenhando bastante na área principalmente com o framework React, venho focando no desenvolvimento de projetos frontend para poder ter um foco maior em uma stack, tenho 2 anos de experiência na área de desenvolvimento web e nesse tempo venho me empenhando bastante para poder cumprir com as exigências do mercado.

              Sou apaixonado por T.I e muito voltado para programação web, amo bastante a música e sou multi-instrumentista. Tenho uma paixão também por audiovisual e nos tempos vagos, crio projetos e estudo para evoluir na área. Sou uma pessoa bastante observadora e acabo tendo ideias de projetos até com coisas do dia a dia.
              </p>
              <div className="skills-container">
                <img src="/jsicon.png" alt="" />
                <img src="/htmlicon.png" alt="" />
                <img src="/cssicon.png" alt="" />
                <img src="/nodejsicon.png" alt="" />
                <img src="/reacticon.jpeg" alt="" />
              </div>
          </div>
    </div>
  )
}
