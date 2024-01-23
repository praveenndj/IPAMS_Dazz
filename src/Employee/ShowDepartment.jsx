import React from "react";
import '..//Employee/ShowDepartment.css'
import Navibar from "./Navibar";

export default function ShowDepartment(){
    return(
        <div className="show-department">
        <Navibar/>
         <div className="show-department-container">
              <div><h2>Explore the departments!</h2></div>
              <div><h5>Find any department details </h5></div>
              <div><form className="search-form"><div class="input-box">
               <input  type="text" required=""/>
               <span>Department Name</span>
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