import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/NavBar";
import Home from "./pages/Home";
import IngredientsPage from './pages/IngredientPage';
import DisplayFoods from './pages/DisplayFoods';

function App(){
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<Home />} />
            <Route path="ingredients-page" element={<IngredientsPage />} />
            <Route path="food-display-page" element={<DisplayFoods />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;
