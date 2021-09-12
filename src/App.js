import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
import LandingPage from "./pages/LandingPages";
import Example from "pages/Example";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

import "./assets/scss/style.scss";


function App() {
  return (
    <>
      <Router>
        <Route exact  path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/example" component={Example} />

      </Router>

      {/* <ToastContainer></ToastContainer> */}
    </>
  );
}

export default App;
