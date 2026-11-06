import { useState } from "react"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const Register = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleRegistration = async (e) => {
        e.preventDefault()
        
        if (!username || !email || !password){
            alert('Please fill in all fields!');
            return;
        }
        
        setLoading(true)
        
        const userData = {
            username:username,
            email:email,
            password:password
        }

        try{
          const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
          // console.log('respnose.data==>', response.data)
          console.log('Registration Successful')
          setErrors({})
          setSuccess(true)
          setUserName('')
          setEmail('')
          setPassword('')
          setTimeout(()=>{
            setSuccess(false)
          }, 5000)
        }catch(error){
          console.error("Registration error:", error.response.data)
          setErrors(error.response.data)
        }finally{
          setLoading(false)
        }
    }
  return (
    <>
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            
            <h3 className="text-light text-center mb-4">
              Create an account
            </h3>
            
            <form onSubmit={handleRegistration}>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter username" 
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                {errors && (
                  <div className="text-danger mt-1"><small>{errors.username}</small></div>
                )}
              </div>
              
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors && (
                  <div className="text-danger mt-1"><small>{errors.email}</small></div>
                )}
              </div>
              
              <div className="mb-3">
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Set password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors && (
                <div className="text-danger mt-1"><small>{errors.password}</small></div>
                )}
              </div>
              {success && (
                <div className="alert alert-success">Registration Successful!</div>
              )}
              
              {loading ? (
                <button type="submit" className="btn btn-info d-block mx-auto" disabled><FontAwesomeIcon icon={faSpinner} spin />Please Wait...</button>
              ) : (
                <button type="submit" className="btn btn-info d-block mx-auto">Register</button>
              )}
              
            </form>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default Register