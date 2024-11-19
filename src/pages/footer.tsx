import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer className="py-3 mt-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About</a></li>
            </ul>
            <p className="text-center text-white">© 2024 Company, Inc</p>
        </footer>
);
}

export default Footer;