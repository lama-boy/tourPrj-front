import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../assets/icon/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
interface menuData {
    menu_seq: number;
    p_menu_seq: number;
    title: string;
    url: string;
    auth_level: number;
    depth: number;
}

const Header = () => {
    const [menuDatas, setData] = useState<menuData[] | null>(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getMenus');
            const data: menuData[] = response.data.menus;
            setData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <header className="p-3 border-bottom border-top">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none pe-0 pe-lg-4">
                        <img src={logo} alt="Logo" height="40" />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fw-medium">
                        {menuDatas && menuDatas.map((item: menuData) => (
                            <li key={item.menu_seq}>
                                <a href={item.url} className="nav-link px-2 text-white">{item.title}</a>
                            </li>
                        ))}
                        <li>
                            <Link className='nav-link px-3 text-main' to="/page1">프로젝트</Link>
                        </li>
                        <li>
                            <Link className='nav-link px-3 text-main' to="/page2">학원</Link>
                        </li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 d-flex justify-content-center" role="search">
                        <input type="search" className="form-control rounded-pill top-search-input" placeholder="Search" aria-label="Search" />
                        <i className="bi bi-search top-search-icon text-secondary"></i>
                    </form>
                    <div className="text-end">
                        <button type="button" className="btn me-2"><i className="bi bi-person-add fs-5 pe-1"></i>회원가입</button>
                        <button type="button" className="btn"><i className="bi bi-box-arrow-in-right fs-5 pe-1"></i>로그인</button>
                    </div>
                </div>
            </div>
        </header>
        
    );
}

export default Header;