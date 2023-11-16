import React, { useState, useEffect } from "react";
import "../styles/displayfoods/FoodList.css"
import Layout from "../components/Layout";
import { getFoods } from '../api/axios';
import SearchBarFood from '../components/displayfoodspage/SearchBarFood';

//const apiKey = 'd9fcff04ad8341128757ed1a8c5694fe';

function DisplayFoods(){
    const [foods, setFoods] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getFoods().then(json => {
            setFoods(json);
            return json;
        }).then(json => {
            setSearchResults(json);
        })
    }, [])

    // this will grab food from api depending on which type of cuisine we pick
    // const getCuisine = async (name) => {
    //     const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`);
    //     const recipes = await data.json();
    //     setCuisine(recipes.results);
    // }; 
    // console.log(apiKey);
    
    return(
        // <Layout>
        //     <div className="display-foods-main">
        //         <div className="display-foods header">
        //             <h4>All Foods On Display</h4>
        //         </div>
        //         <div className="filter-and-food-section">
        //             <div className="foods-filter-section">
                        
        //             </div>
        //             <div className="all-foods-section">

        //             </div>
        //         </div>
        //     </div>
        // </Layout>
        <SearchBarFood foods={foods} setSearchResults={setSearchResults} />
    );
};

export default DisplayFoods;