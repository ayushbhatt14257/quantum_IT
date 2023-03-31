import React from 'react'
import Header from './components/navbar/Header'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Body from './components/body/Body'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Body />
      <Services/>
      <Footer/>
    </>
  )
}

export default App