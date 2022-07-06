import "../statics/css/common.scss"
import "../statics/css/nav.scss"
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar(){
    
    const scrollToTop = () => {
        scroll.scrollToTop()
    }


    return (
        <nav className="nav-list" role="navigation">
            <ul>
                <li className="main-nav-link">
                    <Link
                        activeClass="active"
                        to="home"
                        onClick={scrollToTop}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <span className="nav-title"> Home </span>
                    </Link>
                </li>

                <li className="main-nav-link">
                    <Link
                        activeClass="active"
                        to="about"
                        onClick={scrollToTop}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <span className="nav-title"> About </span>
                    </Link>
                </li>

                <li className="main-nav-link">
                    <Link
                        activeClass="active"
                        to="skills"
                        onClick={scrollToTop}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <span className="nav-title"> Skills </span>
                    </Link>
                </li>

                <li className="main-nav-link">
                    <Link
                        activeClass="active"
                        to="experience"
                        onClick={scrollToTop}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <span className="nav-title"> Experience </span>
                    </Link>
                </li>

                <li className="main-nav-link">
                    <Link
                        activeClass="active"
                        to="contact"
                        onClick={scrollToTop}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <span className="nav-title"> Contact </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar