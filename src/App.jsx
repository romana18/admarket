import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import Foot from './components/footer/Foot'
import { Outlet } from 'react-router-dom'
import AdmcontextProvider from './context/AdmcontextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AdmcontextProvider>
    <div >
    <Nav/>
    <Outlet/>
    <Foot/>
    </div>
    </AdmcontextProvider>
  )
}

export default App
