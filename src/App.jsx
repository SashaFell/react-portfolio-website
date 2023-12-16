import React from 'react'
import Header from './components/header/Header'
import Navbar1 from './components/navbar1/Navbar1'
import Navbar from './components/navbar/Navbar'
import Nav from './components/nav/Nav'
import Nav1 from './components/nav1/Nav1'
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
      <Nav1/>
      <Header />
      <About />
      <Downloads />
      <Wiss />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App