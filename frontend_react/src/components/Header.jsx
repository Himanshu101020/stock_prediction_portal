// import React from 'react'
import logo from '../assets/images/logo.png'
import Button from './Button'

const Header = () => {
  return (
    <>
      <div className="container-fluid">
          <nav className="navbar container">
              <a href="" className='navbar-brand'>
                  <img src={logo} alt="Stock Prediction Portal logo" height="100" className="d-inline-block align-top"/>
              </a>
              <div className='d-flex gap-2'>
                  <Button text="Login" class="btn btn-outline-info"/>
                  <Button text="Register" class="btn btn-info"/>
              </div>
          </nav>
      </div>
    </>
  )
}

export default Header