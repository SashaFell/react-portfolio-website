import React from "react"
import "./downloads.css"

import {HiOutlineDocumentText} from 'react-icons/hi'

const downloads = () => {
    return (
        <section id='downloads'>
            <h5>All Relevant Documents</h5>
            <h2>Downloads</h2>

            <div className="container downloads__container">
        <div className="downloads__content">

        <article className="downloads__details">
            <HiOutlineDocumentText className='downloads__details-icon' />
            <div>
            <h4>All Documents</h4>
            </div>
        </article>
        <article className="downloads__details">
            <HiOutlineDocumentText className='downloads__details-icon' />
            <div>
            <h4>Resume</h4>
            </div>
        </article>
        <article className="downloads__details">
            <HiOutlineDocumentText className='downloads__details-icon' />
            <div>
            <h4>Grade Sheet</h4>
            </div>
        </article>

        </div>
        </div>
        </section>
    );
}

export default downloads