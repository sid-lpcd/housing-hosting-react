function ImageCarouselItem({ isActive, imageUrl, text }) {
  return (
    <div
      className={`carousel-item ${
        isActive ? "active" : ""
      } h-100 align-items-center justify-content-center`}
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-100 d-flex align-items-center justify-content-center">
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default ImageCarouselItem;
