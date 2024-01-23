import React from "react";
import '..//Employee/ShowEmployee.css'
import Navibar from "./Navibar";

export default function ShowEmployee(){
    return(
    <div className="show-employee">
        <Navibar/>
         <div className="show-employee-container">
              <div><h2>Locate a Employee!</h2></div>
              <div><h5>Locate any Employee by entering the Employee ID or Department they belong too!</h5></div>
              <div><form className="search-form"><div class="input-box">
               <input  type="text" required=""/>
               <span>Employee ID</span>
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