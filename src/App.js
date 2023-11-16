import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/NavBar";
import Home from "./pages/Home";
import IngredientsPage from './pages/IngredientPage';
import FoodList from './pages/FoodList';

function App(){
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredients-page" element={<IngredientsPage />} />
          <Route path="/food-display-page" element={<FoodList />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
