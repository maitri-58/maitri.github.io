import Splash from "./pages/splash";
import Landing from "./pages/landing";
import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Splash />
        <Landing />
      </div>
    </BrowserRouter>
  );
}

export default App;
