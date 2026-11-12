// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import Button from './Button'
import { AuthContext } from '../AuthProvider'
import { useContext } from 'react'

const Header = () => {
  const {isLoggedIn, setIsloggedIn, username, setUsername} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username')
    setIsloggedIn(false)
    setUsername('')
    navigate('/login')
  }
  return (
    <>
      <div className="container-fluid sticky-top">
          <nav className="navbar container">
              <Link to="/" className='navbar-brand'>
                  <img src={logo} alt="Stock Prediction Portal logo" height="100" className="d-inline-block align-top"/>
              </Link>
              <div className='d-flex align-items-center gap-3'>
                {isLoggedIn ? (
                  <>
                  <div className='text-info' style={{fontSize:'18px'}}>Welcome <small className='text-light fw-bold text-capitalize'>{username}</small></div>
                  <Button text='Dashboard' class='btn-info' url='/dashboard'/>
                  <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                  </>
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