import React from 'react';
import Navbar from "./components/navigation/NavBar";
import Home from "./pages/Home";
import FooterBar from "./components/footer/FooterBar";

function App(){
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <FooterBar />
    </React.Fragment>
  );
}
export default App;
