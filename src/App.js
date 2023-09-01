import React from 'react';
import Navbar from "./components/navigation/NavBar";
import Home from "./pages/Home";
import FooterBar from "./components/footer/FooterBar";
import IngredientsPage from './pages/IngredientPage';
import DisplayFoods from './pages/DisplayFoods';

function App(){
  return (
    <React.Fragment>
      <Navbar />
      {/*<Home />*/}
      {/*<IngredientsPage />*/}
      <DisplayFoods />
      <FooterBar />
    </React.Fragment>
  );
}
export default App;
