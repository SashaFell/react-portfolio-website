import React from 'react'
import './about.css'
import ME from '../../assets/IMG_E1720.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about'>
      <h5>Mehr Infos</h5>
      <h2>Über mich</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Erfahrung</h5>
              <small>~2 Jahre Schule</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Fächer</h5>
              <small>30+ Module besucht</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projekte</h5>
              <small>5+ Fertige Projekte</small>
            </article>
          </div>

            <p>
            Ich heisse Sasha, bin 22 Jahre alt und besuche das zweite Schuljahr an der WISS in Altstetten.
            Bevor ich mich für den Beruf Applikationsentwickler entschied, habe ich einige verschiedene Berufswege getestet. Nach der Sekundarschule ging ich für zwei Jahre an die Atelierschule Zürich (Rudolf Steiner Schule), machte einen Sprachaufenthalt in London, wo ich mein Cambridge Certificate in Advanced English abschloss und begann eine Lehre als Landschaftsgärtner. Wie sie wahrscheinlich sehen, war weder der Schulweg, noch die Gärtnerlehre das richtige für mich. Nach einer Pause um herauszufinden welchen Berufsweg ich einschlagen möchte, entschied ich mich schlussendlich für den Applikationsentwickler. In der meiner Zeit an der WISS habe ich alle notwendigen Fähigkeiten erlernt, um eine gute Ergänzung für Ihr Team zu sein. Ich habe unter anderem verschiedene Programmiersprachen, Datenbanken und Projektmanagementstile kennengelernt. 
            In meiner Freizeit geniesse ich kreatives wie Zeichnen und Musik zu machen. Ausserdem treibe ich gerne Sport und gehe Skateboarden.
            </p>
            <p>
            Falls Sie Fragen oder Rückmeldungen haben, stehe ich Ihnen gerne zur verfügung. Ich freue mich darauf von Ihnen zu hören.
            </p>
           
          <div className="about-cta">
            <a href='#downloads' className='btn'>Zu den Downloads</a>
            <a href='#contact' className='btn btn-primary'>Kontakt</a>
          </div>
        </div>
      </div>
    </section>
  )
}


export default about