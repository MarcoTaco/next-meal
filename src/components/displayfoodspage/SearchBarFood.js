/*

this component is planned to filter out the food we are searching for in the food display pictures page

*/

function searchBarFood({ foods, setSearchResults }){
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {
        if(!e.target.value){
            return setSearchResults(foods);
        }

        const resultArray = foods.filter(foods => foods.title.includes(e.target.value) || foods.body.includes(e.target.value));

        setSearchResults(resultArray);
    }
    return(
        <form className="search" onSubmit={handleSubmit}>
            <input className="search__input" type="text" id="search" onChange={handleSearchChange}></input>
            <button className="search__button">Search</button>
        </form>
    )
}

export default searchBarFood;