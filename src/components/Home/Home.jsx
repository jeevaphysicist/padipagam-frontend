import React, { Fragment } from 'react';
import "./Home.css";
import {Link} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";

export default function Home() {
  return (
    <Fragment>
        <Navbar/>
         <header>
          <div className="background"> </div>
         <div className="card">
             <div> Register </div>
             <div> Login </div>
             <div> Individual documentry for each user </div>
             <div> Error Solving </div>
             <div>Separate data for each program </div>
         </div>
         <h1>Data Structures And Algorithms</h1>
         <div className='row mx-auto'>
         <div className="card col-12 col-md-6 col-lg-4 col-xl-4 my-3">
           <div>C++ Environmental Set Up</div>
           <video controls></video><br/>
           <div className="button">
              <Link to="/content">Learn C++</Link>
           </div>
         </div>
         <div className="card  col-12 col-md-6 col-lg-4 col-xl-4 my-3">
          <div>Python Environmental Set Up</div>
          <video controls></video><br/>
          <div className="button">
          <Link to="/content">Learn Python</Link>
          </div>
        </div>
        <div className="card  col-12 col-md-6 col-lg-4 col-xl-4 my-3">
          <div>Java Environmental Set Up</div>
          <video controls></video><br/>
          <div className="button">
          <Link to="/content">Learn Java</Link>
          </div>
        </div>
        <div className="card  col-12 col-md-6 col-lg-4 col-xl-4 my-3">
          <div>C Environmental Set Up</div>
          <video controls></video><br/>
          <div className="button">
          <Link to="/content">Learn C</Link>
          </div>
        </div>
      </div>
         
          <h1>Web development</h1>
          <div className='row mx-auto'>
          <div className="card  col-12 col-md-6 col-lg-4 col-xl-4 my-3">
            <div>HTML Environmental Set Up</div>
            <video controls></video><br/>
            <div className="button">
            <Link to="/content">Learn HTML 5</Link>
            </div>
          </div>
          <div className="card  col-12 col-md-6 col-lg-4 col-xl-4 my-3">
            <div>Css Environmental Set Up</div>
            <video controls></video><br/>
            <div className="button">
            <Link to="/content">Learn CSS 3</Link>
            </div>
          </div>
          <div className="card  col-12 col-md-6 col-lg-4 col-xl-4 my-3">
            <div>javascript Environmental Set Up</div>
            <video controls></video><br/>
            <div className="button">
            <Link to="/content">Learn Javascript</Link>
            </div>
          </div>

          </div>
          <h1>Database</h1>
          <div className='row mx-auto'>
          <div className="card  col-12 col-md-6 col-lg-4 col-xl-4 my-3">
          <div>MongoDB Environmental Set Up</div>
            <video controls></video><br/>
            <div className="button">
            <Link to="/content">Learn MongoDB</Link>
            </div>
          </div>
          <div className="card  col-12 col-md-6 col-lg-4 col-xl-4 my-3">
          <div>MYSQL Environmental Set Up</div>
            <video controls></video><br/>
            <div className="button">
            <Link to="/content">Learn MYSQL</Link>
            </div>
          </div>


          </div>
          
      </header>

    </Fragment>
  )
}

