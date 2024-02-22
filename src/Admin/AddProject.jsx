import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './/AddEmployee.css'
import NavibarAdmin from "./NavibarAdmin";
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function AddProject(){
    const [show, setShow] = useState(false);

    const [projects, setProjects] = useState([]);
    
    const [prj_id,setPrj_id] = useState();
    const [prjTitle,setprjTitle] = useState();
    const [prjClient,setprjClient] = useState();
    const [startDate,setstartDate] = useState();
    const [endDate,setendDate] = useState();
    const [teamSize,setteamSize] = useState();
    const [department,setDepartment] = useState();
    const [technologyUsed,settechnologyUsed] = useState();
    const [status,setStatus] = useState();
    const navigate = useNavigate();
    const handleCloseAdd = () => setShow(false);
    const handleShowAdd = () => setShow(true);
    
    useEffect(()=>{
        axios.get('https://ipams-backend.onrender.com/getproject')
            .then(result => setProjects(result.data))
            .catch(err => console.log(err))
       
    }, []);
    const handleSubmit = (e) => {
            e.preventDefault();
            axios.post('https://ipams-backend.onrender.com/addproject', {prj_id,prjTitle,prjClient,startDate,endDate,teamSize,department,technologyUsed,status})
            .then(() =>{
                window.location.reload();
            })
            .catch((err) => console.log(err));
    }
    
    const handleDelete = (id) => {
           axios.delete('https://ipams-backend.onrender.com/deleteproject/'+id)
           .then(() =>{
            alert("Deleted Successfully");
            window.location.reload();
        })
        .catch((err) => console.log(err))
    }
    return(
        <div className="employee-container" style={{height:'100vh'}}>
        <NavibarAdmin/>
        <div className="employee-description">
             <div className="employee-description-content"><div><h2>Efficiently handle Project!</h2><p>Get an instant overview of all ongoing and completed projects, including key details and statuses. Seamlessly add new projects by providing project names, client details, team assignments, and start/end dates. Simplify project administration, track progress, and ensure effective collaboration within Dazz.</p><> <Button variant="primary" onClick={handleShowAdd}>
        Add a Project
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
               <span>Project ID</span>
               <input placeholder="Write here..." type="text" required={true} className="form-control"  onChange={(e)=>setPrj_id(e.target.value)}/>
               </div></td>
               <td><div className="input-box">
                <span>Title</span>
                <input placeholder="Write here..." type="text" required={true} className="form-control" onChange={(e)=>setprjTitle(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className="input-box">
               <span>Client</span>
               <input placeholder="Write here..." type="text" required={true} className="form-control" onChange={(e)=>setprjClient(e.target.value)}/>
               </div></td>
               <td><div className ="input-box">
               <span>Start Date</span>
                <input placeholder="Write here..." type="date" required={true} className="form-control" onChange={(e)=>setstartDate(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className ="input-box">
               <span>End Date</span>
               <input placeholder="Write here..." type="date" required={true} className="form-control" onChange={(e)=>setendDate(e.target.value)}/>
               </div></td>
               <td><div className ="input-box">
               <span>Team Size</span>
                <input placeholder="Write here..." type="number" required={true} className="form-control" onChange={(e)=>setteamSize(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className ="input-box">
               <span>Department</span>
               <input placeholder="Write here..." type="text" required={true} className="form-control" onChange={(e)=>setDepartment(e.target.value)}/>
               </div></td>
               <td><div className ="input-box">
               <span>Technology Used</span>
                <input placeholder="Write here..." type="text" required={true} className="form-control" onChange={(e)=>settechnologyUsed(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <div className ="input-box">
                    <span>Status</span>
                    <input placeholder="Write here..." type="text" required={true} className="form-control" onChange={(e)=>setStatus(e.target.value)}/>
                    </div>
                    </td>
                </tr>
                
                </tbody>
                </table>
                <button class='btn btn-secondary' onClick={()=>handleCloseAdd()}>Cancel</button>&nbsp;&nbsp;
                <button type="submit" class='btn btn-success'>Add Project</button>
                
                </form>
                </center>
                
        </Modal.Body>
      </Modal></></div></div>
        </div>
        <div className="employee-description"><h2>All Projects</h2></div>
        
        
    <Table striped bordered hover className="employee-table" >
    <thead>
        <tr>
            <th>Project ID</th>
            <th>Title</th>
            <th>Client</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Team Size</th>
            <th>Department</th>
            <th>Technology Used</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
 
       {
        projects.map((project) => {
            return <tr>
                    <td>{project.prj_id}</td>
                    <td>{project.prjTitle}</td>
                    <td>{project.prjClient}</td>
                    <td>{project.startDate}</td>
                    <td>{project.endDate}</td>
                    <td>{project.teamSize}</td>
                    <td>{project.department}</td>
                    <td>{project.technologyUsed}</td>
                    <td>{project.status}</td>
                    <td><Link to={`/updateEmployee/${project._id}`}><button className="btn btn-success">Update</button></Link>
                    <button  className="btn btn-danger" onClick={(e)=>{handleDelete(project._id)}}>Delete</button></td>
                  </tr>
        })
       }

       
    </tbody>
</Table>
        </div>
    );
}