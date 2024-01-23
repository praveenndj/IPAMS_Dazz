import React from "react";
import './/NavibarAdmin.css'
import { Link } from "react-router-dom";
export default function NavibarAdmin(){
    return(
        <div className="navibar-admin">
            <div className="brand-name"><h6>DAZZ SOFTWARE SOLUTIONS</h6></div>
            <div className="navibar-admin-navigation">
                <Link to="/employee"><p>Employee</p></Link>
                <Link to="/department"><p>Department</p></Link>
                <Link to="/projects"><p>Projects</p></Link>
                <Link to="/report"><p>Report</p></Link>
                <Link to="/addannouncements"><p>Announcements</p></Link>
                <Link to="/editrequest"><p>Edit Requests</p></Link>
            </div>
            <div className="navibar-admin-buttons"></div>
        </div>
    );
}