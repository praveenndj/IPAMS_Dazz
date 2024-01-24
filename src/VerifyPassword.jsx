import React from "react";
import './/VerifyPassword.css';
export default function VerifyPassword() {
    return(
        <div>
            <div>
                <div className="go-back"><a href='/settings'><svg  xmlns="http://www.w3.org/2000/svg" fill="currentColor"  width="50" height="50" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100" xmlSpace="preserve"><path d="M64.916,84.833c-1.279,0-2.56-0.488-3.535-1.465L28.013,50l33.368-33.369c1.951-1.952,5.119-1.952,7.07,0  c1.953,1.953,1.953,5.119,0,7.071L42.155,50l26.296,26.298c1.953,1.952,1.953,5.118,0,7.07  C67.476,84.345,66.195,84.833,64.916,84.833z"/></svg></a></div>
                <div className="animated-text-container">
                <div className="animated-text-verification"><h5>Verify your currrent password</h5></div></div>
                <div className="password-verification">
    <div className="form-containner">              
    <form class="form-verification">
       <p class="form-title">Enter your credencials</p>
        <div class="input-container">
          <input placeholder="Enter username" type="text"/>
          
      </div>
      <div class="input-container">
          <input placeholder="Enter password" type="password"/>

          
        </div>
         <button class="submit" type="submit">
        <a href='/resetPassword'>Verify</a>
      </button>
   </form>
   </div>
                </div>

            </div>
        </div>
    );
}