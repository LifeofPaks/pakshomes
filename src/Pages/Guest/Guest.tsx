import React from 'react'
import './Guest.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Dashboard from '../../Components/Dashboard/Dashboard'

const Guest = () => {
  return (
    <div className='guest'>
        <Navbar/>
        <Dashboard/>
        
    </div>
  )
}

export default Guest