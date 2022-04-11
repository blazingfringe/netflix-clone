import React, { useEffect, useState } from 'react'
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", () => {
            if( window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

  return (
    <div className={`nav ${show && "nav_black" }`}>
         <img
         className='nav_logo'
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
         alt='Netflix Logo'
         />


         <img className='nav_avatar'
         src='https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589'
         alt="Profile Avatar"
         />
    </div>
  )
}

export default Nav