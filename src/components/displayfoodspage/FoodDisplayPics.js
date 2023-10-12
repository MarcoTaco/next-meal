import React, { useState, useEffect } from "react";
import "../../styles/FoodDisplayPics.css";

function FoodDisplayPics(){
    const [products, setProducts] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;
    
    // useEffect(() => {
    //     fetch(`https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${apiKey}`)
    //     .then((response) => response.json())
    //     .then((data) => setProducts(data))
    //     .catch((error) => console.error("Error fetching data: ", error));
    // }, []);

    return(
        <h4>test</h4>
    );
}

export default FoodDisplayPics;