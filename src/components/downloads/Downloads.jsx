import React from "react"
import "./downloads.css"
import CV from '../../assets/CV_Sasha_Fellmann.pdf'

import {HiOutlineDocumentText} from 'react-icons/hi'

const downloads = () => {
    return (
        <section id='downloads'>
            <h5>All Relevant Documents</h5>
            <h2>Downloads</h2>

        <div className="container downloads__container">
        <div className="downloads__content">

        <article className="downloads__details">
            {/* <HiOutlineDocumentText className='downloads__details-icon' /> */}
            <div>
            <h2>All Documents</h2>
            <p>This document contains my CV, grade sheet, Certificat in Advanced English, Multicheck and two pages explaining the intership in more detail. In case you require any further information, please feel free to contact me.</p>
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