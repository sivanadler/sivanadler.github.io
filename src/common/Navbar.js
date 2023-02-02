import "../statics/css/common.scss"
import "../statics/css/nav.scss"
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar(){

    const handleClick = (e, element) => {
         e.preventDefault();
        const foundElement = document.querySelector(`#${element}`)
        if(foundElement){
            foundElement.scrollIntoView()
        }
    }


    return (
        <div className="nav-list" role="navigation">
                    <Link
                        activeClass="active"
                        className="main-nav-link"
                        to="home"
                        onClick={(e) => handleClick(e, 'home')}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        <span className="nav-title"> Home </span>
                    </Link>

                    <Link
                        activeClass="active"
                        className="main-nav-link"
                        to="about"
                        onClick={(e) => handleClick(e, 'about')}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <span className="nav-title"> About </span>
                    </Link>

                    <Link
                        activeClass="active"
                        className="main-nav-link"
                        to="skills"
                        onClick={(e) => handleClick(e, 'skills')}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <span className="nav-title"> Skills </span>
                    </Link>

                    <Link
                        activeClass="active"
                        className="main-nav-link"
                        to="experience"
                        onClick={(e) => handleClick(e, 'experience')}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <span className="nav-title"> Experience </span>
                    </Link>

                    <Link
                        activeClass="active"
                        className="main-nav-link"
                        to="contact"
                        onClick={(e) => handleClick(e, 'contact')}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <span className="nav-title"> Contact </span>
                    </Link>
        </div>
    )
}

export default Navbar