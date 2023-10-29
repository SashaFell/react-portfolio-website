import React from 'react'
import './wiss.css'

const Wiss = () => {
  return (
    <section id='wiss'>
        <h5>The School I Go To</h5>
        <h2>WISS Altstetten</h2>
        <div className="container wiss__container">
          <p>WISS is a Swiss-based education and training institiution that provides specialized courses in the fields of business, computer science, and real estate. The institution offers a wide range of programs, from basic vocational training to higher education and post-graduate studies. With a focus on practical skills and hands-on experience, the institution aims to provide its students with the knowledge and expertise needed to succeed in their chosen careers. The course that I’m attending (Informatiker/in EFZ Fachrichtung Applikationsentwicklung) follows BiVo 21 and works towards the goal of getting an EFZ diploma. In this course students will absolve two years of school followed by a two-year internship, during which students attend school for half a day per week. At the end of this Internship students will take the IPA (Individuelle Praktische Arbeit). 
          </p>
          <br></br>
          <p>Some of the skills WISS wishes to impart to its students:</p>
          <p>
            •	Accompanying ICT projects/IT project management
            •	Supporting and advising in the ICT environment
            •	Building and maintaining digital data
            •	Developing applications
            •	Delivering and operating applications
            •
          </p>
          <br></br>
          <p>
            For more information on the internship please consult the PDF file, available in the about me section, or visit the website linked below.
          </p>

        
        <div className="wiss-cta">
            <a href= "#about" className='btn'>Move To Downloads</a>
            <a href="https://www.wiss.ch/de-CH/Angebot/Grundbildung/Informatiker-in-EFZ-Fachrichtung-Applikationsentwicklung" target="_blank" className='btn btn-primary'>WISS Website</a>
        </div>
        </div>
   </section>
  )
}

export default Wiss