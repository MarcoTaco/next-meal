import axios from 'axios';
import React, { useEffect, useState } from 'react';

function GetFoodInfo(){
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchFoodImages = async () => {
            try{
                const API_KEY = '7ceba150eb024274b49b393d607bc970';
                const response = await axios.get(
                    `https://api.spoonacular.com/food/images/random?apiKey=${API_KEY}&number=10`
                );
                setImages(response.data.recipes.map(recipe => recipe.image));
            } catch(error){
                console.error(error);
            }
        };

        fetchFoodImages();
    }, []);

    return(
        <div>
            <div className="image-container">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Food ${index}`} />
                ))}
            </div>
        </div>
    )
}

export default GetFoodInfo;