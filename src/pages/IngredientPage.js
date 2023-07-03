import React from "react";
import "../styles/ingredientspage/ingredientspage.css";

function IngredientsPage() {
    return(
        <div className="ingredients-section">
            <div className="ingredients-picture">
                <div className="placeholder"></div>
            </div>
            <div className="buttons">
                <div className="ingredients-button">
                    <button className="ing-button btn">Ingredients</button>
                </div>
                <div className="instructions-button">
                    <button className="inst-button btn">Instructions</button>
                </div>
            </div>
            <div className="lotta-text">
                <div className="ingredients-text">
                
                </div>
                <div className="instructions-text">

                </div>
            </div>
        </div>
    );
};

export default IngredientsPage;