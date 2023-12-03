//import React, { useState, useEffect } from "react";
import "../styles/displayfoods/FoodList.css"
import Layout from "../components/Layout";
import GetFoodInfo from "../components/displayfoodspage/GetFoodInfo";
//import { getFoods } from '../components/displayfoodspage/GetFoodInfo';
//import SearchBarFood from '../components/displayfoodspage/SearchBarFood';


function DisplayFoods(){
    return(
        <Layout>
           <GetFoodInfo />
        </Layout>
    );
};

export default DisplayFoods;