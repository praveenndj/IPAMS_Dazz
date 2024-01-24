import React from "react";
import Navibar from "./Navibar";
import './/Help.css'
export default function Help(){
    return(
        <div>
            <Navibar/>
            <div className="help-container"><h1>Help</h1>
                  <table className="help-container-table">
                    <tr><td><h3>1. How to reset your password?</h3><h4>Reset Password:</h4>

<p>This feature ensures a seamless and secure process for updating your account password. Follow these steps:</p>

<ol>
    <li><strong>Initiate Reset:</strong><br/>
        Click on the "Reset Password" button on the Settings to start the process. This action signals your intent to enhance the security of your account.
    </li>
    
    <li><strong>Current Password Verification:</strong><br/>
        To proceed, you will be prompted to enter your current password. This serves as an additional layer of verification, ensuring that only authorized users can make changes to the account.
    </li>
    
    <li><strong>Set a New Password:</strong><br/>
        After successfully verifying your current password, you will be granted access to set a new password for your account. Choose a strong and unique combination of characters for increased security.
    </li>
    
    <li><strong>Confirmation:</strong><br/>
        Once you've set the new password, you'll receive a confirmation message, assuring you that the update was successful.
    </li>
</ol>

<p>Remember, maintaining a secure password is vital for protecting your account. Ensure your new password includes a mix of uppercase and lowercase letters, numbers, and special characters.</p>

<p>If you encounter any issues or have questions during this process, feel free to reach out to our support team for assistance. Your account's safety is our top priority.</p>
</td></tr>
<tr><td><h3>2. How to edit the profile?</h3><h4>Edit Profile:</h4>

<p>Request updates to your profile by submitting correct details through the provided form. The admin will process your request for accurate and timely profile modifications.</p>

<ol>
    <li><strong>Click "Edit Profile":</strong><br/>
        Initiate the profile editing process by clicking on the "Edit Profile" option found in Settings page.
    </li>
    
    <li><strong>Request Submission:</strong><br/>
        A form will be presented to you, allowing you to submit the correct details you wish to update in your profile.
    </li>
    
    <li><strong>Admin Review:</strong><br/>
        Upon submission, the details will be sent to the admin for review. The admin will process your request and make the necessary profile modifications.
    </li>
    
    <li><strong>Confirmation:</strong><br/>
        You will receive a confirmation once the admin has successfully updated your profile with the provided details.
    </li>
</ol>

<p>Ensuring the accuracy of the information you submit is crucial for prompt updates to your profile. If you have any questions or encounter issues during this process, feel free to contact our support team for assistance.</p>
</td></tr>
<tr><td><h3>3. Explore Announcements section!</h3><ul>
    <li>Stay in the loop with Dazz Analysis Tool's Announcement Section, your destination for critical company updates and insights.</li>
    
    <li>Engage with our dynamic public forum to discuss product releases, milestones, and industry trends.</li>
    
    <li>We value transparency, ensuring you're informed about the latest developments shaping our platform.</li>
    
    <li>Explore the Announcement Section to connect, learn, and stay informed with the heartbeat of Dazz Analysis Tool.</li>
</ul></td></tr>
<tr><td><h3>4. Data Insightful Dashboard Corner!</h3><ul>
    <li>Explore insightful data visualizations in our Dashboard Section, offering a user-friendly interface for data analysis.</li>
    
    <li>Effortlessly visualize key metrics with separate dashboards dedicated to Employee Analysis and Department Analysis.</li>
    
    <li>Unlock the power of reports published in the Dashboard Section, providing comprehensive insights into employee and departmental performance.</li>
    
    <li>Navigate through intuitive charts and graphs to make informed decisions, track trends, and drive strategic planning.</li>
    
    <li>Experience the convenience of centralized data representation, making data-driven decision-making a seamless and efficient process.</li>
</ul>
</td></tr>
                  </table>
            </div>
        </div>
    );
}