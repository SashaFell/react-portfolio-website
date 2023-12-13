import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/IMG_E1713.JPG'

const Header = () => {
  return (
      <div className="container header__container">
        <h3>Hallo ich bin</h3>
        <h1>Sasha Fellmann</h1>
        <h3 className="text-light">Fullstack Developer</h3>
        <CTA />
        <h5 className="text-light t2">Diese Webseite wird kontinuierlich aktualisiert.<br></br>
        Falls sie Feedback haben, können sie mir gerne eine Nachricht schreiben.</h5>
            <div className="me">
              <img src={ME} alt="me" />
            </div>
          </div>
  )
}

export default Header