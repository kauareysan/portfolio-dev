import React from 'react'
import "./App.css"

import { Menu } from './Components/Menu'
import { Home } from './Components/Home'
import { AboutMe } from './Components/AboutMe'
import { Projects } from './Components/Projects'
import { Contacts } from './Components/Contacts'

export const App = () => {
  return (
    <div className='app-container'>
      <div className="a-c-nav">
       <Menu/>
      </div>
      <div className="a-c-home">
      <Home/>
      </div>
      <div className="a-c-about-me">
        <AboutMe/>
      </div>
      <div className="a-c-projects">
        <Projects/>
      </div>
      <div className="a-c-contacts">
        <Contacts/>
      </div>
    </div>
  )
}
