import React from 'react'

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import Logo from '../img/logo.jpg'

import { TypeAnimation } from 'react-type-animation'

import "./Home.css"

const Home = () => {
  return (
    <main>
      <div className='content'>
        <h2>Olá, eu sou o Pedro</h2>
        <TypeAnimation className='typing'
          sequence={[
            'Desenvolvedor Front End',
            2500,
            'Desenvolvedor  Front End',
            2500,
          ]}
          speed={20}
          style={{ fontSize: '29px' }}
          repeat={Infinity}
        />  
        <p>Bem-vindo ao meu portifólio</p>
        <button>Sobre mim</button>
      </div>
      <div className='logo-links'>
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className='links-container'>
          <ul className='social-links'>
            <li>
              <a href="https://www.linkedin.com/in/pedro-santos-43166622b/" target='_blank' rel="noopener noreferrer"> <FaLinkedin className='FaLinkedin'/> </a>
            </li>
            <li>
              <a href="https://github.com/p3drosantos" target='_blank' rel="noopener noreferrer"> <FaGithub className='FaGithub'/> </a>
            </li>
            <li>
              <a href="https://instagram.com/pedro.santosc?igshid=MzRlODBiNWFlZA==" target='_blank' rel="noopener noreferrer"> <FaInstagram className='FaInstagram'/> </a>
            </li>
          </ul>
      </div>
      </div>
    </main>
  )
}

export default Home