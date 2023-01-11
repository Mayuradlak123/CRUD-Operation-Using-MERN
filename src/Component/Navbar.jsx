import React from 'react';
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button';
export default function Navbar() {
  return (
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6">
<li className='nav-item'>
<HomeIcon fontSize='small' />
</li>
        <li className="nav-item ">
          <a href="/" className="nav-link active" aria-current="page" >Home</a>  
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link active" aria-current="page" >Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="/adduser" className="nav-link active" aria-current="page">AddUser</a>
        </li>
       <li className='nav-item'>
        <a href="/contact" className='nav-link active'>Contact </a>
       </li>
      </ul>
     
    </div>
    <a className='btn btn-outline-primary' href='/login'>Login</a> &nbsp; &nbsp;
    <a className='btn btn-outline-success' href='/register'>Register</a>
    
  </div>
</nav>
    </div>
  )
}
