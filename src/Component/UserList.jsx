import React,{useState,useEffect} from 'react'
import axios from 'axios';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';
import Delete from '@mui/icons-material/Delete'
function UserList() {

    const [data,setData]=useState([]);
    const [id,setId]=useState(1);
    useEffect(()=>{
      getData();
    },[])
   var  getData=(async()=>{
      try{
     var Response =await axios.get('http://localhost:4000/read');
    setData(Response.data);
console.log(Response);
      }
      catch (err){
   console.warn("Somthing Went Wrong ");
      }
    })
const deleteUser =async(id)=>{
  // var c=confirm("You want to Delete User");
  
    await fetch(`http://localhost:4000/delete/${id}`,{
      method:'delete',
    }).then(()=>{
      alert("Deleted Successfully")
      window.location.reload();
    })
  
  }

  return (
    <div>  
      
      <h3 className='text-center mt-2'> Application User DashBoard </h3>
      <div>
      {/* <button className='btn btn-info float-right' onClick={getData}>Fetch</button> 
      <button className='btn btn-primary' onClick={Refresh}>Refresh</button> */}
      </div>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
       <table className="table bg-success text-white mt-3 " style={{margin:"auto"}}>
  <thead>
    <tr className=''>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col"> <EmailIcon/> Email ID</th>
      <th scope="col"> <CallIcon/> Phone</th>
      <th scope='col'> <PersonIcon/> Username</th>
       <th> <EditIcon/> Edit</th>
       <th> <Delete/> Delete</th>
    </tr>
  </thead>
  <tbody>
   
    {
     
      data.map((event)=>{
    
    return(
   
      <tr className='bg-light text-dark'>
      <th scope="row"> {event._id} </th>
      <td> {event.name} </td>
      <td> {event.email} </td>
      <td> {event.phone} </td>
      <td> {event.username} </td>
      <td>  <Button variant='contained' size='small' href={`/update/${event._id}`} >Edit</Button>  </td>
      <td>  <Button variant='contained' color='error'   size='small' onClick={()=>deleteUser(event._id)} >Delete</Button>  </td>
      
    </tr>
    
    )
 
      })
    
    }
    </tbody>
</table>
    </div>
  )
}

export default UserList;