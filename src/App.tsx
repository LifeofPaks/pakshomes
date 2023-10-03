import { Route, Routes } from 'react-router-dom'
import './index.scss'
import Layout from './Components/Layout/Layout'
import SIgnup from './CTA/SIgnup'
import Login from './CTA/Login'
import { useState } from 'react'
import { AppContext } from './hooks/ContextApi'


function App() {

  const [asGuest, setAsGuest] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      <AppContext.Provider value={{asGuest, setAsGuest, loggedIn, setLoggedIn}}>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/signup' element={<SIgnup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </AppContext.Provider>
     
    </div>
  )
}

export default App
