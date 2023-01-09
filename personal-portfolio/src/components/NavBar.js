import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import "../Styles/NavBar.css"

function NavBar() {
    const [currentLink, setCurrentLink] = useState('home');
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateCurrentLink = (value) => {
        setCurrentLink(value);
    }

    return (
        <Navbar expand='lg' className={scroll ? 'scrolled': ''}>
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav' > 
                    <span className='navbar-toggle-icon'></span>
                </Navbar.Toggle>

                <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link href='#home' className={currentLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateCurrentLink('home')}>Home</Nav.Link>
                    <Nav.Link href='#about' className={currentLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateCurrentLink('about')}>About</Nav.Link>
                    <Nav.Link href='#eductaion' className={currentLink === 'eduction' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateCurrentLink('education')}>Education</Nav.Link>
                    <Nav.Link href='#experience' className={currentLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateCurrentLink('experience')}>Experience</Nav.Link>
                    <Nav.Link href='#projects' className={currentLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateCurrentLink('projects')}>Projects</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}

export default NavBar;