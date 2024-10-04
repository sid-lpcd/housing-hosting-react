import React from "react";

function Carousel({ images }) {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
            key={index}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img src={image.src} className="d-block w-100" alt={image.title} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{image.title}</h5>
              <p>{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
