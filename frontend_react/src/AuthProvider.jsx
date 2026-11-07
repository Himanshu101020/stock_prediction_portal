import {useState, createContext} from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsloggedIn] = useState(!!localStorage.getItem('accessToken'))
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsloggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider