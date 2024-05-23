import React from "react";

function carousel() {
  return (
    <section>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("../images/IMG-20230713-WA0023.jpg")}
              className="d-block w-100"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/durex.jpg")}
              className="d-block w-100"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/IMG-20230713-WA0024.jpg")}
              className="d-block w-100"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default carousel;
