import React, { useState } from "react";
import "../../styles/homepage/Caraousel.css";

function Caraousel({ slides }){
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

    return (
      <div className="second-section">
        <h3 className="second-section-header">Popular Foods Of The Day</h3>
        <div className="popular-foods">
          <div className="carousel">
            <div className="carousel-wrapper">
              {slides.map((slide, index) => (
                <div className={`slide ${index === currentSlide ? 'active' : ''}`} key={index}>
                  <div className="popular-food-item">
                    <div className="popular-food-pic">
                          <div></div>
                    </div>
                    <div className="popular-food-name">
                      <span>testing</span>
                    </div>
                  </div>
                  <div className="popular-food-item">
                    <div className="popular-food-pic">
                      <div></div>
                    </div>
                    <div className="popular-food-name">
                      <span>testing</span>
                    </div>
                  </div>
                  <div className="popular-food-item">
                    <div className="popular-food-pic">
                      <div></div>
                    </div>
                    <div className="popular-food-name">
                      <span>testing</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="prev-button" onClick={goToPreviousSlide}>Previous</button>
            <button className="next-button" onClick={goToNextSlide}>Next</button>
          </div>
        </div>
      </div>
    );
}

export default Caraousel;