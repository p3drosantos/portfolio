import React from 'react'
import { Link } from 'react-router-dom'

import "./NavBar.css"

const NavBar = () => {
  return (
    
    <header>
        <h1 className='logo'><span>Pedro</span> Santos</h1>
        <nav className='links'>
            <ul className='nav-items'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>Sobre</Link></li>
                <li><Link to='/projects'>Projetos</Link></li>
                <li><Link to='/contact'>Contato</Link></li>
            </ul>
        </nav>
    </header>
    
  )
}

export default NavBar