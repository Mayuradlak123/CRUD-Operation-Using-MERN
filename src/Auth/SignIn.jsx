import React from 'react'
// import "./signIn.css"
export default function SignIn() {
  return (
    <div>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <div className="login">
        <form action="/">
     <section className="vh-70" >
  <div className="container py-2 h-100" style={{marginTop:'50px'}}>
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" >
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>
            <p id='war' style={{color: 'red'}}></p>
            <div className="form-outline mb-4">
              <p id='ewar' style={{color:'red'}} className='float-left'> </p>
              <input type="email" name='email' id="email"  className="form-control form-control-lg" required/>
              <label className="form-label" htmlFor="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-4">
            <p id='pwar' style={{color:'red'}} className='float-left'> </p>
              <input type="password" name='pass'  minLength='6' id="pass" className="form-control form-control-lg" required />
              <label className="form-label" htmlFor="typePasswordX-2" >Password</label>
            </div>


           
            <a className="btn btn-primary btn-lg btn-block" href='/home' type="submit"  >Login</a>
            <br /> <br />
           <p> <strong> New user ? <a href='/register'>Register</a> </strong> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
   
        </div>
    </div>
  )
}
