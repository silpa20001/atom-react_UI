import React, { useState, useEffect } from 'react';
import '../Css/Navbar.css'; // Custom CSS for Navbar
import OurTeam from "../Js/ourTeam";
import OurServices from "../Js/ourServices.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from './ImageCarousel';
import CardComponent from './CardComponent';
import LogoImage from "../Css/atom.png"; // Import your logo image

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="row">
                <div className="logo-container">
                    <img src={LogoImage} alt="Logo" className="logo" />
                </div>
                {/* <div className="left">Atom</div> */}
                {/* <div className="separator"></div> */}
                <div className="middle">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /> Address :
                    
                    <p>Chennai, siruseri</p>
                </div>
                <div className="separator"></div>
                <div className="right">
                    <a >
                        <FontAwesomeIcon icon={faEnvelope} size="lg" /> Mail Us:
                    </a>
                    <p>atom@hexaware.com</p>
                </div>
                <div className="button-container">
                    <button className='button'>SIGN UP</button>
                </div>
            </div>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className="links">
                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#team">Team</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
            <div>
                <ImageCarousel />
            </div>
            <div className='mt-3'>
                <CardComponent />
            </div>
            <div>
                <OurServices />
            </div>
            <div>
                <OurTeam />
            </div>
        </div>
    );
};

export default Navbar;
