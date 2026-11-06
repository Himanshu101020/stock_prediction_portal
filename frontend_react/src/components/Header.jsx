// import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import Button from './Button'

const Header = () => {
  return (
    <>
      <div className="container-fluid sticky-top">
          <nav className="navbar container">
              <Link to="/" className='navbar-brand'>
                  <img src={logo} alt="Stock Prediction Portal logo" height="100" className="d-inline-block align-top"/>
              </Link>
              <div className='d-flex gap-2'>
                  <Button text="Login" class="btn-outline-info" url="/login"/>
                  <Button text="Register" class="btn-info" url="/register"/>
              </div>
          </nav>
      </div>
    </>
  )
}

export default Header