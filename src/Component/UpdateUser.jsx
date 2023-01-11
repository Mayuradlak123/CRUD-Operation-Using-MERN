import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import Input from '@mui/material/Input';
// 
import Box from '@mui/material/Box';
export default function UpdateUser() {
    const {id}=useParams();
    const [user,setUser]=useState([]);
    var name,email,username,phone;

    // alert(id)
console.log(id);
    useEffect(()=>{

      loadUserData();
    },[])
    var loadUserData=async()=>{
    // const response =await 
     
    var response= await axios.get(`http://localhost:4000/user/${id}`)
   setUser(response.data)
   console.log(response.data);

    }
var valueChange=(e)=>{
  setUser({...user,[e.target.value]: [e.target.value]})
}
   const updateData=async(e)=>{
    
     var data,name,email,username,phone;
     data=e.target;
     name=data.name.value;
     email=data.email.value;
     username=data.username.value;
     phone=data.phone.value;
    //  alert(name)
    //  alert("Request in Processing",name,email)
    await fetch('http://localhost:4000/edit',{
        method:"PUT",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({id,name,email,username,phone})
    }).then((res)=>{
        alert("Updated Successfully");
    })
   alert(name)
   } 
  return (

    <div>
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
         <div className="signUp">
                <form    onSubmit={updateData} action='/'> <br />
                    <h3>Update your Details</h3>

{user.map((data)=>{ return(                 
        <div>             
                    <input onChange={(e)=>{e.target.value}}  placeholder="Enter Your Name" type="text" name="name"  defaultValue={data.name} />
                    <input onChange={(e)=>{e.target.value}} placeholder="Enter your Phone " type="number" name="phone" defaultValue={data.phone}  /> 

                   <input onChange={(e)=>{e.target.value}}  placeholder="Enter Your Email" type="email" name="email" defaultValue={data.email}  /> 


             <input onChange={(e)=>{e.target.value}} placeholder="Username" type="text" name="username" defaultValue={data.username} />  

<br /> <br />
<button className='btn btn-outline-success'>update</button>
{/* <Button color='success' variant='contained' href='/home' > Update</Button> */}
</div>
)})}
                </form>
            </div>
       
    </div>
  )
}
