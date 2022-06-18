import React, { useState } from "react";
import { FaHome, FaUser, FaListAlt } from 'react-icons/fa'
import { NavLink } from "react-router-dom";

function Nav(props){

    // STATE
    const [activeLink, setActiveLink] = useState('/')

    const handleClick = (path) => {
        setActiveLink(path)
        window.location.replace(path)
    }

    // useEffect(() => {
    //     console.log(activeLink)
    //     history.push(activeLink)
    // }, [history, activeLink])

    return(
        <div className="nav-list">
            <NavLink 
                onClick={() => handleClick('/')} 
                to ={'/'} 
                className={activeLink === '/' ? 'active' : 'inactive'}
            >
                <FaHome />{'   '} <span>Home</span>
            </NavLink>
            <NavLink 
                onClick={() => handleClick('/about')} 
                to ={'/about'} 
                className={activeLink === '/about' ? 'active' : 'inactive'}
            >
                <FaUser />{'   '} <span>About</span>
            </NavLink>
            <NavLink
                onClick={() => handleClick('/experience')} 
                to ={'/experience'} 
                className={activeLink === '/experience' ? 'active' : 'inactive'}
            >
                <FaListAlt />{'   '} <span>Experience</span>
            </NavLink>
        </div>    
    )
}

export default Nav