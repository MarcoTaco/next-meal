import React from "react";
import "../styles/homepage/Home.css";
import "../components/homepage/Caraousel";
import Caraousel from "../components/homepage/Caraousel";
import IngredientsEntry from "../components/homepage/IngredientsEntry";
import FilterSection from "../components/homepage/FilterSection";

function Home(){
    return(
      <div className="home-page">
        <IngredientsEntry />

        <Caraousel />
        
        <FilterSection />
      </div>
    );
};

export default Home;