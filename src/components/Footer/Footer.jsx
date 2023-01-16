import React , { Fragment } from 'react'

export default function Footer() {
  return (
    <Fragment>
           <div className='row container-fluid mx-auto'>
                
                <footer className=" row mx-auto container-fluid">
                <div className="col-9">
            <strong> © 2022 LMS. Crafted with ❤️ by <a href="www.Sairun.com">Sairun.com</a>.</strong> All rights reserved.
            </div>
             <div className="float-right d-none d-sm-block col-3">
                <b>Version</b> 1.1.0
            </div>
            
          </footer>
               
           </div>
    </Fragment>
  )
}
