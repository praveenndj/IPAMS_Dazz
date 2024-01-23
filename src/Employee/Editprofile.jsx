import React,{useEffect} from "react";
import AOS from "aos";
import Navibar from "../Employee/Navibar";
import './/EditProfile.css'
export default function Editprofile(){
    useEffect(() => {
        AOS.init({ duration: 3000,delay:100 });
      }, []);
    return(
        <div>
            <Navibar/>
            <div className="editprofile">
            <div className="editprofile-heading"><h2>Edit Profile</h2><p>Welcome to the Edit Profile page! Here, you can request changes to your profile by filling out the form below. Simply state the reason for the edit, provide the updated details, and submit your request to the admin. Thank you for keeping your information current!</p></div>
            <form>
            <div className="request-form"><table><tr><td><div class="input-box">
               <input  type="text" required=""/>
               <span>Employee ID</span>
               </div></td><td><div class="input-box">
               <input  type="text" required=""/>
               <span>Name</span>
               </div></td></tr>
               <tr><td colSpan={2} rowSpan={2} class="input-box">
               <textarea id="paragraphInput" name="paragraph" rows="4" cols="65" style={{backgroundColor:'rgb(2,1,43)'}}/>
               <span>Reason for editing</span>
               </td></tr></table></div>
            <div className="editprofiletable-container"  data-aos='fade-in'>
            <table>
             <tbody>
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
            </div>
            <div></div>
            </form>
            </div>
        </div>
    );
}