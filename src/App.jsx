import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import About from './pages/About';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={ <Home />}/>
          <Route path='/product' element={ <Product />}/>
          <Route path='/contact-us' element={ <Contact />}/>
          <Route path='/about-us' element={ <About />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
