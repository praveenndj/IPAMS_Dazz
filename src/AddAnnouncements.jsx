import React from "react";
import NavibarAdmin from "./NavibarAdmin";
import Table from 'react-bootstrap/Table';
export default function AddAnnouncements(){
    return(
        <div className="addannouncements-container">
            <NavibarAdmin/>
            <h2>All Announcements</h2>
            <div className="addannouncements">
               <Table striped border hover>
               <thead>
            <tr>
                <th>Announcement</th>
                <th>Announced Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Exciting Partnership Announcement</td>
                <td>[Date: January 10, 2023]</td>
            </tr>
            <tr>
                <td>We are thrilled to announce our strategic partnership with [ABC Solutions], enhancing our capabilities and delivering innovative solutions to our clients.</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>New Product Launch - [TechVista]</td>
                <td>[Date: February 22, 2023]</td>
            </tr>
            <tr>
                <td>Introducing [TechVista], our latest software solution designed to streamline workflows and provide an elevated user experience. Explore the features today!</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Upcoming Webinar on [Cutting-Edge Technologies]</td>
                <td>[Date: March 15, 2023]</td>
            </tr>
            <tr>
                <td>Save the date for our upcoming webinar on [Cutting-Edge Technologies]. Join industry experts on [March 15, 2023] as they share insights and best practices. Registration details coming soon!</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Employee Spotlight - [Samantha Johnson]</td>
                <td>[Date: April 5, 2023]</td>
            </tr>
            <tr>
                <td>Meet [Samantha Johnson], a valued team member recognized for outstanding contributions to [Project X]. Learn more about her expertise and achievements.</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Celebrating [10] Years of Success</td>
                <td>[Date: May 20, 2023]</td>
            </tr>
            <tr>
                <td>We are proud to celebrate [10] years of success and growth! Thanks to our clients, partners, and the dedicated team for making this journey remarkable.</td>
                <td>&nbsp;</td>
            </tr>
        </tbody>
                </Table> 
            </div>
        </div>
    );
}