import React, { useState, useEffect } from "react";
import "../../styles/FoodDisplayPics.css";

function FoodDisplayPics(){
    const [products, setProducts] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;
    
    useEffect(() => {
        fetch(`https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${apiKey}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching data: ", error));
    }, []);
    
    // this is the api url : https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY
    // replace api key with what got emailed to me.

    return(
        <h4>test</h4>
    );
}

export default FoodDisplayPics;