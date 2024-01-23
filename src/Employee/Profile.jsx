import React from "react";
import '../Employee/Profile.css'
import Navibar from "./Navibar";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Profile(){
    return(
        <div className="profilepage">
        <Navibar/>
        <div className="profile-container">
        <div className="profile-card">
        <MDBCard className="mb-4" style={{backgroundColor:'rgb(2,1,43)'}}>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <div style={{color:'white'}}><h2>Welcome Praveenn!</h2></div>
                <div style={{color:'white'}}><h5>What's up?, Explore your profile details<br/>Sit back, relax, and enjoy!</h5></div>
                
              </MDBCardBody>
            </MDBCard>
        </div>
        <div className="table-container">
        <table>
    <tbody>
      <tr>
        <td><div class="inputBox">
          <input placeHolder="Write here..." type="text" required=""/>
          <span>First name</span>
          </div></td>
        <td><div class="inputBox">
          <input placeHolder="Write here..." type="text" required=""/>
          <span>First name</span>
          </div></td>
     </tr>
     <tr>
        <td><div class="inputBox">
          <input placeHolder="Write here..." type="text" required=""/>
          <span>First name</span>
          </div></td>
        <td><div class="inputBox">
          <input placeHolder="Write here..." type="text" required=""/>
          <span>First name</span>
          </div></td>
     </tr>
     <tr>
        <td><div class="inputBox">
          <input placeHolder="Write here..." type="text" required=""/>
          <span>First name</span>
          </div></td>
        <td><div class="inputBox">
          <input placeHolder="Write here..." type="text" required=""/>
          <span>First name</span>
          </div></td>
     </tr>
     <tr>
        <td><div class="inputBox">
          <input placeHolder="Write here..." type="text" required=""/>
          <span>First name</span>
          </div></td>
        <td><div class="inputBox">
          <input placeHolder="Write here..." type="text" required=""/>
          <span>First name</span>
          </div></td>
     </tr>
     <tr>
        <td><div class="inputBox">
          <input placeHolder="Write here..." type="text" required=""/>
          <span>First name</span>
          </div></td>
        <td><div class="inputBox">
          <input placeHolder="Write here..." type="text" required=""/>
          <span>First name</span>
          </div></td>
     </tr>
     <tr>
        <td><div class="inputBox">
          <input placeHolder="Write here..." type="text" required=""/>
          <span>First name</span>
          </div></td>
        <td><div class="inputBox">
          <input placeHolder="Write here..." type="text" required=""/>
          <span>First name</span>
          </div></td>
     </tr>
     <tr><td colSpan={2}><p>*For editing profile, go profile and make a request</p></td></tr>
    </tbody>
  </table>
</div>
</div>
</div>
    );
}