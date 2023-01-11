import React from "react";
import { useState } from "react";
import "./signup.css"
export default function SignUp() {

    const postData = async (event) => {
        event.preventDefault();
        var name, email, password, phone;
        var req = event.target;
        name = req.name.value;
        email = req.email.value;
        phone = req.phone.value;
        password = req.password.value;
        console.log(name);


        await fetch("http://localhost:4000/user", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"name":name,"email":email,"password":password,"phone":phone}),

        }).then((res) => {
            alert("User Registered Successfully")
        }).catch((err)=>{
           alert(err)
        })
    }
    return (
        <>

            <div className="signUp">
                <form onSubmit={postData} autoCapitalize="off" action="/"> <br />
                    <h3>Create Your New Account</h3>
                    <label htmlFor=""> <i className="fa fa-admin"></i> </label>
                    <input placeholder="Enter Your Name" type="text" name="name" />

                    <input placeholder="Enter your Phone " type="number" name="phone" />

                    <input placeholder="Enter Your Email" type="email" name="email" />


                    <input placeholder="Create Password" type="password" name="password" />


                    <input placeholder="Re-enter Password" type="password" name="cpassword" />
                    <br /> <br />
                    <button className="btn btn-outline-primary">Register</button>


                </form>
            </div>
        </>
    )
}