import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './/AddEmployee.css'
import NavibarAdmin from "./NavibarAdmin";
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function AddAnnouncement(){
    const [show, setShow] = useState(false);

    const [announcements, setAnnouncements] = useState([]);
    
    const [title,settitle] = useState();
    const [content,setContent] = useState();
    const [announcedBy,setannouncedBy] = useState();
    const [announcedDate,setannouncedDate] = useState();
    const [announcedTime,setannouncedTime] = useState();
    const navigate = useNavigate();
    const handleCloseAdd = () => setShow(false);
    const handleShowAdd = () => setShow(true);
    
    useEffect(()=>{
        axios.get('https://ipams-backend.onrender.com/getannouncement')
            .then(result => setAnnouncements(result.data))
            .catch(err => console.log(err))
       
    }, []);
    const handleSubmit = (e) => {
            e.preventDefault();
            axios.post('https://ipams-backend.onrender.com/addannouncement', {title,content,announcedBy,announcedDate,announcedTime})
            .then(() =>{
                window.location.reload();
            })
            .catch((err) => console.log(err));
    }
    
    const handleDelete = (id) => {
           axios.delete('https://ipams-backend.onrender.com/deleteannouncement/'+id)
           .then(() =>{
            alert("Deleted Successfully");
            window.location.reload();
        })
        .catch((err) => console.log(err))
    }
    return(
        <div className="announcement-container">
        <NavibarAdmin/>
        <div className="announcement-description">
             <div className="announcement-description-content"><div><h2>ManannouncedDate The announcements!</h2><p>Effortlessly oversee your team with the announcement pannouncedDate in our Admin Portal. View all announcements at a glance, with essential details displayed in a user-friendly format. Add new team members seamlessly by entering their information through a straightforward interface. Streamline your administrative tasks and ensure efficient workforce manannouncedDatement in just a few clicks!</p><> <Button variant="primary" onClick={handleShowAdd}>
        Add a announcemente
      </Button>
      
      <Modal size="lg"  show={show} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add a announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <center>  
        <form onSubmit={handleSubmit}>
        <table>
             <tbody>
               <tr>
               <td><div className="input-box">
               <span>Title</span>
               <input placeholder="Write here..." type="text" required={true} className="form-control"  onChange={(e)=>settitle(e.target.value)}/>
               </div></td>
               </tr>
               <tr>
               <td ><div className="input-box" style={{width:'100%'}}>
                <span>Content</span>
                <textarea   placeholder="Write here..." type="text" cols={10} rows={5} required={true} className="form-control" onChange={(e)=>setContent(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className="input-box">
               <span>Last Name</span>
               <input placeholder="Write here..." type="text" required={true} className="form-control" onChange={(e)=>setannouncedBy(e.target.value)}/>
               </div></td>
               <td><div className ="input-box">
               <span>announcedDate</span>
                <input placeholder="Write here..." type="number" required={true} className="form-control" onChange={(e)=>setannouncedDate(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className ="input-box">
               <span>announcedTime</span>
               <input placeholder="Write here..." type="text" required={true} className="form-control" onChange={(e)=>setannouncedTime(e.target.value)}/>
               </div></td>
                </tr>
                </tbody>
                </table>
                <button class='btn btn-secondary' onClick={()=>handleCloseAdd()}>Cancel</button>&nbsp;&nbsp;
                <button type="submit" class='btn btn-success'>Add announcement</button>
                
                </form>
                </center>
                
        </Modal.Body>
      </Modal></></div></div>
        </div>
        <div className="announcement-description"><h2>All announcements</h2></div>
        
        
    <Table striped bordered hover className="announcement-table" >
    <thead>
        <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Announced By</th>
            <th>Announced Date</th>
            <th>Announced Time</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
 
       {
        announcements.map((announcement) => {
            return <tr>
                    <td>{announcement.title}</td>
                    <td>{announcement.content}</td>
                    <td>{announcement.announcedBy}</td>
                    <td>{announcement.announcedDate}</td>
                    <td>{announcement.announcedTime}</td>
                    <td><Link to={`/updateannouncement/${announcement._id}`}><button className="btn btn-success">Update</button></Link>
                    <button  className="btn btn-danger" onClick={(e)=>{handleDelete(announcement._id)}}>Delete</button></td>
                  </tr>
        })
       } 
    </tbody>
</Table>
        </div>
    );
}