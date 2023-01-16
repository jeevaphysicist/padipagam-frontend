import React, { Fragment } from 'react';
import {useNavigate} from "react-router-dom"

export default function Finish(props) {
    let navigate = useNavigate();

  return (
    <Fragment>
         <fieldset>
               
                
               <div className="form-card">
               
               
               <div>
                 <h2 className="fs-title text-center">Success !</h2>
                 <br /><br />
                 <div className="row justify-content-center">
                    <h1 style={{color:'green'}}>Successfully Upload {props.topic} Data</h1>
                 </div>
                 <br /><br />
                 <div className="row justify-content-center">
                   <div className="col-7 text-center">
                     <h5>Successfully Upload {props.topic} Topic Data</h5>
                   </div>
                 </div>
                 <br/><br/>
                 <center> <input type="button" className='btn btn-sm btn-success' style={{width:"100px"}} value="BACK" onClick={()=>navigate('/course')}/></center>
                 </div>
                 
               </div>
              
             </fieldset>
    </Fragment>
  )
}
