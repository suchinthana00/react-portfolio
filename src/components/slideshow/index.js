import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { MdHourglassEmpty } from "react-icons/md";
import "./style.css"; // Import your CSS file for styling

const ImageCarousel = ({ imageUrls }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const openCarousel = () => setIsOpen(true);
  const closeCarousel = () => setIsOpen(false);
  const nextImage = () =>
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={openCarousel} className="btn">
        View Project
      </button>

      {isOpen && (
        <div className="overlay">
          <div className="carousel">
            {!isLoading && (
              <button className="close-btn" onClick={closeCarousel}>
                <AiOutlineClose />
              </button>
            )}
            {isLoading && <MdHourglassEmpty className="loading-icon" />}
            <img
              src={imageUrls[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              onLoad={handleImageLoad}
              style={{ display: isLoading ? "none" : "block" }}
            />
            <button className="nav-btn prev-btn" onClick={prevImage}>
              <AiOutlineArrowLeft />
            </button>
            <button className="nav-btn next-btn" onClick={nextImage}>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
