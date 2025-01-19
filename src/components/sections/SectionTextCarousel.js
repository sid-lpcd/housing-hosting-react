import React from "react";
import Carousel from "../general/Carousel";

function SectionTextCarousel({ title, description, images = [] }) {
  return (
    <section className="row my-3 mx-3 p-2 align-items-center border border-light rounded">
      <div className="col-md-6">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="col-md-6">
        <Carousel images={images} />
      </div>
    </section>
  );
}

export default SectionTextCarousel;
