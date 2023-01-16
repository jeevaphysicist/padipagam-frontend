import React, { Fragment } from 'react'

export default function Select_Course() {
  return (
  <Fragment>
    <div className='row mx-auto container-fluid' style={{position:"relative",top:'200px'}}>
         <div className='col-2 col-md-4'></div>
            <div className='col-8 col-md-4 text-center'>
               <div className="text-primary ">
                  SELECT COURSE
               </div>
               <div className='mx-auto border p-4 py-5'>
               <span style={{fontWeight:"bolder",color:"red"}}>error display part</span><br/><br/>
                  <form>
                    <div className='row my-3'>
                        <div className="col-6 text-end"> Select Course</div>
                        <div className="col-6 text-start">
                        <select>
                            <option value="C++">C++</option>
                            <option value="PYTHON">PYTHON</option>
                            <option value="JAVA">JAVA</option>
                            <option value="C">C</option>
                       </select>
                       </div>
                       </div>                     
                       <input type="submit" className='mx-auto my-3 btn btn-sm btn-success'   value="GO" />
                  </form>
                  </div>
              </div>
              <div className='col-2   col-md-4'></div>
             </div>
  </Fragment>
  )
}
