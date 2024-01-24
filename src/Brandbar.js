import React from "react";
import "./Brandbar.css";
import { Link } from "react-router-dom";
export default function Brandbar() {
  return (
      <div className="container-brandbar">
        <nav>
          <div>
            <div>
        <Link to="#">
          <h1 style={{color:'#12B1D1'}}>IPAMS</h1> 
        </Link></div>
        </div>
        </nav>
      </div>
  );
}



