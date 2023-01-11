import React from 'react'

export default function Contact() {
    
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      <div className=" d-flex align-items-center  justify-content-center">

<div className="bg-white col-md-4">
    <div className="p-4  shadow-md">
    <h3 className="text-primary">How Can We Help You?</h3>
        <div>
            <label>  Your_Name </label>
            <input type="text" name="name" className="form-control" placeholder=" Enter your Name" required/>
        </div>
        <div className="mt-2">
            <label htmlFor="email" className="form-label">Your_Email  </label>
            <input type="text" name="email" className="form-control" placeholder="Enter your Email" required/>
        </div>
        <div className="mt-2">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" name="subject" className="form-control" placeholder="Regarding " required/>
        </div>
        <div className="mt-2 mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea name="message" cols="20" rows="6" className="form-control"
                placeholder="message"></textarea>
        </div>
        <button className="btn btn-primary">
            Send
        </button>
    </div>
</div>
</div>

    </div>
  )
}
