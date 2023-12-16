import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <h1>Sasha Fellmann</h1>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Über mich</a></li>
        <li><a href="#downloads">Downloads</a></li>
        <li><a href="#wiss">Wiss</a></li>
        {/* <li><a href="#experience">Erfahrung</a></li> */}
        <li><a href="#portfoliotabs">Portfolio</a></li>
        {/* <li><a href="#testimonials">Referenzen</a></li> */}
        <li><a href="#contact">Kontakt</a></li>
      </ul>
<div>
  <p>Danke für Ihr interesse.</p>
</div>

    </footer>
  )
}

export default Footer