import React from "react";
// import logo from "./logo.svg";
import "./App.scss";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Avatar from "./Avatar/Avatar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_body-container">
        <Avatar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>In progress!</h2>
      </div>
      <div className="footer_wrapper">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default App;
