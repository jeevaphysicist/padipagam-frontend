import React , { Fragment ,useEffect ,useState} from "react";
import Logo from "../Assets/Logo.png";
import API from "../../URL";
import {useNavigate} from "react-router-dom"

export default function Course_Login() {
 const [courseName,setCourseName] = useState('');
 const [courseID,setCourseID] = useState('');
 const [courses,setCourses] = useState('');
 const [SecreteKey,setSecreteKey] = useState('');
 const [error,setError] = useState('');

 let navigate = useNavigate();

  useEffect(()=>{
           fetch(`${API}/CourseAuth/GetCourses`,{method:"GET"})
            .then(res=>res.json())
            .then(result=>{
                    setCourses(result.data);
            })
  },[])

  const loginHandler = (e)=>{
    e.preventDefault();
    let data = {
                CourseName:courseName,
                CourseID:courseID,
                SecreteKey:SecreteKey
               }
    let options={
                 method:"POST",
                 headers:{"Content-Type":"application/json"},
                 body:JSON.stringify(data)
                }
    fetch(`${API}/CourseAuth/EnterIndividualCourse`,options)
       .then(res=>res.json())
       .then(result=>{
        // console.log(result);
           if(result.isloggedin){
             setError("");
             sessionStorage.setItem('CourseData',JSON.stringify(result.data));
            //  sessionStorage.setItem('JSONLogin',JSON.stringify(result.isloggedin));
             navigate('/course')
           }
           else{
             setError(result.message);
           }
       })
  }

 
  return (
   <Fragment>
      <div className='row mx-auto'>
      <div className='json'>
       
      <div className='row pt-2  mx-auto text-start container' >
             <div className='col-4 col-md-3 col-lg-2 col-xl-2'>
                <img src={Logo} alt="Logo" height="40px"  />
             </div>
             <div className='col-7 col-md-8 col-lg-8 col-xl-8 text-end' style={{color:"white"}}>
              <div className="dropdown" style={{backgroundColor:"transparent",color:'white'}} id="menu-column">
                 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-menu-button-wide" />
                 </button>
                 <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                 <li><a className="dropdown-item" href="#"><i className="bi bi-house-fill"></i>&nbsp;&nbsp;Home</a></li>
                 <li><a className="dropdown-item" href="#"><span className="about-icon" >!</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About</a></li>
                 <li><a className="dropdown-item" href="#"><i className="bi bi-person-fill" ></i>&nbsp;&nbsp;Account</a></li>
                 <li><hr className="dropdown-divider" /></li>
                 <li><a className="dropdown-item" href="#"><i className="bi bi-lock-fill" ></i>&nbsp;&nbsp;Lock Account</a></li>
                 </ul>
              </div>            
              </div>
             <div className='col-1 col-md-1 col-lg-2 col-xl-2'></div>
         </div>

         <div className='row  mx-auto text-start' style={{color:"white"}}>
           <div className='col-12 col-md-2 col-lg-3 col-xl-3'></div>
           <div className='col-12 col-md-3 col-lg-2 col-xl-2'> <span id="menu-row"><i className="bi bi-house-fill"></i>&nbsp;Home</span></div>
           <div className='col-12 col-md-3 col-lg-2 col-xl-2'><span id="menu-row"><span className="about-icon" >!</span>&nbsp;About</span></div>
           <div className='col-12 col-md-3 col-lg-2 col-xl-2'><span id="menu-row"><i className="bi bi-person-fill" ></i>&nbsp;Account</span></div>
           <div className='col-12 col-md-2 col-lg-2 col-xl-2'><span id="menu-row"><i className="bi bi-lock-fill" ></i>&nbsp;&nbsp;Lock Account</span></div>
           <div className='col-12 col-md-1 col-lg-1 col-xl-1'></div>
         </div>

         <div className='row pt-5 '>
           <div className='col-12 col-md-4 col-lg-6 col-xl-6'></div>
           <div className='col-12 col-md-4 col-lg-6 col-xl-6 text-center '>
                <div className="heading">Sairun - Course Creator</div>
                <form className='json-login-box mx-auto' onSubmit={(e)=>loginHandler(e)}>
                  <div className="heading p-3" style={{fontWeight:"normal"}}>Start Your session with Login</div>
                   
                  <div className="heading p-1" style={{fontWeight:"bolder",color:"red"}}>{error}</div>

                  <div className="input-group mb-3 p-3 ">
                   <span  style={{backgroundColor:"transparent",color:'white'}} className="input-group-text" id="basic-addon1"><i className="bi bi-book"></i></span>
                   <select className="form-control" style={{backgroundColor:"transparent",color:'white'}} required onChange={(e)=>setCourseName(e.target.value)}>
                    <option value="" selected style={{backgroundColor:"blue",color:'white'}} >--- select course ---</option>
                    {
                      courses.length > 0 && courses.map(items=><option value={items.CourseName} key={items.id} style={{backgroundColor:"blue",color:'white'}}>{items.CourseName}</option>)
                    }
                        
                   </select>
                 </div>

                  <div className="input-group mb-3 p-3 ">
                   <span  style={{backgroundColor:"transparent",color:'white'}} className="input-group-text" id="basic-addon1"><i className="bi bi-device-ssd-fill"></i></span>
                   <input  style={{backgroundColor:"transparent",color:'white'}}  type="text" required className="form-control" placeholder="Course ID" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>setCourseID(e.target.value)} />
                 </div>

                 <div className="input-group mb-3 p-3 " style={{backgroundColor:"transparent"}}>
                   <span  style={{backgroundColor:"transparent",color:'white'}} className="input-group-text" id="basic-addon1"><i className="bi bi-key-fill"></i></span>
                   <input  style={{backgroundColor:"transparent",color:'white'}} type="Password" required className="form-control" placeholder="Secrete Key" aria-label="Password" aria-describedby="basic-addon1" onChange={(e)=>setSecreteKey(e.target.value)} />
                 </div>

                 <input type="submit" className="btn btn-primary m-3" value="Enter" />
                </form>  
            </div>
         </div>
         <div className='row '>
           <div className='col-12  text-center '>
                <div className="Footer row mx-auto pt-3">
                  <div className='col-8 col-md-6'>Copyright  @ 2022 by Sairun.in . </div>
                  <div className='col-4 col-md-6'>Version 1.1.0</div>
                </div> 
            </div>
         </div>
        
      </div>
      </div>
   </Fragment>
  )
}
