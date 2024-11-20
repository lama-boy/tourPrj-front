import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";

import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Login from '../pages/Login';
import Page3 from '../pages/Page3';
import Card from '../pages/Card';

const Page2 = () => {
    const handleView = () => {
        alert('View button clicked!');
      };
    
      const handleEdit = () => {
        alert('Edit button clicked!');
      };
    return (
        <>
            <Header />
            <main>
                <div id="myCarousel" className="main-carousel carousel slide mb-6 mb-md-8" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        {/* Carousel Slide 1 */}
                        <div className="carousel-item active" style={{ background: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D) center / cover no-repeat' }}>
                            <div className="carousel-caption text-center">
                                <a href="https://www.daum.net/" className="animate__animated animate__fadeInDown h-100 w-100" style={{ animationDelay: '0.4s' }}></a>
                            </div>
                        </div>
                        {/* Carousel Slide 2 */}
                        <div className="carousel-item" style={{ background: 'url(https://i.imgur.com/p87gU8u.jpg) center / cover no-repeat' }}>
                            <a href="https://www.daum.net/" className="animate__animated animate__fadeInDown h-100 w-100" style={{ animationDelay: '0.4s' }}></a>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                    <div className='row mb-4'>
                        <h2 className='text-main-sub fw-bold text-start mb-2'>코스</h2>
                        <h6 className='text-start'>지금 가장 인기 있는 코스를 확인하세요</h6>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {/* loop */}
                            <div className="col">
                                <Card
                                    imageUrl=""
                                    title="카드제목"
                                    date="2024-09-23"
                                    onView={handleView}
                                    onEdit={handleEdit}
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Page2;