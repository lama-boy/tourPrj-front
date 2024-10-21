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
            <div>
                <h2 style={{ color: 'blue', fontSize: '20px' }}>Im page2</h2>
            </div>
            <div>
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
            </div>



            <header>
                <div className="collapse text-bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4>About</h4>
                                <p className="text-body-secondary">
                                    Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.
                                </p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4>Contact</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                    <li><a href="#" className="text-white">Like on Facebook</a></li>
                                    <li><a href="#" className="text-white">Email me</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href="" className="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-album" viewBox="0 0 16 16">
                                <path d="M13.5 0h-11A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11A2.5 2.5 0 0 0 16 13.5V2.5A2.5 2.5 0 0 0 13.5 0zm0 1a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-11A1.5 1.5 0 0 1 2.5 1h11z"/>
                            </svg>
                            <strong>Album</strong>
                        </a>                       
                        <div className="">
                                <div className='d-flex gap-3 fs-5 fw-semibold'>
                                    <Link className='navLinks text-white' to="/login">로그인</Link>
                                    <Link className='navLinks text-white' to="/page1">프로젝트</Link>
                                    <Link className='navLinks text-white' to="/page2">학원</Link>
                                </div>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>

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
        </main>
        </>
    )
}



export default Page2;