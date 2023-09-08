import React from "react";
import "../styles/displayfoods/DisplayFoods.css"
import Layout from "../components/Layout";

function DisplayFoods(){
    return(
        <Layout>
            <div className="display-foods-main">
                <div className="display-foods header">
                    <h4>All Foods On Display</h4>
                </div>
                <div className="filter-and-food-section">
                    <div className="foods-filter-section">
                        
                    </div>
                    <div className="all-foods-section">

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DisplayFoods;