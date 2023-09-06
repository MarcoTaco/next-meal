import React from "react";
import "../styles/homepage/Home.css";
import "../components/homepage/Caraousel";
import Caraousel from "../components/homepage/Caraousel";
import IngredientsEntry from "../components/homepage/IngredientsEntry";
import FilterSection from "../components/homepage/FilterSection";
import Layout from "../components/Layout";

function Home(){
    return(
      <Layout>
        <div className="home-page">
          <IngredientsEntry />

          <Caraousel />
          
          <FilterSection />
        </div>
      </Layout>
    );
};

export default Home;