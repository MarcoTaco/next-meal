/*

this component is supposed to be for looping through each food picture that we will be showing. 
once all the looping is done here, we will move it to the actual page. 
this is what is used for the actual food list page and food.js is the separate food pics/titles.

*/

import Food from "./Food";
import "../../styles/FoodDisplayPics.css";

function FoodDisplayPics({ searchResults }){
    const results = searchResults.map(food => <Food key={food.id} food={food} />)
    
    const content = results?.length ? results : <article><p>No Matching Posts</p></article>


    return(
        <main>{content}</main>
    )
}

export default FoodDisplayPics;