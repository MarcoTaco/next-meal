import React from "react";
import "../styles/Home.css";

function Home(){
    return(
      <div className="home-page">
        <div className="first-section">
          <div className="introduction-verbiage">
            <h2>Welcome to Next Meal!</h2>
            <h3>Enter ingredients here, and click enter to start adding your list of ingredients!</h3>
          </div>
          <div className="search-food">
            <input className="ingredients-text-box" type="text" placeholder="Enter your ingredients!"/>
            <button className="search-button">Search</button>
          </div>
          {/*<p>this is all subject to change once i find my notes</p>*/}
        </div>
        <div className="second-section">
          <p>this is where the rotating foods are gonna be. it will be a random selection on a caraousel.</p>
        </div>
        <div className="third-section">
          <p>this is i think where i put the about us or something. i have to check my notes.</p>
          <p>im just putting the notes here to structure how the page is going to look</p>
        </div>
      </div>
    );
};

export default Home;