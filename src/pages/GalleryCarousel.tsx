import React, { useEffect, useRef, useState } from "react";

const GalleryCarousel: React.FC = () => {
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 4; 
  const itemsToShowDesktop = 3;
  const itemsToShowMobile = 1;

  const getMaxIndex = () => totalItems - 1;

  const updateCarousel = () => {
    const carouselInner = carouselInnerRef.current;
    if (!carouselInner) return;

    const itemsToShow = window.innerWidth >= 768 ? itemsToShowDesktop : itemsToShowMobile;
    const itemWidth = carouselInner.offsetWidth / itemsToShow;
    const translateXValue = -currentIndex * itemWidth;

    carouselInner.style.transform = 'translateX(' + translateXValue + 'px)';
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? getMaxIndex() : (prevIndex - 1) % totalItems
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  useEffect(() => {
    updateCarousel();
    const handleResize = () => updateCarousel();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  return (
      <div className="d-flex">
        <div className="col-1 d-flex align-items-center justify-content-start">
          <button id="galleryPrevButton" className="rounded-2" onClick={handlePrevClick}>
            <i className="bi bi-chevron-left fs-1 text-main"></i>
          </button>
        </div>
        <div className="col-10 p-0">
          <div className="gallery-carousel">
            <div
              id="carouselInner"
              ref={carouselInnerRef}
              className="gallery-carousel-inner d-flex"
              style={{
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {[...Array(totalItems)].map((_, index) => (
                <div
                  key={index}
                  className="gallery-carousel-item justify-content-center py-4"
                >
                  <div>
                    <a
                      href={`/user/board/gallery/detail/${index + 1412}`}
                      className="card rounded-4 bg-main-dark1 rounded-diagonal-rl-4 overflow-hidden d-flex flex-column border shadow-sm bg-main-block-hover transition-all-300"
                    >
                      <div className="main-gallery-card-inner card-img">
                        <img
                          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D"
                          alt=""
                          className="img-fluid gallery-img"
                        />
                      </div>
                      <div className="p-3">
                        <div className="text-start fs-7 text-main-light2 text-truncate mb-2">
                          <span className="me-2">#가을</span>
                          <span className="me-2">#서울</span>
                          <span className="me-2">#야간개장</span>
                          <span className="me-2">#문화재</span>
                          <span className="me-2">#자연경관</span>
                        </div>
                        <div
                          className="text-white text-start mb-4 mb-md-3 mb-lg-4 fw-semibold lh-sm text-truncate-2"
                          style={{ height: "40px" }}
                        >
                          Item {index + 1}
                        </div>
                        <div className="text-white text-end fs-7 text-secondary pb-1 pe-1">
                          2024-12-04 14:25:30
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-end">
          <button id="galleryNextButton" className="rounded-2" onClick={handleNextClick}>
            <i className="bi bi-chevron-right fs-1  text-main"></i>
          </button>
        </div>
      </div>
  );
};

export default GalleryCarousel;
