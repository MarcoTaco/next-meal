import React, { useState, useEffect } from "react";
import "../styles/displayfoods/DisplayFoods.css"
import Layout from "../components/Layout";
//import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';


function DisplayFoods(){
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const apiKey = process.env.REACT_APP_API_KEY;

    // this will grab food from api depending on which type of cuisine we pick
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        //getCuisine(params.type);
        console.log(params.type);
    },[params.type]);
    
    return(
        <Layout>
            <div className="display-foods-main">
                <div className="display-foods header">
                    <h4>All Foods On Display</h4>
                </div>
                <div className="filter-and-food-section">
                    <div className="foods-filter-section">
                        
                    </div>
                    <div className="all-foods-section">

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DisplayFoods;