import React, { useState} from "react";
import "../styles/homepage/Home.css";
import "../components/homepage/Caraousel";
import Caraousel from "../components/homepage/Caraousel";
import IngredientsEntry from "../components/homepage/IngredientsEntry";

function Home(){
    return(
      <div className="home-page">
        <IngredientsEntry />
        
        <Caraousel />

        <div className="third-section">
          <p>this is i think where i put the about us or something. i have to check my notes.</p>
          <p>im just putting the notes here to structure how the page is going to look</p>
        </div>
      </div>
    );
};

export default Home;