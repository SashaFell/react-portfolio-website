import React from 'react'
import Header from './components/header/Header'
import Navbar1 from './components/navbar1/Navbar1'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Downloads from './components/downloads/Downloads'
import Wiss from './components/wiss/Wiss'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Navbar1/>
      <Header />
      <About />
      <Downloads />
      <Wiss />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App