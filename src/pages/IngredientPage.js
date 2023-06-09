import React, { useState } from "react";
import "../styles/ingredientspage/ingredientspage.css";

function IngredientsPage() {
    const [ingredients, setIngredients] = useState([]);

    // i will use this spot to fetch api stuff to populate this page. 
    // im just working on the boilerplate/template part of it for now

    return(
        <div className="ingredients-page">
            <div className="food-picture-section">
                <div></div>
            </div>
            <div className="ingredients-section">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur massa id eros aliquam fermentum. 
                    Nulla pulvinar ipsum a elit sagittis tincidunt. Fusce in metus a enim facilisis rutrum. Nullam tristique mauris et 
                    enim ultricies cursus. Vivamus finibus semper massa, id rutrum elit luctus ac. Sed iaculis neque eu mi maximus, sit 
                    amet euismod dolor varius. Nulla facilisi. Cras suscipit quam vitae nunc tristique, non varius risus tempor.
                    Maecenas ullamcorper rutrum odio, non pulvinar nisl mollis a. Suspendisse ultricies, ex ac sollicitudin luctus, tortor 
                    augue finibus dolor, a finibus sapien felis ac nunc. Sed consequat euismod mi, sed malesuada neque finibus vel. Sed 
                    facilisis quam in malesuada lobortis. Duis consectetur rutrum est, ut sagittis risus consequat sed. Sed bibendum libero 
                    et finibus egestas. Curabitur sodales, mauris eu dapibus efficitur, sapien elit varius nisi, ut gravida lorem sapien eu 
                    ex. Integer commodo sollicitudin justo in ullamcorper. Suspendisse in consequat enim. Sed quis risus cursus, venenatis 
                    sapien et, tincidunt justo. Mauris suscipit sem ante, id fringilla orci finibus sed. Morbi ut condimentum urna. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam non nisl a 
                    ipsum consectetur rhoncus sit amet vitae felis. Mauris ultrices pretium malesuada. Aliquam tristique nunc ut sem 
                    consectetur, eget fringilla risus tincidunt. In aliquet justo lacus, eu hendrerit mi maximus sed. Quisque bibendum 
                    orci sit amet feugiat mollis. Praesent bibendum felis non ligula posuere, in malesuada quam eleifend. Morbi blandit 
                    lacus purus, et interdum neque pharetra a. Nulla facilisi. Integer et nisl sed tellus varius dignissim. Fusce a tellus 
                    nisl. Nulla facilisi. Curabitur dignissim rhoncus dui ac dapibus. Nulla et nibh eleifend, scelerisque nisl id, hendrerit 
                    ligula. Morbi eget aliquet lacus, at iaculis neque. Cras ut ultricies tortor, at tincidunt purus. Etiam ullamcorper 
                    nulla at quam suscipit, nec efficitur ex congue. Phasellus fringilla, leo id viverra commodo, justo leo interdum dui, 
                    et faucibus nulla risus vitae lorem. Proin ac ultricies est, vitae rhoncus enim. Fusce eget ipsum quis lectus ultricies 
                    venenatis id non metus. Nam eleifend elit et ipsum ultrices, id pulvinar dui bibendum. Vestibulum pellentesque rhoncus 
                    tellus. Etiam in tincidunt ligula. In hac habitasse platea dictumst. Ut tempor eu diam a tempus.
                </p>     
            </div>
            <div className="last-section">
                <div className="have-section">
                    <h4>What You Have:</h4>
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
                <div className="need-section">
                    <h4>What You Need:</h4>
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default IngredientsPage;