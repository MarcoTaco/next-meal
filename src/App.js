import React from 'react';
import Navbar from "./components/navigation/NavBar";
import Home from "./pages/Home";
import FooterBar from "./components/footer/FooterBar";
import IngredientsPage from './pages/IngredientPage';

function App(){
  return (
    <React.Fragment>
      <Navbar />
      {/*<Home />*/}
      <IngredientsPage />
      <FooterBar />
    </React.Fragment>
  );
}
export default App;
