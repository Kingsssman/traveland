import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="main-footer">
            <nav>
                <ul className="main-footer__links">
                    <li className="main-footer__link">
                        <a href="">TRAVELAND</a>
                    </li>
                    <li className="main-footer__link">
                        <a href="">Our Tours</a>
                    </li>
                    <li className="main-footer__link">
                        <a href="">Sign In</a>
                    </li>
                    <li className="main-footer__link">
                        <a href="">Sign Out</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;
