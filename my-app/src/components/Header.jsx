import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    const [activeLink, setActiveLink] = useState('home'); 

    const navOptionClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="header-wrapper sticky-top mb-3">
            <header className="header">
                <Navbar variant="dark" expand="lg">
                    <div className="container-fluid">
                        <Navbar.Brand href="#">Nikhil Khatri</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarNav" />
                        <Navbar.Collapse id="navbarNav">
                            <Nav className="ms-auto mb-2 mb-lg-0">
                                <Nav.Link
                                    href="#home"
                                    className={`mx-lg-2 ${activeLink === 'home' ? 'active' : ''}`}
                                    onClick={() => navOptionClick('home')}
                                    aria-current={activeLink === 'home' ? 'page' : undefined}
                                >
                                    Home
                                </Nav.Link>
                                <Nav.Link
                                    href="#about"
                                    className={`mx-lg-2 ${activeLink === 'about' ? 'active' : ''}`}
                                    onClick={() => navOptionClick('about')}
                                >
                                    About
                                </Nav.Link>
                                <Nav.Link
                                    href="#qualification"
                                    className={`mx-lg-2 ${activeLink === 'qualification' ? 'active' : ''}`}
                                    onClick={() => navOptionClick('qualification')}
                                >
                                    Qualification
                                </Nav.Link>
                                <Nav.Link
                                    href="#Project"
                                    className={`mx-lg-2 ${activeLink === 'project' ? 'active' : ''}`}
                                    onClick={() => navOptionClick('project')}
                                >
                                    Projects
                                </Nav.Link>
                                <Nav.Link
                                    href="#contact"
                                    className={`mx-lg-2 ${activeLink === 'contact' ? 'active' : ''}`}
                                    onClick={() => navOptionClick('contact')}
                                >
                                    Contact
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>
        </div>
    );
};

export default Header;
