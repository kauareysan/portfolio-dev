import React from 'react'
import "./Home.css"

export const Home = () => {
  return (
    <div className='home-container' id='home'>
        <div className="h-c-text">
            <h1>Olá, sou <br/>Kauã Reis</h1>
        <p>Com 2 anos de experiência em Desenvolvimento web.<br/> Sou especialista em desenvolvimento de websites responsivos com React e Node.</p>
        </div>
        <div className="h-c-image">
            <img src="/imagedev.png" alt="" />
        </div>
    </div>
  )
}
