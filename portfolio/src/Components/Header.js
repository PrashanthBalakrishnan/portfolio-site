import React from 'react'

export default function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <h3>Dev Prashanth</h3>
        </div>
        <button className='nav-toggle' aria-label='toggle navigation'>
            <span className='hamburger'></span>
        </button>
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'><a href='#home' className='nav__link'>Home</a></li>
                <li className='nav__item'><a href='#services' className='nav__link'>My Services</a></li>
                <li className='nav__item'><a href='home' className='nav__link'>About Me</a></li>
                <li className='nav__item'><a href='home' className='nav__link'>My Work</a></li>
            </ul>
        </nav>
    </div>
  )
}
