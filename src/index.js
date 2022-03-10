import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./Component/Header/Header";
import Container from "./Component/Container/Container";

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Container />, document.getElementById("container"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
