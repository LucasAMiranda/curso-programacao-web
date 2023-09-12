import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import { StateProvider } from "./StateProvider";
import reducer from "./reducer";

function App() {
  return (
    <Router>
      <div className="App">
        <StateProvider reducer={reducer}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </StateProvider>
      </div>
    </Router>
  );
}

export default App;
