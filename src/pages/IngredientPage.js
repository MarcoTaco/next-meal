import React, { useState } from "react";
import "../styles/ingredientspage/ingredientspage.css";
import Layout from "../components/Layout";

function IngredientsPage() {
    const [buttonText, setButtonText] = useState('ingredient button is pressed');
    const [activeButton, setActiveButton] = useState('ing-button');

    const handleBtnClick = (buttonName, buttonText) => {
        setActiveButton(buttonName);
        setButtonText(buttonText);
    };

    return(
        <Layout>
            <div className="ingredients-page">  
                <div className="header">
                    <h4>Food Name!</h4>
                </div>
                <div className="ingredients-section">
                    <div className="ingredients-picture">
                        <div className="placeholder"></div>
                    </div>
                    <div className="ingredients-information">
                        <div className="buttons">
                            <div className="ingredients-button">
                                <button onClick={() => handleBtnClick('ing-button', 'ingredient button is pressed')}
                                    className={activeButton === 'ing-button' ? 'active' : ''}>
                                    Ingredients
                                </button>
                            </div>
                            <div className="instructions-button">
                                <button onClick={() => handleBtnClick('inst-button', 'instruction button is pressed')}
                                    className={activeButton === 'inst-button' ? 'active' : ''}>
                                    Instructions
                                </button>
                            </div>
                        </div>
                        <div className="lotta-text">
                            <div className="information-text">
                                <p>{buttonText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IngredientsPage;