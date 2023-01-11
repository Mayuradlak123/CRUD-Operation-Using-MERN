import React from 'react'
import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "../Auth/signup.css"
import { useNavigate } from 'react-router-dom'
export default function Adduser() {

   var Register =async(event)=>{
var data =event.target;
var name,email,password,username,phone;
name=data.name.value;
email =data.email.value;
password =data.password.value;
username=data.username.value;
phone=data.phone.value;
  await fetch ('http://localhost:4000/register',{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({name,email,password,username,phone})
  })
  console.log("Request Send Sucessfully");
  
 alert('User Registered Successsull')
   }
    
  return (
    <div>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
         <div className="signUp">
                <form  onSubmit={Register} action='/'> <br />
                    <h3>Add New User of Application</h3>
                    <label htmlFor=""> <i className="fa fa-admin"></i> </label>
                    <input placeholder="Enter Your Name" type="text" name="name" />
                    <input placeholder="Enter your Phone " type="number" name="phone"  />

                    <input placeholder="Enter Your Email" type="email" name="email" />


                    <input placeholder="Username" type="text" name="username" /> 

                    <input placeholder="Create Password" type="password" name="password" />
<br /> <br />
<button className='btn btn-outline-primary'> Register</button>
{/* <Button variant='contained' color='primary' sx={{borderRadius:8}}  >Register</Button> */}
                </form>
            </div>
        
    </div>
  )
}
