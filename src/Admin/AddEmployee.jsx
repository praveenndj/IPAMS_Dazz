import React from "react";
import axios from 'axios';
import './/AddEmployee.css'
import NavibarAdmin from "./NavibarAdmin";
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function AddEmployee(){
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [e_id,setE_id] = useState();
    const [firstName,setfirstName] = useState();
    const [lastName,setlastName] = useState();
    const [age,setAge] = useState();
    const [designation,setDesignation] = useState();
    const [department,setDepartment] = useState();
    const [experiance,setExperiance] = useState();
    const [dateOfJoining,setDateOfJoining] = useState();
    const [address,setAddress] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Submit = (e) => {
            e.preventDefault();
            axios.post('https://localhost:3001/addemployee',{e_id,firstName,lastName,age,designation,department,experiance,dateOfJoining,address})
            .then( result =>{
                console.log(result)
                window.alert('Successfully added the employee')
                navigate('/addemployee')
            })
            .catch((err) => console.log(err))
    }
    return(
        <div className="employee-container">
        <NavibarAdmin/>
        <div className="employee-description">
             <div className="employee-description-content"><div><h2>Manage The Employees!</h2><p>Effortlessly oversee your team with the Employee page in our Admin Portal. View all employees at a glance, with essential details displayed in a user-friendly format. Add new team members seamlessly by entering their information through a straightforward interface. Streamline your administrative tasks and ensure efficient workforce management in just a few clicks!</p><> <Button variant="primary" onClick={handleShow}>
        Add a Employeee
      </Button>
       <form onSubmit={Submit}>
      <Modal size="lg"  show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{color:'white'}}>
          <Modal.Title>Add a Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <center>  
        <table>
             <tbody>
               <tr>
               <td><div className="input-box">
               <span>Employee ID</span>
               <input placeholder="Write here..." type="text" required="" className="form-control" onChange={(e)=>setE_id(e.target.value)}/>
               </div></td>
               <td><div className="input-box">
                <span>First name</span>
                <input placeholder="Write here..." type="text" required="" className="form-control" onChange={(e)=>setfirstName(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className="input-box">
               <span>Last Name</span>
               <input placeholder="Write here..." type="text" required="" className="form-control" onChange={(e)=>setlastName(e.target.value)}/>
               </div></td>
               <td><div className ="input-box">
               <span>Age</span>
                <input placeholder="Write here..." type="number" required="" className="form-control" onChange={(e)=>setAge(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className ="input-box">
               <span>Designation</span>
               <input placeholder="Write here..." type="text" required="" className="form-control" onChange={(e)=>setDesignation(e.target.value)}/>
               </div></td>
               <td><div className ="input-box">
               <span>Department</span>
                <input placeholder="Write here..." type="text" required="" className="form-control" onChange={(e)=>setDepartment(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className ="input-box">
               <span>Experiance</span>
               <input placeholder="Write here..." type="number" required="" className="form-control" onChange={(e)=>setExperiance(e.target.value)}/>
               </div></td>
               <td><div className ="input-box">
               <span>Date of Joining</span>
                <input placeholder="Write here..." type="date" required="" className="form-control" onChange={(e)=>setDateOfJoining(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <div className ="input-box">
                    <span>Address</span>
                    <textarea name="paragraph_text" cols="78" rows="4" className="form-control" onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    </td>
                </tr>
                
                </tbody>
                </table>
                </center>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button   className="btn btn-success" variant="secondary" onClick={handleClose}>
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal></form></></div></div>
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