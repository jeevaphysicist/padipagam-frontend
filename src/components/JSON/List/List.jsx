import React,{Fragment } from 'react';
import './List.css';

export default function List() {

    

  return (
    <Fragment>
         <form action="#" className="form" id="forms" onsubmit="event.preventDefault()">
  <div className="progressbar">
    <div className="progress" id="progress" />
    <div className="progress-step progress-step-active" data-title="Account" />
    <div className="progress-step" data-title="Social" />
    <div className="progress-step" data-title="Personal" />
    <div className="progress-step" data-title="Social" />
    <div className="progress-step" data-title="Personal" />
  </div>
  <div className="step-forms step-forms-active">
    <div className="group-inputs">
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
    </div>
    <div className="group-inputs">
      <label htmlFor="position">Email</label>
      <input type="text" name="position" id="position" />
    </div>
    <div className="group-inputs">
      <label htmlFor="email">Password</label>
      <input type="text" name="email" id="email" />
    </div>
    <div className="group-inputs">
      <label htmlFor="email">Confirm password</label>
      <input type="text" name="email" id="email" />
    </div>
    <div className>
      <a href="#" className="btn btn-next width-50 ml-auto">Next</a>
    </div>
  </div>
  <div className="step-forms">
    <div className="group-inputs">
      <label htmlFor="phone">Facebook</label>
      <input type="text" name="phone" id="phone" />
    </div>
    <div className="group-inputs">
      <label htmlFor="email">Twitter</label>
      <input type="text" name="email" id="email" />
    </div>
    <div className="group-inputs">
      <label htmlFor="email">Linkedin</label>
      <input type="text" name="email" id="email" />
    </div>
    <div className="group-inputs">
      <label htmlFor="email">Dribbble</label>
      <input type="text" name="email" id="email" />
    </div>
    <div className="btns-group">
      <a href="#" className="btn btn-prev">Previous</a>
      <a href="#" className="btn btn-next">Next</a>
    </div>
  </div>
  <div className="step-forms">
    <div className="group-inputs">
      <label htmlFor="dob">Date of Birth</label>
      <input type="date" name="dob" id="dob" />
    </div>
    <div className="group-inputs">
      <label htmlFor="ID">National ID</label>
      <input type="number" name="ID" id="ID" />
    </div>
    <div className="group-inputs">
      <label htmlFor="ID">Account Number</label>
      <input type="number" name="ID" id="ID" />
    </div>
    <div className="group-inputs">
      <label htmlFor="ID">Swift Code</label>
      <input type="text" name="ID" id="ID" />
    </div>
    <div className="btns-group">
      <a href="#" className="btn btn-prev">Previous</a>
      <a href="#" className="btn btn-next">Next</a>
    </div>
  </div>
  <div className="step-forms">
    <div className="group-inputs">
      <label htmlFor="phone">Facebook</label>
      <input type="text" name="phone" id="phone" />
    </div>
    <div className="group-inputs">
      <label htmlFor="email">Twitter</label>
      <input type="text" name="email" id="email" />
    </div>
    <div className="group-inputs">
      <label htmlFor="email">Linkedin</label>
      <input type="text" name="email" id="email" />
    </div>
    <div className="group-inputs">
      <label htmlFor="email">Dribbble</label>
      <input type="text" name="email" id="email" />
    </div>
    <div className="btns-group">
      <a href="#" className="btn btn-prev">Previous</a>
      <a href="#" className="btn btn-next">Next</a>
    </div>
  </div>
  <div className="step-forms">
    <div className="group-inputs">
      <label htmlFor="dob">Date of Birth</label>
      <input type="date" name="dob" id="dob" />
    </div>
    <div className="group-inputs">
      <label htmlFor="ID">National ID</label>
      <input type="number" name="ID" id="ID" />
    </div>
    <div className="group-inputs">
      <label htmlFor="ID">Account Number</label>
      <input type="number" name="ID" id="ID" />
    </div>
    <div className="group-inputs">
      <label htmlFor="ID">Swift Code</label>
      <input type="text" name="ID" id="ID" />
    </div>
    <div className="btns-group">
      <a href="#" className="btn btn-prev">Previous</a>
      <input type="submit" defaultValue="Submit" id="submit-form" className="btn" />
    </div>
  </div>
</form>

    </Fragment>
  )
}
