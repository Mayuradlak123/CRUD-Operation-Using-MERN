import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

export default function Footer() {
    var style ={
        "position": "fixed",
        "left": "0",
        "bottom": "0",
        "width": "100%"
    }
  return (
    <div>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <footer className="text-center text-white bg-dark "  >
 {/* <div className="container pt-4 text-white">
    <section className="mb-4">
        <Stack sx={{fontSize:40,marginLeft:20,textAlign:'center'}} direction='row' spacing={4} > 
     <FacebookIcon color='primary' fontSize='large' />
     <TwitterIcon  color='primary' fontSize='large'/>
     <LinkedInIcon color='primary' fontSize='large' />
     <GithubIcon  color='secondary' fontSize='large'/>
     <InstagramIcon fontSize='large' color='secondary' />
     </Stack>
    </section>
  </div>
  
  <div className="text-center text-dark p-3" >
    © 2023 Copyright:
  </div>
  */}
  <div className="d-flex flex-column bg-dark fixed-bottum">

    

  
<footer className="w-100 py-4 flex-shrink-0">
    <div className="container ">
        <div className="row gx-5">
        {/* <h5 className="text-white mb-3">Newsletter</h5>
                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p> */}
                <form action="#">
                    <div className="input-group mb-3">
                       </div>
                    {/* <h3>Contact me on Social Media </h3>       */}
                    <div  className=' ' style={{margin:'10px',float:'left'}}>
           <h4 style={{wordSpacing:'0px'}}>Contact on Social Media</h4>
    <a href="https://www.facebook.com/mayur.adlak.10/">
         <FacebookIcon  sx={{ fontSize: 50 }}  />
     </a> 
     &nbsp;  &nbsp;
    <a href='https://twitter.com/MayurAdlak'>
     <TwitterIcon  sx={{ fontSize: 50 }} />
     </a>
     &nbsp;  &nbsp;
     <a href="https://www.github.com/Mayuradlak123">
     <GithubIcon  sx={{ fontSize: 50 }} />
     </a>
     &nbsp;  &nbsp;
    <a href="https://www.linkedin.com/in/mayur-adlak-31b962220/" >
     <LinkedInIcon sx={{ fontSize: 50 }}  />
     </a> 
     &nbsp;  &nbsp;
     <a href="https://www.instagram.com/mayur.adlak.10/" >
     <InstagramIcon  sx={{ fontSize: 50 }}  />
     </a>
     </div>
     <h5 className="text-white mb-3">Newsletter</h5>
                <p className="small text-muted " style={{color:'white'}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, dolores voluptatibus veniam eligendi perspiciatis rem. Distinctio cupiditate corporis id sed? Quod eveniet asperiores, ad provident consequatur nihil sint dolores natus? </p>
                {/* <input className="form-control " type="text" placeholder="Recipient's username" /> <br /> <br />
                        <button className="btn btn-primary" id="button-addon2" type="button">Write </button> */}
                  
    
                </form>
            <div className="col-lg-2 col-md-4">
            <section className="mb-4 ">
        </section>
            </div>
           
            <div className="col-lg-4 col-md-6 ml-6">
                
            </div>
             
        </div>
    </div>
</footer>
</div>

</footer>
    </div>
  )
}
