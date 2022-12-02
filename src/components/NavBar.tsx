
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import logo from '../assets/img/logoOD.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
const pages = ['Home', 'About', 'Skills', 'Projects'];


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <Router>
      <Navbar expand="md"
        className={scrolled ? 'scrolled ' : ''}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto'>
              {pages.map((page) => (
                <Nav.Link
                  key={page}
                  onClick={() => setActiveLink(page)}
                  href={`#${page.toLowerCase()}`}
                  className={activeLink === page.toLowerCase() ? 'active navbar-link' : 'navbar-link'}
                >
                  {page}
                </Nav.Link>
              ))}
            </Nav>
            <span className='navbar-text'>
              <div className="social-icon">
                <a href="/"><img src={navIcon1} alt='' /></a>
                <a href="/"><img src={navIcon2} alt='' /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </Router>

  )
}

