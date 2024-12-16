import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar/>
    <div className="container mt-4">

    <Home/>
    </div>
    <Footer/>
   </div>
  )
}

export default App
