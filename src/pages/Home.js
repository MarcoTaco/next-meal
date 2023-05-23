import React, { useState} from "react";
import "../styles/Home.css";

function Home(){
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchInputHandle = (event) => {
    setSearchValue(event.target.value);
  };

  const addHandle = () => {
    setSearchResults(prevResults => [...prevResults, searchValue]);
    setSearchValue('');
  };

  const searchHandle = () => {
    console.log("Searched ingredient was: " + searchResults);
    setSearchValue('');
  };

  const clearHandle = () => {
    setSearchResults([]);
  }

    return(
      <div className="home-page">
        <div className="first-section">
          <div className="introduction-verbiage">
            <h2>Welcome to Next Meal!</h2>
            <h3>Enter ingredients here, and add to start adding your list of ingredients!</h3>
          </div>
          <div className="search-food">
            <div className="search-food-buttons">
              {searchResults.length <= 8 && (
                <input className="ingredients-text-box" value={searchValue} onChange={searchInputHandle} type="text" placeholder="Enter your ingredients! (Max of 8 Ingredients)"/>)}
              {searchResults.length <= 8 && (<button className="button-home add" disabled={searchValue === ''}onClick={addHandle}>Add</button>) }
              {searchResults.length > 8 && (
                <input className="ingredients-text-box max" type="text" placeholder="Reached Max Ingredients" readOnly/>
              )}
              {searchResults.length > 0 && (<button className="button-home search" onClick={searchHandle}>Search</button>)}
              <button className="button-home clear" onClick={clearHandle}>Clear Filters</button>
            </div>
            <div className="list-ingredients">
              <ul>
                {searchResults.map((result, index) => (
                  <li className="search-results" key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
          {/*<p>this is all subject to change once i find my notes</p>*/}
        </div>
        <div className="second-section">
          <h3 className="second-section-header">Popular Foods Of The Day</h3>
          <div className="popular-foods">
            <div className="popular-food-arrows left">
              <div></div>
            </div>
            <div className="popular-food-item">
              <div className="popular-food-pic">
                    <div></div>
              </div>
              <div className="popular-food-name">
                <span>testing</span>
              </div>
            </div>
            <div className="popular-food-item">
              <div className="popular-food-pic">
                <div></div>
              </div>
              <div className="popular-food-name">
                <span>testing</span>
              </div>
            </div>
            <div className="popular-food-item">
              <div className="popular-food-pic">
                <div></div>
              </div>
              <div className="popular-food-name">
                <span>testing</span>
              </div>
            </div>
            <div className="popular-food-arrows right">
              <div></div>
            </div>
          </div>
          {/*<p>this is where the rotating foods are gonna be. it will be a random selection on a caraousel.</p>*/}
        </div>
        <div className="third-section">
          <p>this is i think where i put the about us or something. i have to check my notes.</p>
          <p>im just putting the notes here to structure how the page is going to look</p>
        </div>
      </div>
    );
};

export default Home;