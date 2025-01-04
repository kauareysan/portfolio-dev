import React from 'react'
import "./Menu.css"

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Menu = () => {
  return (
    <div className="navs">
    <nav>
        <a href="#menu">Início</a>
        <a href="#about-me">Sobre Mim</a>
        <a href="#projects">Projetos</a>
        <a href="#contacts">Contato</a>
    </nav>
    <div className="icon-comp">
        <MenuIcon style={{"color": "rgba(255, 255, 255, 0.884)", "width": "30px", "height": "30px"}}/>
    </div>
    <div className="nav2">
        <CloseIcon/>
        <a href="#menu">Início</a>
        <a href="#about-me">Sobre Mim</a>
        <a href="#projects">Projetos</a>
        <a href="#contacts">Contato</a>
    </div>
    </div>
  )
}
