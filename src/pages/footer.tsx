import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer>
            <div className="container">
                <ul className="nav footer-nav justify-content-start border-bottom p-4 ps-4 pe-4 ps-sm-0 pe-sm-0 fs-7">
                    <li className="nav-item"><a href="#" className="nav-link text-white px-2">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-footer">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-footer">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-footer">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-footer">About</a></li>
                </ul>
                <ul className="nav footer-info flex-wrap justify-content-start p-4 ps-4 pe-4 ps-sm-0 pe-sm-0 fs-7">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-white">SIPCODE</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-footer">대표이사 : 양승리</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-footer">TEL : 010-2951-2884</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-footer">Email : ysl2884@gmail.com</a></li>
                    <li className="nav-item w-100 text-start"><a href="#" className="nav-link px-2 text-footer">주소 : 서울특별시 마곡중앙1로 72 M타워 706호</a></li>
                </ul>
                <p className="text-start fs-7 p-4 ps-4 pe-4 ps-sm-0 pe-sm-0 pt-0 text-footer">© 2024 Company, Inc</p>
            </div>
        </footer>
);
}

export default Footer;