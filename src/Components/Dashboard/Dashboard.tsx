import React from 'react'
import './Dashboard.scss'
import ProflieImage from '../ProflieImage/ProflieImage'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <img src='https://images.unsplash.com/photo-1622560939525-2eb4358d3eba?auto=format&fit=crop&q=80&w=3028&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="d-img" className='d-img' />
      <ProflieImage/>
    </div>
  )
}

export default Dashboard