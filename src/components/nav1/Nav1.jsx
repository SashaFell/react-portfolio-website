import React from "react"
import "./nav1.css"

import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {HiOutlineDocumentText} from 'react-icons/hi'

import { useState } from 'react'

const Nav1 = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
<div className="nav">
<label className="hamburger-menu">
    <input type="checkbox"/>
        </label>
            <aside className="sidebar">
                    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <h3>Home</h3> </a>
                    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <h3>About</h3> </a>
                    <a href="#downloads" onClick={() => setActiveNav('#downloads')} className={activeNav === '#downloads' ? 'active' : ''}> <h3>Downloads</h3> </a> 
                    <a href="#wiss" onClick={() => setActiveNav('#wiss')} className={activeNav === '#wiss' ? 'active' : ''}> <h3>Wiss</h3> </a>
                    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <h3> Experience</h3> </a> 
                    <a href="#portfoliotabs" onClick={() => setActiveNav('#portfoliotabs')} className={activeNav === '#portfoliotabs' ? 'active' : ''}> <h3>Portfolio</h3> </a> 
                    <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}> <h3>Testimonials</h3> </a> 
                    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <h3>Contact</h3> </a>
            </aside>
        </div>
    )
}

export default Nav1