import React from "react";
import Navibar from "./Navibar";
import './/Profile.css'
function Profile(){
    return(
        <div>
            <Navibar/>
            <div className="profile-container">
                <form>
                <table>
                    <tr>
                        <td><fieldset><legend>First Name</legend><p className="p-content">Content</p></fieldset></td>
                        <td><fieldset><legend>Last Name</legend><p className="p-content">Content</p></fieldset></td>
                    </tr>
                    <tr>
                        <td><fieldset ><legend>First Name</legend><p className="p-content">Content</p></fieldset></td>
                        <td><fieldset><legend>Last Name</legend><p className="p-content">Content</p></fieldset></td>
                    </tr>
                    <tr>
                        <td><fieldset><legend>First Name</legend><p className="p-content">Content</p></fieldset></td>
                        <td><fieldset><legend>Last Name</legend><p className="p-content">Content</p></fieldset></td>
                    </tr>
                </table>
                </form>
            </div>
        </div>
    );
}
export default Profile;



