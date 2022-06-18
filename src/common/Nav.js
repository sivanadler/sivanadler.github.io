import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaHome, FaUser, FaListAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";

function Nav(props){
    const history = useHistory()

    // STATE
    const [activeLink, setActiveLink] = useState('/')

    // const handleClick = (path) => {
    //     console.log(path)
    //     setActiveLink(path)
    //     history.replace(path)
    //     // history.push(path)
    // }

    useEffect(() => {
        setActiveLink(history.location.pathname)
    }, [history.location.pathname])

    return(
        <div className="nav-list">
            <Link 
                // onClick={() => handleClick('/')} 
                to ={'/'} 
                className={activeLink === '/' ? 'active' : 'inactive'}
            >
                <FaHome />{'   '} <span>Home</span>
            </Link>
            <Link 
                // onClick={() => handleClick('/about')} 
                to ={'/about'} 
                className={activeLink === '/about' ? 'active' : 'inactive'}
            >
                <FaUser />{'   '} <span>About</span>
            </Link>
            <Link
                // onClick={() => handleClick('/experience')} 
                to ={'/experience'} 
                className={activeLink === '/experience' ? 'active' : 'inactive'}
            >
                <FaListAlt />{'   '} <span>Experience</span>
            </Link>
        </div>    
    )
}

export default Nav