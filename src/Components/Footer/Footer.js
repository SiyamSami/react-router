import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-text">
                            <li>Home</li>
                            <li>About</li>
                            <li>Courses</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className="col">
                        <p className="text-white">Address: Level-4, 34, Awal Centre, Banani, Dhaka</p>
                        <p>Mail: support@scracth.academy</p>
                        <p>Phone: +8802xxxxxx | Mobile: +8801xxxxxxxxx</p>
                    </div>
                    <div className="col">
                        <h3>Download Our App</h3>
                    </div>
                </div>
                <p className="mt-4">&copy;{new Date().getFullYear()}All Right Reserved By Scratch Academy</p>
            </div>
        </div>
    );
};

export default Footer;