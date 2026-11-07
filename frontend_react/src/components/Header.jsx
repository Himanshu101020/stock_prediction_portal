// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import Button from './Button'
import { AuthContext } from '../AuthProvider'
import { useContext } from 'react'

const Header = () => {
  const {isLoggedIn, setIsloggedIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsloggedIn(false)
    navigate('/login')
  }
  return (
    <>
      <div className="container-fluid sticky-top">
          <nav className="navbar container">
              <Link to="/" className='navbar-brand'>
                  <img src={logo} alt="Stock Prediction Portal logo" height="100" className="d-inline-block align-top"/>
              </Link>
              <div className='d-flex gap-2'>
                {isLoggedIn ? (
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                ) : (
                  <>
                  <Button text="Login" class="btn-outline-info" url="/login"/>
                  <Button text="Register" class="btn-info" url="/register"/>
                  </>
                )}
                  
              </div>
          </nav>
      </div>
    </>
  )
}

export default Header