import React from "react";
import Navibar from "./Navibar";
import Footerpart from "./Footerpart";
function Dashboard(){
    return(
        <div>
            <Navibar/>
            <h1>Dashboard Page</h1>
            <Footerpart/>
        </div>
    );
}
export default Dashboard;