import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faLock, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Login() {
   const Updatelogin=()=>{

   }
  return (
    <div className='container col-sm-5 my-5 py-2'>
      <div className='card my-5'>
        <div className='card-header '>
          Login 
        </div>
        <div className='card-body'>
          <form>
            <label className='mx-2'>Enter Username or Email</label>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <input type='email'
            onChange={Updatelogin}
            className='form-control my-2'
            name='name'
            ></input>
            <label className='mx-2'>Enter Password</label>
            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
            <input type='password' 
            onChange={Updatelogin}
            className='form-control my-2'
            name='password'
            />
            <div className='d-flex justify-content-space-between my-5'>
            <button className='btn btn-dark text-white d-block  mx-2 w-50'>
            <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>  Login
            </button>
            <button className='btn btn-dark text-white d-block w-50'>
              <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>Login with Google
            </button>
            </div>
            
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Login