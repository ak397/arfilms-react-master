import React from 'react'

export default function ContactUs() {
  return (
    <div className="container my-3" style={{height:"72vh"}}>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Contact Number</label>
    <input type="number" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
  <textarea className="form-control my-2 row-10" style={{height:"150px"}} placeholder="Any Query Related to our work don't hesitate to contact us" id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea"></label>
</div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
