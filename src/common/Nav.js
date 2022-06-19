import React, { useState, useEffect } from "react";
// import { FaHome, FaUser, FaListAlt, FaLightbulb, FaAddressCard, FaAd } from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'
import '../statics/css/nav.scss'

function Navigation(props){

    // STATE
    const [activeLink, setActiveLink] = useState('')

    const handleClick = (path) => {
        setActiveLink(path)
        window.location.replace(path)
    }

    useEffect(() => {
       setActiveLink(window.location.pathname)
    }, [])

    return(
        <div>
            <Navbar expand="md" collapseOnSelect className="nav-list">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="flex-column justify-content-end">
                        <NavLink 
                            onClick={() => handleClick('/')} 
                            exact to ={'/'} 
                            className={activeLink === "/" ? 'active' : 'inactive'}
                        >
                            {/* <FaUser />{'   '}  */}
                            Home

                        </NavLink>
                        <NavLink 
                            onClick={() => handleClick('/about')} 
                            exact to ={'/about'} 
                            className={activeLink === "/about" ? 'active' : 'inactive'}
                        >
                            {/* <FaUser />{'   '}  */}
                            About
                        </NavLink>
                        <NavLink
                            onClick={() => handleClick('/experience')} 
                            exact to ={'/experience'} 
                            className={activeLink === '/experience' ? 'active' : 'inactive'}
                        >
                            {/* <FaListAlt />{'   '}  */}
                            Experience
                        </NavLink>
                        <NavLink
                            onClick={() => handleClick('/skills')}
                            exact to={'/skills'}
                            className={activeLink === '/skills' ? 'active' : 'inactive'}
                        >
                            {/* <FaLightbulb/>{'   '}  */}
                            Skills
                        </NavLink>
                        <NavLink
                            onClick={() => handleClick('/contact')}
                            exact to={'/contact'}
                            className={activeLink === '/contact' ? 'active' : 'inactive'}
                        >
                            {/* <FaAddressCard/>{'   '}  */}
                            Contact
                        </NavLink>
                        <br/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>    
    )
}

export default Navigation