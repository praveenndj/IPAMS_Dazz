import React from "react";
import './/Department.css'
import NavibarAdmin from "./NavibarAdmin";
export default function Department(){
    return(
        <div className="department-container">
            <NavibarAdmin/>
            <div >
            <table className="department-table">
              <thead>
        <tr>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Head of Department</th>
            <th>Number of Employees</th>
            <th>Location</th>
            <th>Projects</th>
        </tr>
                </thead>
    <tbody>
        <tr>
            <td>D001</td>
            <td>Development</td>
            <td>John Smith</td>
            <td>120</td>
            <td>Headquarters</td>
            <td>Project A, Project B</td>
        </tr>
        <tr>
            <td>D002</td>
            <td>Testing</td>
            <td>Mary Johnson</td>
            <td>80</td>
            <td>Branch Office 1</td>
            <td>Project C, Project D</td>
        </tr>
        <tr>
            <td>D003</td>
            <td>Quality Assurance</td>
            <td>Robert Davis</td>
            <td>90</td>
            <td>Branch Office 2</td>
            <td>Project E, Project F</td>
        </tr>
        <tr>
            <td>D004</td>
            <td>Research and Development</td>
            <td>Linda Wilson</td>
            <td>60</td>
            <td>Branch Office 3</td>
            <td>Project G, Project H</td>
        </tr>
        <tr>
            <td>D005</td>
            <td>Support and Maintenance</td>
            <td>Michael Brown</td>
            <td>50</td>
            <td>Branch Office 4</td>
            <td>Project I, Project J</td>
        </tr>
        <tr>
            <td>D006</td>
            <td>Product Management</td>
            <td>Amy Taylor</td>
            <td>40</td>
            <td>Branch Office 5</td>
            <td>Project K, Project L</td>
        </tr>
    </tbody>
</table>
            </div>
        </div>
    );
}