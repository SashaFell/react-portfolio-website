import React from "react"
import "./downloads.css"
import CV from '../../assets/CV_Sasha_Fellmann.pdf'

import {HiOutlineDocumentText} from 'react-icons/hi'

const downloads = () => {
    return (
        <section id='downloads'>
            <h5>Alle relevanten Dokumente</h5>
            <h2>Downloads</h2>

        <div className="container downloads__container">
        <div className="downloads__content">

        <article className="downloads__details">
            {/* <HiOutlineDocumentText className='downloads__details-icon' /> */}
            <div>
            <h2>Alle Dokumente</h2>
            <p>Dieses Dokument beinhaltet meinen Lebenslauf, mein Zeugnis, mein Certificate in Advanced English, meinen Multicheck und zwei Seiten, die die Praktikumsbedingungen näher erklären. Falls sie mehr Informationen brauchen, können sie sich gerne bei mir melden.</p>
            <a href={CV} download className='btn'>Download</a>
            </div>
        </article>
        {/* <article className="downloads__details">
            <HiOutlineDocumentText className='downloads__details-icon' />
            <div>
            <h2>Resume</h2>
            <button className="btn">Download</button>
            </div>
        </article>
        <article className="downloads__details">
            <HiOutlineDocumentText className='downloads__details-icon' />
            <div>
            <h2>Grade Sheet</h2>
            <button className="btn">Download</button>
            </div>
        </article>
        <article className="downloads__details">
            <HiOutlineDocumentText className='downloads__details-icon' />
            <div>
            <h2>Stuff</h2>
            <button className="btn">Download</button>
            </div>
        </article> */}
        </div>
        </div>
        </section>
    );
}

export default downloads