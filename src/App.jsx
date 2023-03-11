import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
// import Layout from './layout/Layaut'


function App() {
    const [count, setCount] = useState(0)

    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    )
  }

export default App
