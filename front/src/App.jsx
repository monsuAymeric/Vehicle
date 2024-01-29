import React from "react";
import "./index.css";
import Router from "./utils/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App container">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
