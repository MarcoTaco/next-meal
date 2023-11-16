import Food from "./Food";

function FoodDisplayPics({ searchResults }){
    const results = searchResults.map(food => <Food key={food.id} food={food} />)
    
    const content = results?.length ? results : <article><p>No Matching Posts</p></article>


    return(
        <main>{content}</main>
    )
}

export default FoodDisplayPics;