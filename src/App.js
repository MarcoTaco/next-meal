import React from 'react';
import Navbar from "./components/navigation/NavBar";
import Home from "./pages/Home";

function App(){
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
}
export default App;
