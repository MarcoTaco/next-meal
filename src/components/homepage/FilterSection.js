import React from "react";
import "../../styles/homepage/FilterSection.css";

function FilterSection() {
    return(
        <div className="filter-section">
            <div className="filter-list food-types-country">
                <h5>Regional Filtering</h5>
                <ul>
                    <li>American</li>
                    <li>Asian</li>
                    <li>Indian</li>
                    <li>Latin</li>
                </ul>
            </div>
            <div className="filter-list food-types">
                <h5>Other Filtering</h5>
                <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </div>
        </div>
    );
}

export default FilterSection;