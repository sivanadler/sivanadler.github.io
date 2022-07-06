import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaListAlt, FaLightbulb, FaAddressCard } from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'
import '../statics/css/nav.scss'

function Navigation(props){

    // STATE
    const [activeLink, setActiveLink] = useState('')

    const handleClick = (path) => {
        console.log(path)
        setActiveLink(path)
        window.location.replace(path)
    }

    useEffect(() => {
       setActiveLink(window.location.pathname)
    }, [])
    
    return(
        <Navbar expand="sm" collapseOnSelect className="nav-list animate__animated animate__slideInDown">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end">
                    <NavLink 
                        onClick={() => handleClick('/')} 
                        exact to ={'/'} 
                        className={activeLink === "/" ? 'active' : 'inactive'}
                    >
                        Home
                    </NavLink>
                    
                    <NavLink 
                        onClick={() => handleClick('/about')} 
                        exact to ={'/about'} 
                        className={activeLink === "/about" ? 'active' : 'inactive'}
                    >
                        About
                    </NavLink>

                    <NavLink
                        onClick={() => handleClick('/skills')}
                        exact to={'/skills'}
                        className={activeLink === '/skills' ? 'active' : 'inactive'}
                    >
                        Skills
                    </NavLink>

                    <NavLink
                        onClick={() => handleClick('/experience')} 
                        exact to ={'/experience'} 
                        className={activeLink === '/experience' ? 'active' : 'inactive'}
                    >
                        
                        Experience
                    </NavLink>
            
                    <NavLink
                        onClick={() => handleClick('/contact')}
                        exact to={'/contact'}
                        className={activeLink === '/contact' ? 'active' : 'inactive'}
                    >
                       Contact
                    </NavLink>
                    <br/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation