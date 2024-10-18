import React from 'react'
import "./AboutMe.css"

export const AboutMe = () => {
  return (
    <div className='about-me-container'>
        <div className="a-m-image-container">
            <img src="/imagedev2.png" alt="" />
        </div>
        <div className="a-m-texto-container">
            <h1>Sobre mim</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ullam. Delectus omnis porro, distinctio quia voluptate atque voluptas at nemo enim alias eveniet iure nostrum unde ut molestiae consequuntur hic.</p>
        </div>
    </div>
  )
}
