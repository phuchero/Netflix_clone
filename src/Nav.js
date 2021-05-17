import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';






import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./Nav.css";
function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (


        <div className={`nav ${show && 'nav__black'} `}>

            <div className="nav__contents">
                <div className="nav__left">
                    <img
                        onClick={() => history.push("/")}
                        className="nav__logo"
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt="Netflix logo"
                    />

                    <div className="nav__catergories">
                        <p>Home</p>
                        <p>TV Shows</p>
                        <p>Movies</p>
                        <p>Lastests</p>
                        <p>My list</p>


                    </div>

                </div>

                <div className="nav__right">
                    <FontAwesomeIcon className="icon" icon={faCaretDown} />
                    <FontAwesomeIcon className="icon" icon={faBell} />
                    <FontAwesomeIcon className="icon" icon={faCompactDisc} />
                    <FontAwesomeIcon className="icon" icon={faSearch} />
                    <FontAwesomeIcon className="icon" icon={faGifts} />
                    <img
                        onClick={() => history.push("/profile")}
                        className="nav__avatar"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="user"
                    />










                </div>





            </div>



        </div>
    )
}

export default Nav
