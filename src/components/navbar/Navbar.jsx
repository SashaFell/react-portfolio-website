import {useRef} from "react";
import "./navbar.css";

import {FaBars, FaTimes} from "react-icons/fa";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classlist.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>Hnnnggg</h3>
			<nav ref={navRef}>
				<a href="#H">Home</a>
				<a href="#about">About</a>
				<a href="#wiss">Wiss</a>
				<a href="#experience">Experience</a>
				<a href="#portfolio">Portfolio</a>
				<a href="#testimonials">Testimonials</a>
				<a href="#contact">Contact</a>
				<button className="nav-btn nav-close-btn" onCLick={showNavbar}>
					<FaTimes/>
				</button>
			</nav>
			<button className="nav-btn" onCLick={showNavbar}>
				<FaBars/>
			</button>
		</header>
	);
}


export default Navbar;