import React from "react";
import '..//Employee/ShowProjects.css'
import Navibar from "./Navibar";

export default function ShowProjects(){
    return(
    <div className="show-employee">
        <Navibar/>
         <div className="show-projects-container">
              <div><h2>Explore the Projects!</h2></div>
              <div><h5>Find the projects details here!</h5></div>
              <div><form className="search-form"><div class="input-box">
               <input  type="text" required=""/>
               <span>Project ID</span>
               </div>
               <div class="input-box">
               <input  type="text" required=""/>
               <span>Department</span>
               </div>
               <input type="submit" name="Search"/>
               </form></div>
         </div>
    </div>
    );
}