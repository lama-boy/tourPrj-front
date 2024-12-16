import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";

import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Login from '../pages/Login';
import Page3 from '../pages/Page3';
import Card from '../pages/Card';
import GalleryCarousel from '../pages/GalleryCarousel';
import { MapVisualize as Map } from '../pages/Map';
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
            <main className='bg-white'>
                <div id="myCarousel" className="main-carousel carousel slide" data-bs-ride="carousel">
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
                <div className="py-5">
                    <div className="container">
                        <section className='mb-6'>
                            <div className='row mb-4'>
                                <h2 className='text-main-sub fw-bold text-start mb-2'>코스</h2>
                                <h6 className='text-start'>지금 가장 인기 있는 코스를 확인하세요</h6>
                            </div>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                    <Card
                                        imageUrl="https://res.cloudinary.com/heyset/image/upload/v1689582418/buukmenow-folder/no-image-icon-0.jpg"
                                        title="카드제목"
                                        date="2024-09-23"
                                        onView={handleView}
                                        onEdit={handleEdit}
                                    />
                                    <Card
                                        imageUrl="https://res.cloudinary.com/heyset/image/upload/v1689582418/buukmenow-folder/no-image-icon-0.jpg"
                                        title="카드제목"
                                        date="2024-09-23"
                                        onView={handleView}
                                        onEdit={handleEdit}
                                    />
                                    <Card
                                        imageUrl="https://res.cloudinary.com/heyset/image/upload/v1689582418/buukmenow-folder/no-image-icon-0.jpg"
                                        title="카드제목"
                                        date="2024-09-23"
                                        onView={handleView}
                                        onEdit={handleEdit}
                                    />
                            </div>
                        </section>
                        <section className='mb-6'>
                            <div className='row mb-4'>
                                <h2 className='text-main-sub fw-bold text-start mb-2'>코스</h2>
                                <h6 className='text-start'>지금 가장 인기 있는 코스를 확인하세요</h6>
                            </div>
                            <div className="row row-cols-1 row-cols-md-2">
                                <div className='col-12 col-md-5'>
                                    <Map />
                                </div>
                                <div className='col-12 col-md-7'>
                                    <div className='d-flex flex-wrap align-items-center justify-content-between'>
                                        <h3 className='text-start text-main-sub main-shadow-underline'>#서울특별시</h3>
                                        <div className='d-flex col-12 col-lg-6 mt-2 mt-lg-0'>
                                            <form className="d-flex justify-content-end" role="search">
                                                <input type="search" className="form-control rounded-pill top-search-input" placeholder="Search" aria-label="Search" />
                                                <i className="bi bi-search top-search-icon text-secondary"></i>
                                            </form>
                                            <div className='d-flex gap-2'>
                                                <a className='map-prev-btn border rounded-pill d-flex align-items-center justify-content-center'><i className='bi bi-chevron-left'></i></a>
                                                <a className='map-next-btn border rounded-pill d-flex align-items-center justify-content-center'><i className='bi bi-chevron-right'></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom cursor-pointer'>
                                            <div className='text-start py-3'>
                                                <span className='text-main-sub fw-medium pe-1'>[경기도]</span>국제 꽃 박람회
                                            </div>
                                            <div className='fs-7' style={{ color: '#999', }}>
                                                0000-00-00 ~ 0000-00-00
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between border-bottom cursor-pointer'>
                                            <div className='text-start py-3'>
                                                <span className='text-main-sub fw-medium pe-1'>[경기도]</span>국제 꽃 박람회
                                            </div>
                                            <div className='fs-7' style={{ color: '#999', }}>
                                                0000-00-00 ~ 0000-00-00
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between border-bottom cursor-pointer'>
                                            <div className='text-start py-3'>
                                                <span className='text-main-sub fw-medium pe-1'>[경기도]</span>국제 꽃 박람회
                                            </div>
                                            <div className='fs-7' style={{ color: '#999', }}>
                                                0000-00-00 ~ 0000-00-00
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between border-bottom cursor-pointer'>
                                            <div className='text-start py-3'>
                                                <span className='text-main-sub fw-medium pe-1'>[경기도]</span>국제 꽃 박람회
                                            </div>
                                            <div className='fs-7' style={{ color: '#999', }}>
                                                0000-00-00 ~ 0000-00-00
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between border-bottom cursor-pointer'>
                                            <div className='text-start py-3'>
                                                <span className='text-main-sub fw-medium pe-1'>[경기도]</span>국제 꽃 박람회
                                            </div>
                                            <div className='fs-7' style={{ color: '#999', }}>
                                                0000-00-00 ~ 0000-00-00
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between border-bottom cursor-pointer'>
                                            <div className='text-start py-3'>
                                                <span className='text-main-sub fw-medium pe-1'>[경기도]</span>국제 꽃 박람회
                                            </div>
                                            <div className='fs-7' style={{ color: '#999', }}>
                                                0000-00-00 ~ 0000-00-00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='mb-6'>
                            <div className='row mb-4'>
                                <h2 className='text-main-sub fw-bold text-start mb-2'>코스</h2>
                                <h6 className='text-start'>지금 가장 인기 있는 코스를 확인하세요</h6>
                            </div>
                            <div className='row'>
                                <GalleryCarousel />
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Page2;