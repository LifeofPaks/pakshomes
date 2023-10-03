import { Route, Routes } from 'react-router-dom'
import './index.scss'
import Layout from './Components/Layout/Layout'
import SIgnup from './CTA/SIgnup'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/signup' element={<SIgnup/>}/>
      </Routes>
    </div>
  )
}

export default App
