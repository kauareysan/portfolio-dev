import React from 'react'
import "./Contacts.css"

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Contacts = () => {
  return (
    <div className='contacts-container' id='contacts'>
        <p id='uptext'>Contato</p>
        <h1>Tem interesse? Entre em contato comigo</h1>
        <p>Estou sempre disposto a conversar, entre em contato comigo<br/>pelo meu email <span>kauareysan@gmail.com</span> ou pelas redes sociais:</p>
        <div className="c-c-icons">
            <div className="c-c-icon">
                <a href="#">
                    <InstagramIcon style={{color: "white"}}/>
                </a>
            </div>

            <div className="c-c-icon">
                <a href="#">
                    <WhatsAppIcon style={{color: "white"}}/>
                </a>
            </div>
        </div>
    </div>
  )
}
