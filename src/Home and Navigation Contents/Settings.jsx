import React from "react";
import Navibar from "./Navibar";
import './/Settings.css'
export default function Settings(){
    return(
        <div>
            <Navibar/>
            <div className="settings-container">
                   <h1>Settings</h1>
                   <table className="settings-container-table">
                    <tr className="settings-container-table-row"><td><h3><svg xmlns="http://www.w3.org/2000/svg" width="29" height="24" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/></svg>Reset Password</h3><p>Safely regain access to your account by initiating a secure password reset process. Verify your identity by entering your current password and proceed to set a new secure password for your account. Click the reset button to initiate the process.</p><a href='/verifypassword'>Reset Password</a></td></tr>
                    <tr className="settings-container-table-row"><td><h3><svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>&nbsp;Edit Profile</h3><p>Request updates to your profile by submitting correct details through the provided form. The admin will process your request for accurate and timely profile modifications. Ensure accurate information in the request form for prompt updates.</p><a href='/editprofile'>Edit Profile</a></td></tr>
                    </table>  
            </div>
        </div>
    );
}