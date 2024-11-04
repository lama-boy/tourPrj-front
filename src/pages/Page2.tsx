import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";

import Login from '../pages/Login';
import Page3 from '../pages/Page3';

interface menuData {
    menu_seq : number;
    p_menu_seq : number;
    title : String;
    url  : String;
    auth_level : number;
    depth : number;
}

const Page2 = ()=>{
    const [menuDatas, setData] = useState<menuData[] | null>(null);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getMenus');
            let data :menuData[] = response.data.menus;
            setData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const menuClick = () => {
        console.log('menuClick');
        axios.get('http://192.168.0.93:8080/getMenus').then(response => {
            if (response.status === 200) {
                console.log(response.data.menus);
                setData(response.data.menus);
            } else {
                alert('error');
            }
        }).catch(error => {
            console.log('error : ' + error);
        });
    };



    return (
        <>
            <header className="p-3 border-bottom border-top">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            {menuDatas && menuDatas.map((item: menuData, index) => (
                                <li key={index}>
                                    <a href="#" className="nav-link px-2 text-white">{item.title}</a>
                                </li>
                            ))}
                            
                            <li>
                                <Link className='nav-link px-2 text-main' to="/page1">프로젝트</Link>
                            </li>
                            <li>
                                <Link className='nav-link px-2 text-main' to="/page2">학원</Link>
                            </li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control rounded-pill" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className="text-end">
                            <button type="button" className="btn me-2">회원가입</button>
                            <button type="button" className="btn">로그인</button>
                        </div>
                    </div>
                </div>
            </header>
            {/* <div>
                <button onClick={menuClick}>메뉴</button>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>depth</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menuDatas && menuDatas.map((item: menuData, index) => (
                            <tr key={index}>
                                <td>{item.menu_seq + 1}</td>
                                <td>{item.depth}</td>
                                <td>{item.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}




            <main>
                <section className="py-5 text-center container">
                    <h1 className="fw-bold">Album example</h1>
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <p className="lead text-body-secondary">
                                Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {/* loop */}
                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#55595c"/>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-body-secondary">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* loop */}
                        </div>
                    </div>
                </div>
                <footer className="py-3 mt-4 bg-dark">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About</a></li>
                    </ul>
                    <p className="text-center text-white">© 2024 Company, Inc</p>
                </footer>
        </main>
        </>
    )
}



export default Page2;