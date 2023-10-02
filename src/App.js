import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Splash from "./pages/splash";
import Landing from "./pages/landing";
import "./assets/scss/style.scss";
import Work from "./pages/work";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapRef = useRef(null);
  return (
    <Router>
      <div className="app">
        <Splash />
        <Header
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          wrapRef={wrapRef}
        />
        <Routes>
          <Route
            path="/portfolio"
            exact
            element={
              <Landing wrapRef={wrapRef} setActiveIndex={setActiveIndex} />
            }
          ></Route>
          <Route path="/work" exact element={<Work />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
