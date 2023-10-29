import React from "react"
import "./nav.css"

import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
<div className="nav">
<label className="hamburger-menu">
    <input type="checkbox"/>
        </label>
            <aside className="sidebar">
                <nav>
                <div/> <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
                <div/> <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
                <div/> <a href="#wiss" onClick={() => setActiveNav('#wiss')} className={activeNav === '#wiss' ? 'active' : ''}>Wiss</a>
                <div/> <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</a>
                <div/> <a href="#portfoliotabs" onClick={() => setActiveNav('#portfoliotabs')} className={activeNav === '#portfoliotabs' ? 'active' : ''}>Portfolio</a>
                <div/> <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}>Testimonials</a>
                <div/> <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
                </nav>
            </aside>
        </div>
    )
}

export default Nav