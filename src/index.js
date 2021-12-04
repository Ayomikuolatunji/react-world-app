import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from "react-router-dom";
import CountryApi from './components/Countries';
import "bootstrap/dist/js/bootstrap.bundle";

ReactDOM.render(
   <CountryApi>
    <Router>
      <App/>
    </Router>
   </CountryApi>,
    document.querySelector("#root")
)


