import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function DisplayNoData(props) {
  return (
   <Fragment>
     <div style={{color:"white"}}>
        <div className='row pt-5 container-fluid mx-auto'>
            <div className="col-12 text-center my-3" style={{color:"red",fontWeight:"bolder"}}>No Data</div>
            <div className="col-12 text-center my-3"><Link to={`/upload/${props.topic}`}><button className='btn btn-block btn-danger'>Upload Data</button></Link></div>
        </div>
     </div>
         
   </Fragment>
  )
}
