import React, { useState } from "react";
import "../../styles/homepage/Caraousel.css";

function Caraousel(){
    return (
        <div className="second-section">
          <h3 className="second-section-header">Popular Foods Of The Day</h3>
          <div className="popular-foods">
            <div className="popular-food-arrows left">
              <div></div>
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
            <div className="popular-food-item">
              <div className="popular-food-pic">
                <div></div>
              </div>
              <div className="popular-food-name">
                <span>testing</span>
              </div>
            </div>
            <div className="popular-food-arrows right">
              <div></div>
            </div>
          </div>
          {/*<p>this is where the rotating foods are gonna be. it will be a random selection on a caraousel.</p>*/}
        </div>
    );
}

export default Caraousel;