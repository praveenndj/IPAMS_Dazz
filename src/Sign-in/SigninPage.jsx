import React from "react";
import SigninNav from "./SigninNav";
import SignInForm from "./Signin-form";
export default function SigninPage(){
    return(
        <div style={{backgroundColor:"rgb(2,1,43)",height:"100vh"}}> 
            <SigninNav/>
            <SignInForm/>
        </div>
    );
}