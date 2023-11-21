import { faGoogle, faTypo3 } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLock, faSign, faSignIn, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Signup() {

const UpdateChange=()=>{

}

  return (
    <div className='container-fluid p-1 my-4'>
        <div className='card col-sm-5 m-auto'>
            <div className='card-header text-white bg-primary text-center'>
                Signup
            </div>
            <div className='card-body'>
                <form className='form-control'>
                    <label>Enter Name</label>
                    <FontAwesomeIcon icon={faUser} className='mx-2'></FontAwesomeIcon>
                    <input type='text'
                     name='name'
                     onChange={UpdateChange}
                     className='form-control my-2'
                     placeholder='Enter Full Name ...'
                     />
                    <label>Enter email</label>
                     <FontAwesomeIcon icon={faEnvelope} className='mx-2'></FontAwesomeIcon>
                    <input type='email' className='form-control my-2'
                    onChange={UpdateChange}
                    placeholder='Enter Email ...'
                    />
                    <label>Enter Password</label>
                    <FontAwesomeIcon icon={faLock} className='mx-2'></FontAwesomeIcon>
                    <input type='password' name='password'
                     onChange={UpdateChange}
                     className='form-control my-2'
                     placeholder='Enter  Password ...'
                     />
                      <label>Enter Password</label>
                    <FontAwesomeIcon icon={faLock} className='mx-2'></FontAwesomeIcon>
                    <input type='password' name='cpassword'
                     onChange={UpdateChange}
                     className='form-control my-2'
                     placeholder='Enter Confirm Password ...'
                     />
                     <div className='d-flex justify-content-space-between'>
                    <label className='w-50 my-1'>Choose Account Type</label>
                    
                    <select className='form-control w-50' onChange={(e)=>{

                    }}>
                        <option>Choose Type </option>
                        <option value='business'>For Business</option>
                        <option value='personal'>For Personal </option>
                    </select>
                    </div>
                    <div className='d-flex my-3'>
                    <button className='btn btn-dark d-block  w-50 mx-2 text-white'>
                       <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon> Signup
                    </button>
                    <button className='btn btn-dark border d-block  w-50  text-light'>
                       <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Signup with Google
                    </button>  
                    </div>
                    
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Signup