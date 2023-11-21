import { faStop, faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Error() {
  return (
    <div className='contianer mt-5 py-5  '>
        <div className='error border w-50 m-auto'>
            <div className='error-text my-5'>
              
                <h3 className='text-danger text-center py-3'>
                <FontAwesomeIcon icon={faWarning} className='mx-2'></FontAwesomeIcon>404 Page not Found!</h3>
                <p className='text-dark text-center  my-5'>This page does not exist it has shifted on other url</p>
            </div>
        </div>

    </div>
  )
}

export default Error