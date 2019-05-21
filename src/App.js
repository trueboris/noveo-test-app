import React from "react";
import LoginButton from "./components/LoginButton";
import "./App.css";

const App = props => (
  <div className="container">
    <div className="card">
      <div className="card-body">
        <LoginButton />
      </div>
    </div>
  </div>
);

export default App;
