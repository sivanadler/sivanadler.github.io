import React from "react";


function HamburgerNav(){

    function mobileMenu(){
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-list");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    return (
        <div>
            <div className="hamburger" onClick={mobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    )
}

export default HamburgerNav