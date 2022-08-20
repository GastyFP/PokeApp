import React from 'react'
import spinner from '../../assets/LOADING.gif'
import './Spinner.scss'

const Spinner = () => {
  return (
    <div className='spin'>
      <div className='spinner'>
        <img src={spinner} alt="LOADING SPINNER" />
      </div>
    </div>
  )
}

export default Spinner