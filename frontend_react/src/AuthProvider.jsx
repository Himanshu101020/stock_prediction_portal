import {useState, createContext} from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsloggedIn] = useState(!!localStorage.getItem('accessToken'))
  const [username, setUsername] = useState(localStorage.getItem('username') || '')
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsloggedIn, username, setUsername}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider