import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            Gallery
          </Link>
          <ul className="header__nav">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header