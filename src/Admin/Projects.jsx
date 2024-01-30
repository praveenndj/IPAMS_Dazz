import React from "react";
import './/AddEmployee.css'
import NavibarAdmin from "./NavibarAdmin";
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Projects(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="employee-container">
        <NavibarAdmin/>
        <div className="employee-description">
             <div className="employee-description-content"><div><h2>Efficiently handle Project!</h2><p>Get an instant overview of all ongoing and completed projects, including key details and statuses. Seamlessly add new projects by providing project names, client details, team assignments, and start/end dates. Simplify project administration, track progress, and ensure effective collaboration within Dazz.</p><> <Button variant="primary" onClick={handleShow}>
        Add a Project
      </Button>
       
      <Modal size="lg"  show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{color:'white'}}>
          <Modal.Title>Add a Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table>
             <tbody>
               <tr>
               <td><div class="input-box">
               <input placeHolder="Write here..." type="text" required=""/>
               <span>First name</span>
               </div></td>
               <td><div class="input-box">
                <input placeHolder="Write here..." type="text" required=""/>
                <span>Last name</span>
                </div></td>
                </tr>
                <tr>
               <td><div class="input-box">
               <input placeHolder="Write here..." type="text" required=""/>
               <span>First name</span>
               </div></td>
               <td><div class="input-box">
                <input placeHolder="Write here..." type="text" required=""/>
                <span>First name</span>
                </div></td>
                </tr>
                <tr>
               <td><div class="input-box">
               <input placeHolder="Write here..." type="text" required=""/>
               <span>First name</span>
               </div></td>
               <td><div class="input-box">
                <input placeHolder="Write here..." type="text" required=""/>
                <span>First name</span>
                </div></td>
                </tr>
                <tr>
               <td><div class="input-box">
               <input placeHolder="Write here..." type="text" required=""/>
               <span>First name</span>
               </div></td>
               <td><div class="input-box">
                <input placeHolder="Write here..." type="text" required=""/>
                <span>First name</span>
                </div></td>
                </tr>
                <tr>
               <td><div class="input-box">
               <input placeHolder="Write here..." type="text" required=""/>
               <span>First name</span>
               </div></td>
               <td><div class="input-box">
                <input placeHolder="Write here..." type="text" required=""/>
                <span>First name</span>
                </div></td>
                </tr>
                <tr>
               <td><div class="input-box">
               <input placeHolder="Write here..." type="text" required=""/>
               <span>First name</span>
               </div></td>
               <td><div class="input-box">
                <input placeHolder="Write here..." type="text" required=""/>
                <span>First name</span>
                </div></td>
                </tr>
                </tbody></table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal></></div><div></div></div>
        </div>
        <div>
    <Table striped bordered hover >
        <thead>
            <tr>
                <th>Project Name</th>
                <th>Client</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Team Size</th>
                <th>Technologies Used</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>E-commerce Platform Enhancement</td>
                <td>MegaMart Inc.</td>
                <td>2023-02-15</td>
                <td>2023-08-30</td>
                <td>15</td>
                <td>Node.js, React, MongoDB</td>
                <td>In Progress</td>
            </tr>
            <tr>
                <td>Financial Analytics Dashboard</td>
                <td>FinanceCorp International</td>
                <td>2023-04-10</td>
                <td>2023-11-20</td>
                <td>12</td>
                <td>Python, Django, Vue.js</td>
                <td>Completed</td>
            </tr>
            <tr>
                <td>Mobile Banking App</td>
                <td>SecureBank Ltd.</td>
                <td>2023-06-05</td>
                <td>2023-12-15</td>
                <td>20</td>
                <td>Kotlin, Swift, Firebase</td>
                <td>QA Testing</td>
            </tr>
            <tr>
                <td>Inventory Management System</td>
                <td>TechSupply Chain</td>
                <td>2023-03-20</td>
                <td>2023-09-10</td>
                <td>10</td>
                <td>Java, Spring Boot, Angular</td>
                <td>On Hold</td>
            </tr>
            <tr>
                <td>Health and Wellness App</td>
                <td>Wellness Innovations</td>
                <td>2023-01-10</td>
                <td>2023-07-25</td>
                <td>18</td>
                <td>React Native, Node.js, MongoDB</td>
                <td>Completed</td>
            </tr>
            <tr>
                <td>Smart Home Automation System</td>
                <td>HomeTech Solutions</td>
                <td>2023-07-01</td>
                <td>2024-02-28</td>
                <td>14</td>
                <td>IoT, Python, Flask</td>
                <td>Development Phase</td>
            </tr>
            <tr>
                <td>Learning Management System</td>
                <td>EduTech Academy</td>
                <td>2023-05-15</td>
                <td>2023-11-05</td>
                <td>16</td>
                <td>Ruby on Rails, React, PostgreSQL</td>
                <td>Deployment Pending</td>
            </tr>
            <tr>
                <td>Social Media Analytics Tool</td>
                <td>InsightHub Networks</td>
                <td>2023-08-10</td>
                <td>2024-03-31</td>
                <td>22</td>
                <td>Python, Django, Vue.js</td>
                <td>Planning Phase</td>
            </tr>
            <tr>
                <td>Autonomous Drone Control System</td>
                <td>AeroTech Innovations</td>
                <td>2023-09-20</td>
                <td>2024-06-30</td>
                <td>25</td>
                <td>C++, ROS, Linux</td>
                <td>Research and Development</td>
            </tr>
            <tr>
                <td>Customer Relationship Management (CRM) System</td>
                <td>SalesPro Solutions</td>
                <td>2023-02-28</td>
                <td>2023-10-15</td>
                <td>12</td>
                <td>ASP.NET, Angular, SQL Server</td>
                <td>User Acceptance Testing</td>
            </tr>
            </tbody>
    </Table>
    </div>
    </div>); 
    }