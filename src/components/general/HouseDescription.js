import React, { useState } from "react";
import BookingForm from "./BookingForm";

function HouseDescription({ houseName, vidSource, houseDesc }) {
  return (
    <div
      className="card text-white bg-secondary p-0 w-90 border-0"
      id={houseName + "-benefits"}
    >
      <div className="row g-0">
        <div
          className="col-md-4 d-flex rounded-start"
          style={{ overflow: "hidden", objectFit: "cover" }}
        >
          <video
            className="img-fluid rounded-start my-auto"
            autoPlay
            loop
            muted
          >
            <source src={vidSource} type="video/mp4" />
          </video>
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex">
            <div className="description d-flex align-items-start justify-content-end">
              <h3 className="card-title">{houseName}</h3>
              <p className="card-text mb-4">{houseDesc}</p>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseDescription;
