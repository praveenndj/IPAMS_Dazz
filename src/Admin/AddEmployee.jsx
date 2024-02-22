import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './/AddEmployee.css'
import NavibarAdmin from "./NavibarAdmin";
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function AddEmployee(){
    const [show, setShow] = useState(false);

    const [employees, setEmployees] = useState([]);
    
    const [e_id,setE_id] = useState();
    const [firstName,setfirstName] = useState();
    const [lastName,setlastName] = useState();
    const [age,setAge] = useState();
    const [designation,setDesignation] = useState();
    const [department,setDepartment] = useState();
    const [experience,setExperience] = useState();
    const [dateOfJoining,setDateOfJoining] = useState();
    const [address,setAddress] = useState();
    const navigate = useNavigate();
    const handleCloseAdd = () => setShow(false);
    const handleShowAdd = () => setShow(true);
    
    useEffect(()=>{
        axios.get('https://ipams-backend.onrender.com/getemployee')
            .then(result => setEmployees(result.data))
            .catch(err => console.log(err))
       
    }, []);
    const handleSubmit = (e) => {
            e.preventDefault();
            axios.post('https://ipams-backend.onrender.com/addemployee', {e_id,firstName,lastName,age,designation,department,experience,dateOfJoining,address})
            .then(() =>{
                window.location.reload();
            })
            .catch((err) => console.log(err));
    }
    
    const handleDelete = (id) => {
           axios.delete('https://ipams-backend.onrender.com/deleteemployee/'+id)
           .then(() =>{
            alert("Deleted Successfully");
            window.location.reload();
        })
        .catch((err) => console.log(err))
    }
    return(
        <div className="employee-container">
        <NavibarAdmin/>
        <div className="employee-description">
             <div className="employee-description-content"><div><h2>Manage The Employees!</h2><p>Effortlessly oversee your team with the Employee page in our Admin Portal. View all employees at a glance, with essential details displayed in a user-friendly format. Add new team members seamlessly by entering their information through a straightforward interface. Streamline your administrative tasks and ensure efficient workforce management in just a few clicks!</p><> <Button variant="primary" onClick={handleShowAdd}>
        Add a Employeee
      </Button>
      
      <Modal size="lg"  show={show} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <center>  
        <form onSubmit={handleSubmit}>
        <table>
             <tbody>
               <tr>
               <td><div className="input-box">
               <span>Employee ID</span>
               <input placeholder="Write here..." type="text" required={true} className="form-control"  onChange={(e)=>setE_id(e.target.value)}/>
               </div></td>
               <td><div className="input-box">
                <span>First name</span>
                <input placeholder="Write here..." type="text" required={true} className="form-control" onChange={(e)=>setfirstName(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className="input-box">
               <span>Last Name</span>
               <input placeholder="Write here..." type="text" required={true} className="form-control" onChange={(e)=>setlastName(e.target.value)}/>
               </div></td>
               <td><div className ="input-box">
               <span>Age</span>
                <input placeholder="Write here..." type="number" required={true} className="form-control" onChange={(e)=>setAge(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className ="input-box">
               <span>Designation</span>
               <input placeholder="Write here..." type="text" required={true} className="form-control" onChange={(e)=>setDesignation(e.target.value)}/>
               </div></td>
               <td><div className ="input-box">
               <span>Department</span>
                <input placeholder="Write here..." type="text" required={true} className="form-control" onChange={(e)=>setDepartment(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className ="input-box">
               <span>Experiance</span>
               <input placeholder="Write here..." type="number" required={true} className="form-control" onChange={(e)=>setExperience(e.target.value)}/>
               </div></td>
               <td><div className ="input-box">
               <span>Date of Joining</span>
                <input placeholder="Write here..." type="date" required={true} className="form-control" onChange={(e)=>setDateOfJoining(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <div className ="input-box">
                    <span>Address</span>
                    <textarea name="paragraph_text" required={true} cols="78" rows="4" className="form-control" onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    </td>
                </tr>
                
                </tbody>
                </table>
                <button class='btn btn-secondary' onClick={()=>handleCloseAdd()}>Cancel</button>&nbsp;&nbsp;
                <button type="submit" class='btn btn-success'>Add Employee</button>
                
                </form>
                </center>
                
        </Modal.Body>
      </Modal></></div></div>
        </div>
        <div className="employee-description"><h2>All Employees</h2></div>
        
        
    <Table striped bordered hover className="employee-table" >
    <thead>
        <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Experience</th>
            <th>Date of Joining</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
 
       {
        employees.map((employee) => {
            return <tr>
                    <td>{employee.e_id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.age}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.department}</td>
                    <td>{employee.experience}</td>
                    <td>{employee.dateOfJoining}</td>
                    <td>{employee.address}</td>
                    <td><Link to={`/updateEmployee/${employee._id}`}><button className="btn btn-success">Update</button></Link>
                    <button  className="btn btn-danger" onClick={(e)=>{handleDelete(employee._id)}}>Delete</button></td>
                  </tr>
        })
       }

       
    </tbody>
</Table>
        </div>
    );
}