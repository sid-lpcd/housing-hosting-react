import React from "react";
import GallerySlider from "../general/GallerySlider";

function SectionGallery() {
  return (
    <div className="row" id="gallery">
      <h1>Not convinced? Take a look at paradise</h1>
      <GallerySlider />
      <a href="#" className="btn btn-dark border-light w-25 h-25 my-3 mx-auto">
        Gallery
      </a>
    </div>
  );
}

export default SectionGallery;
