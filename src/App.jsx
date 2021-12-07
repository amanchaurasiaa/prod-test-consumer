import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "header/Header"
const App = () => (
    <div>
        <Header />
        <div>Hi there, I'm Consumer App from Webpack 5.</div>
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
