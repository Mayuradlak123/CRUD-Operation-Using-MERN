
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


export default function Home() {
  const[data,setData]=useState("");
const [check,setCheck] =useState(0);
function mydata(e){
 e.preventDefault()
      fetch('http://localhost:4000/register').then(async(res)=>{
       var User= await res.json();
       alert("API data Fetched Successfully");
       setCheck(1);
      await setData(User);
      User.map((e)=>{
          console.log(e.name,e.email);
      })
      // window.location.reload();
  })
}

function Delete(){
  var name=prompt("Enter your Name")
  fetch('http://localhost:4000/delete',{
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({"name":name}) ,
    method:"POST"
  }).then(()=>{
    alert("Deleted Successfully")
  })
}
  return (
    <div>Home Page
    
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
     
    </div>
  )
}
