import React from 'react'
import './wiss.css'

const Wiss = () => {
  return (
    <section id='wiss'>
        <h5>Mehr zu meiner Schule</h5>
        <h2>WISS Altstetten</h2>
        <div className="container wiss__container">
          <p>Die WISS ist eine in der Schweiz ansässige Bildungs- und Schulungseinrichtung, die spezialisierte Kurse in den Bereichen Wirtschaft, Informatik und Immobilien anbietet. Die Einrichtung bietet eine Vielzahl von Programmen an, von grundlegender beruflicher Ausbildung bis hin zu Hochschul- und Postgraduiertenstudien. Mit einem Schwerpunkt auf praktischen Fähigkeiten und praktischer Erfahrung strebt die Einrichtung danach, ihren Studierenden das für ihren gewählten Beruf erforderliche Wissen und die erforderliche Expertise zu vermitteln. Der Kurs, den ich besuche (Informatiker/in EFZ Fachrichtung Applikationsentwicklung), folgt BiVo 21 und arbeitet darauf hin, ein EFZ-Diplom zu erhalten. In diesem Kurs absolvieren die Studierenden zwei Jahre Schulunterricht, gefolgt von einem zweijährigen Praktikum, während dem die Studierenden einmal pro Woche halbtags die Schule besuchen. Am Ende dieses Praktikums werden die Studierenden die IPA (Individuelle Praktische Arbeit) absolvieren.. 
          </p>
          <br></br>
          <p>
            Für mehr Informationen über das Praktikum, wenden sie sich bitte an das entsprechende PDF Dokument in der Download Sektion, oder besuchen sie die unten verlinkte Webseite.
          </p>

        
        <div className="wiss-cta">
            <a href= "#downloads" className='btn'>Zu den Downloads</a>
            <a href="https://www.wiss.ch/de-CH/Angebot/Grundbildung/Informatiker-in-EFZ-Fachrichtung-Applikationsentwicklung" target="_blank" className='btn btn-primary'>WISS Website</a>
        </div>
        </div>
   </section>
  )
}

export default Wiss