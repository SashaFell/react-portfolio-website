import React from 'react'
import './about.css'
import ME from '../../assets/IMG_E1720.JPG'
import CV from '../../assets/CV_Sasha_Fellmann.pdf'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

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
              <h5>Experience</h5>
              <small>~2 Years School</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Subjects</h5>
              <small>30+ Courses absolved</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>

            <p>
            My name is Sasha, I am 22 years old and currently completing my second schoolyear at WISS Altstetten. 
            Before settling on developer, I tried out a couple of different career paths. I went to Atelierschule Zürich (Rudolf Steiner Schule) for two years, got my advanced Diploma (Cambridge Certificate in Advanced English) during a language stay in London and I started an Apprenticeship as a Landscaping Gardener. As you can probably tell, neither High School nor the Gardener Apprenticeship was for me. After a Hiatus and a lot of contemplating I finally decided that I wanted to be a fullstack developer. I enrolled at WISS and started my developer journey. In the almost two years I have spent at this school, I have gathered all the skills necessary to be a useful asset to your team, having learned about different programming languages, databases, and different project management styles among other things. 
            In my free time I enjoy creative activities such as drawing and making music. I also like to work out and go skateboarding.
            </p>
            <p>
            If you have any further questions, feedback, or would like to talk about the Internship, feel free to send me a message via the contact options listed below. I look forward to hearing from you.
            </p>
            <p>
            In the PDF you will find my CV, my grade sheet, my advanced diploma, my multicheck and the PDF explaining the internship in more detail.
            </p>
            <p>
            At WISS Tests that haven't been written or graded yet, get written down as a "1".
            </p>
           
          <div className="about-cta">
            <a href={CV} download className='btn'>Download All Documents</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}


export default about