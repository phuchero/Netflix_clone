import React from 'react'
import "./Footer.scss";
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer() {
    return (
        <div className="footer">

            <div className="footer__icon">

                <FontAwesomeIcon className="footer__icon--color" icon={faFacebookSquare} />
                <FontAwesomeIcon className="footer__icon--color" icon={faInstagramSquare} />
                <FontAwesomeIcon className="footer__icon--color" icon={faTwitterSquare} />
                <FontAwesomeIcon className="footer__icon--color" icon={faYoutube} />
            </div>

            <div className="footer__infomation">
                <div className="footer__infomation--detail">
                    <p>Overview</p>
                    <p>Design</p>
                    <p>Programing</p>
                    <p>Soon to come</p>

                </div>

                <div className="footer__infomation--detail">
                    <p>Tutorial</p>
                    <p>Resource</p>
                    <p>Examples</p>
                    <p>Doc</p>
                </div>

                <div className="footer__infomation--detail">
                    <p>About</p>
                    <p>Stories</p>
                    <p>Community</p>
                    <p>Blog</p>

                </div>

                <div className="footer__infomation--detail">
                    <p>Flex UI kit</p>
                    <p>Modern UI Kit</p>
                    <p>Framer UI Kit</p>
                    <p>Gradients UI Kit</p>
                </div>

            </div>

            <div className="footer__button">
                <button>May I support you ?</button>
            </div>

            <div className="footer__copyright">
                <p>1997 - 2019 | Netflix, Inc | No copyright</p>
            </div>
        </div>
    )
}

export default Footer
