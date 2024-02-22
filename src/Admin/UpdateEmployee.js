import React,{useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './/Update.css'
export default function UpdateEmployee(){
    const {id} = useParams();
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


    useEffect(()=>{
        axios.get('https://ipams-backend.onrender.com/getemployeeById/'+id)
            .then(result => {console.log(result)
                setE_id(result.data.e_id);
                setfirstName(result.data.firstName);
                setlastName(result.data.lastName);
                setAge(result.data.age);
                setDesignation(result.data.designation);
                setDepartment(result.data.department);
                setExperience(result.data.experience);
                setDateOfJoining(result.data.dateOfJoining);
                setAddress(result.data.address);
            })
            .catch(err => console.log(err))
       
    }, []);

    const Update = (e) =>{
        e.preventDefault();
        axios.put('https://ipams-backend.onrender.com/updateemployee/'+id, {e_id,firstName,lastName,age,designation,department,experience,dateOfJoining,address})
        .then(() =>{
            alert("Updated Successfully");
            navigate("/addemployee");
        })
        .catch((err) => console.log(err))
    }
    return(
        <div>
            <div className="update-container">
            <form onSubmit={Update}>
        <table>
             <tbody>
               <tr>
               <td><div className="input-box">
               <span>Employee ID</span>
               <input placeholder="Write here..." type="text" required={true} className="form-control"  value={e_id} onChange={(e)=>setE_id(e.target.value)}/>
               </div></td>
               <td><div className="input-box">
                <span>First name</span>
                <input placeholder="Write here..." type="text" required={true} className="form-control" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className="input-box">
               <span>Last Name</span>
               <input placeholder="Write here..." type="text" required={true} className="form-control" onChange={(e)=>setlastName(e.target.value)} value={lastName} />
               </div></td>
               <td><div className ="input-box">
               <span>Age</span>
                <input placeholder="Write here..." type="number" required={true} className="form-control" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className ="input-box">
               <span>Designation</span>
               <input placeholder="Write here..." type="text" required={true} className="form-control" value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
               </div></td>
               <td><div className ="input-box">
               <span>Department</span>
                <input placeholder="Write here..." type="text" required={true} className="form-control" value={department} onChange={(e)=>setDepartment(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
               <td><div className ="input-box">
               <span>Experiance</span>
               <input placeholder="Write here..." type="number" required={true} className="form-control" value={experience} onChange={(e)=>setExperience(e.target.value)}/>
               </div></td>
               <td><div className ="input-box">
               <span>Date of Joining</span>
                <input placeholder="Write here..." type="text" required={true} className="form-control" value={dateOfJoining} onChange={(e)=>setDateOfJoining(e.target.value)}/>
                </div></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <div className ="input-box">
                    <span>Address</span>
                    <textarea type="paragraph_text" required={true} cols="78" rows="4" className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    </td>
                </tr>
                
                </tbody>
                </table>
                <button class='btn btn-secondary' >Cancel</button>&nbsp;&nbsp;
                <button type="submit" class='btn btn-success'>Update Employee</button>
                
                </form>

            </div>
        </div>
    );
}