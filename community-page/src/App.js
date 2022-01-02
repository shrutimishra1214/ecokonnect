import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    // BEM
    
    <div className="app">
      
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
