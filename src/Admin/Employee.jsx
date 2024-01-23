import React from "react";
import './/Employee.css'
import NavibarAdmin from "./NavibarAdmin";
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Employee(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="employee-container">
        <NavibarAdmin/>
        <div className="employee-description">
             <div className="employee-description-content"><div><h2>Manage The Employees!</h2><p>Effortlessly oversee your team with the Employee page in our Admin Portal. View all employees at a glance, with essential details displayed in a user-friendly format. Add new team members seamlessly by entering their information through a straightforward interface. Streamline your administrative tasks and ensure efficient workforce management in just a few clicks!</p><> <Button variant="primary" onClick={handleShow}>
        Add a Employeee
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
        <div className="employee-description"><h2>All Employees</h2></div>
        <div className="employee-table">
           
    <Table striped bordered hover className="employee-table" >
    <thead>
        <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Date of Joining</th>
            <th>Experience</th>
            <th>DOB</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>Street Name</th>
            <th>City Name</th>
            <th>Remove</th>
        </tr>
    </thead>
    <tbody>
 
        <tr>
            <td>EMP001</td>
            <td>Aryan</td>
            <td>Kapoor</td>
            <td>Sales</td>
            <td>Sales Executive</td>
            <td>2020-03-15</td>
            <td>4 years</td>
            <td>1985-09-10</td>
            <td>39</td>
            <td>B+</td>
            <td>123 Main Street</td>
            <td>Mumbai</td>
            
            <td><button className="remove-button">Remove</button></td>
        </tr>

        <tr>
            <td>EMP002</td>
            <td>Priya</td>
            <td>Sharma</td>
            <td>HR</td>
            <td>HR Manager</td>
            <td>2018-06-20</td>
            <td>6 years</td>
            <td>1990-05-25</td>
            <td>32</td>
            <td>O-</td>
            <td>456 Park Avenue</td>
            <td>Delhi</td>
            
            <td><button className="remove-button">Remove</button></td>
        </tr>
        <tr>
            <td>EMP003</td>
            <td>Raj</td>
            <td>Verma</td>
            <td>IT</td>
            <td>Software Engineer</td>
            <td>2019-11-05</td>
            <td>3 years</td>
            <td>1993-12-15</td>
            <td>28</td>
            <td>AB+</td>
            <td>789 Tech Street</td>
            <td>Bangalore</td>
           
            <td><button className="remove-button">Remove</button></td>
        </tr>
        <tr>
            <td>EMP004</td>
            <td>Ananya</td>
            <td>Das</td>
            <td>Marketing</td>
            <td>Marketing Specialist</td>
            <td>2021-02-10</td>
            <td>2 years</td>
            <td>1995-08-03</td>
            <td>27</td>
            <td>A-</td>
            <td>101 Marketing Lane</td>
            <td>Kolkata</td>
           
            <td><button className="remove-button">Remove</button></td>
        </tr>
        <tr>
            <td>EMP005</td>
            <td>Arjun</td>
            <td>Joshi</td>
            <td>Finance</td>
            <td>Financial Analyst</td>
            <td>2022-04-18</td>
            <td>1 year</td>
            <td>1998-06-28</td>
            <td>23</td>
            <td>B-</td>
            <td>202 Finance Road</td>
            <td>Pune</td>
           
            <td><button className="remove-button">Remove</button></td>
        </tr>
        <tr>
            <td>EMP006</td>
            <td>Nisha</td>
            <td>Singh</td>
            <td>Operations</td>
            <td>Operations Coordinator</td>
            <td>2020-09-08</td>
            <td>3 years</td>
            <td>1987-04-12</td>
            <td>35</td>
            <td>O+</td>
            <td>303 Operations Lane</td>
            <td>Hyderabad</td>
            
            <td><button className="remove-button">Remove</button></td>
        </tr>
        <tr>
            <td>EMP007</td>
            <td>Varun</td>
            <td>Patel</td>
            <td>IT</td>
            <td>Systems Analyst</td>
            <td>2019-05-22</td>
            <td>3 years</td>
            <td>1992-11-20</td>
            <td>29</td>
            <td>AB-</td>
            <td>404 Tech Lane</td>
            <td>Ahmedabad</td>
            
            <td><button className="remove-button">Remove</button></td>
        </tr>
        <tr>
            <td>EMP008</td>
            <td>Meera</td>
            <td>Khanna</td>
            <td>Sales</td>
            <td>Sales Manager</td>
            <td>2017-07-14</td>
            <td>5 years</td>
            <td>1988-03-05</td>
            <td>34</td>
            <td>A+</td>
            <td>505 Sales Street</td>
            <td>Jaipur</td>
            
            <td><button className="remove-button">Remove</button></td>
        </tr>
        <tr>
            <td>EMP009</td>
            <td>Rohit</td>
            <td>Gupta</td>
            <td>HR</td>
            <td>HR Assistant</td>
            <td>2023-01-30</td>
            <td>1 year</td>
            <td>1997-07-18</td>
            <td>26</td>
            <td>B+</td>
            <td>606 HR Avenue</td>
            <td>Chandigarh</td>
            
            <td><button className="remove-button">Remove</button></td>
        </tr>
        <tr>
            <td>EMP010</td>
            <td>Neha</td>
            <td>Rajput</td>
            <td>Marketing</td>
            <td>Marketing Coordinator</td>
            <td>2022-08-12</td>
            <td>2 years</td>
            <td>1994-04-30</td>
            <td>28</td>
            <td>O-</td>
            <td>707 Marketing Lane</td>
            <td>Lucknow</td>
            
            <td><button className="remove-button">Remove</button></td>
        </tr>
    </tbody>
</Table>
        </div></div>
    );
}