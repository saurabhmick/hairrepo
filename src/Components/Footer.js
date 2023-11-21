import { faFacebook, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPodcast, faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <div className='contianer-fluid bottom-0  bg-dark '>
        <div className='footer-widget d-flex '>
        <div className='social-links'>
            <ul>
                <li><a><FontAwesomeIcon icon={faFacebook} color='white' className='mx-2'></FontAwesomeIcon>facebook</a></li>
                <li><a><FontAwesomeIcon icon={faYoutube} color='white' className='mx-2'></FontAwesomeIcon>Youtube</a></li>
                <li><a><FontAwesomeIcon icon={faGoogle} color='white' className='mx-2'></FontAwesomeIcon>Google</a></li>
            </ul>
        </div>
        <div className='copyright-text text-white'>
            <p>&copy; 2023-2024 All Rights are Reserved </p>
        </div>
        <div className='terms&condition'>
            <ul>
                <li><a><FontAwesomeIcon icon={faPodcast} className='mx-2'></FontAwesomeIcon> Terms& Condition </a></li>
                <li><a><FontAwesomeIcon icon={faSquarePollHorizontal} className='mx-2'></FontAwesomeIcon>Policies</a></li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default Footer