import { faArrowLeft, faFaceFrown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Error.css'
import { Link, useNavigate } from 'react-router-dom'

const Error = () => {

  const navigate= useNavigate()

  const handleBackPage=()=>{
    navigate(-1)
  }

  return (
    <div className='errorpage'>
      <h1 className='sad_icon'><FontAwesomeIcon icon={faFaceFrown} data-testid='sad'/></h1>
      <h1 className='error_code'>404</h1>
      <h1 className='error_h1'>Page Not Found</h1>
      <p>The resource requested could not be found on this server</p>
      <button onClick={handleBackPage}><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
    </div>
  )
}

export default Error
