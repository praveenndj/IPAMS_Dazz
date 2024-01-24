import React from "react";
import './/NavibarAdmin.css'
export default function NavibarAdmin(){
    return(
        <div className="navibar-admin">
            <div className="brand-name"><h6>DAZZ SOFTWARE SOLUTIONS</h6></div>
            <div className="navibar-admin-navigation">
                <a href="/employee"><p>Employee</p></a>
                <a href="/department"><p>Department</p></a>
                <a href="/projects"><p>Projects</p></a>
                <a href="/report"><p>Report</p></a>
                <a href="/addannouncements"><p>Announcements</p></a>
                <a href="/editrequest"><p>Edit Requests</p></a>
            </div>
            <div className="navibar-admin-buttons"></div>
        </div>
    );
}