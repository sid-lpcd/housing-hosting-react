import React from "react";
import ImageCarouselItem from "../general/ImageCarouselItem";

function SectionImageCarousel() {
  return (
    <div className="row" id="benefits" data-aos="fade-top">
      <div
        id="carouselQuintaMilhao"
        className="carousel slide h-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner h-100">
          <ImageCarouselItem
            isActive={true}
            imageUrl="assets/Gallery Images/Casa-Nova-Sunset.jpg"
            text="Experience the serenity of Quinta Milhão"
          />
          <ImageCarouselItem
            imageUrl="assets/Gallery Images/Casa-Nova-Modern.jpg"
            text="Modern home with breathtaking scenery"
          />
          <ImageCarouselItem
            imageUrl="assets/Gallery Images/Casa-Nova-Harvest.jpg"
            text="Discover the nutritional richness of our blueberries"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionImageCarousel;
