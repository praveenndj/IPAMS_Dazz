import React from "react";
import '../Employee/Announcements.css'
import Navibar from "./Navibar";
export default function Announcements(){
    return(
        <div className="announcements-page">
            <Navibar/>
            <h1 className="page-heading">Announcements</h1>
        <div className="announcements-container">
            <div className="announcement"><div><h4>Company Milestone Celebration</h4><h5>Dazz Software Solutions is proud to celebrate a significant milestone! Your dedication and hard work have contributed to our success. Join us for a celebration to acknowledge this achievement at Party Hall by 5.00pm sharply on 27 January 2024</h5><h6> Siva Subramaniyam, COO </h6><p>Jan 23,2024 10:32 am</p></div></div>
            <div className="announcement"><div><h4> Introduction of New Product Line</h4><h5>We are excited to announce the launch of our new product line that promises innovation and enhanced solutions for our clients.</h5><h6>Manikandan, CEO</h6><p>Jan 15,2024 02:42 pmm</p></div></div>
            <div className="announcement"><div><h4>Winter Break - Office Closure</h4><h5>In celebration of the winter season, Dazz Software Solutions will be closed for the upcoming winter break. We wish you all a joyful holiday season and look forward to reconnecting in the new year.</h5><h6>Rithika, HR Manager </h6><p>Dec 19,2023 12:32pm</p></div></div>
            <div className="announcement"><div><h4></h4><h5></h5><h6></h6></div></div>
        </div>
        </div>
    );
}