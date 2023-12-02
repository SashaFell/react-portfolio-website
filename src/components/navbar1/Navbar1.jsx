import { useRef } from "react";
import "./navbar1.css";

import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {HiOutlineDocumentText} from 'react-icons/hi'

import {FaBars, FaTimes} from "react-icons/fa";

function Navbar1() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<FaBars/>
			<nav ref={navRef}>
				<a href="https://github.com/SashaFell" target="_blank"><AiOutlineGithub/></a>
				<a href="https://www.linkedin.com/in/sasha-fellmann-a53a29286/" target="_blank"><AiOutlineLinkedin/></a>
				<a href="/#downloads"><HiOutlineDocumentText/></a>
			</nav>
		</header>
	);
}

export default Navbar1;