import React, { Fragment ,useEffect,useState } from 'react';
import Logo from "../Assets/Logo.png";
import Collectdetails from './Collectdetails';
import {useNavigate ,useParams} from "react-router-dom";
import API from "../../URL";

export default function Update() {
    let navigate = useNavigate();
    let {topic} = useParams();
    const [Section,setSection] = useState({
      DefinitionPoints:[],
      Definition:"",
      SubHeading:"",
      SyntaxPoints:[],
      syntaxt:"",
      ExamplePoints:[],
      ExamplePhotos:[],
      OutputPoints:[],
      OutputPhotos:[],
      ExampleExplainationPoints:[],
      NotesPoints:[],
      Videos:""
    })



    useEffect(()=>{
      let course = sessionStorage.getItem('CourseData');
      course = JSON.parse(course);
      if(course){
         let data = {
                    CourseID:course.CourseID,
                    Topic:topic
                   }
         let options={
                     method:"POST",
                     headers:{"Content-Type":"application/json"},
                     body:JSON.stringify(data)
                     }
       fetch(`${API}/json/getTopicdData`,options)
      .then(res=>res.json())
      .then(result=>{
         // console.log("result",result.data[0]);
         let value = result.data[0];
           Section.Definition = value.Definition;
           for(let i = 0 ; i<value.DefinitonPoints.length ;i++){
            let datum = value.DefinitonPoints[i];
            Section.DefinitionPoints.push(datum);
           }
          
           Section.SubHeading=value.SubHeading;

           for(let i = 0 ; i<value.SyntaxPoints.length ;i++){
               let datum = value.SyntaxPoints[i];
               Section.SyntaxPoints.push(datum);
              }
          
           Section.syntaxt=value.Syntax;

           for(let i = 0 ; i<value.ExamplePoints.length ;i++){
            let datum = value.ExamplePoints[i];
            Section.ExamplePoints.push(datum);
           }

           for(let i = 0 ; i<value.ExamplePhotos.length ;i++){
            let datum = value.ExamplePhotos[i];
            Section.ExamplePhotos.push(datum);
           }

           for(let i = 0 ; i<value.OutputPoints.length ;i++){
            let datum = value.OutputPoints[i];
            Section.OutputPoints.push(datum);
           }

           for(let i = 0 ; i<value.OutputPhotos.length ;i++){
            let datum = value.OutputPhotos[i];
            Section.OutputPhotos.push(datum);
           }

           for(let i = 0 ; i<value.Notes.length ;i++){
            let datum = value.Notes[i];
            Section.NotesPoints.push(datum);
           }

           for(let i = 0 ; i<value.ExampleExplainationPoints.length ;i++){
            let datum = value.ExampleExplainationPoints[i];
            Section.ExampleExplainationPoints.push(datum);
           }
         //   console.log("value video",value.Video);
          
           Section.Videos = value.Video;
           setSection({...Section});
      });
      }
       
    },[])

  

    const FinishHandler = (data)=>{
  
   // e.preventDefault();
   let course = sessionStorage.getItem('CourseData');
     course = JSON.parse(course);
     if(course){



// console.log("data",data);

let options = {
 method:"POST",
 headers:{"Content-Type":"application/json"},
 body:JSON.stringify(data)
}

let output = fetch(`${API}/json/updatecontent`,options);
output.then(res=>res.json())
      .then(result=>{
             console.log(result);
          })
        }
        }

  return (
   <Fragment>
      <div className='row mx-auto'>
      <div className='json' style={{color:'white'}}>
       
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
           <div className='col-12 col-md-1 col-lg-2 col-xl-3'></div>
           <div className='col-12 col-md-2 col-lg-2 col-xl-2'> <span id="menu-row"><i className="bi bi-house-fill"></i>&nbsp;Home</span></div>
           <div className='col-12 col-md-2 col-lg-2 col-xl-2'><span id="menu-row"><span className="about-icon" >!</span>&nbsp;About</span></div>
           <div className='col-12 col-md-3 col-lg-2 col-xl-2'><span id="menu-row"><i className="bi bi-person-fill" ></i>&nbsp;Account</span></div>
           <div className='col-12 col-md-3 col-lg-3 col-xl-2'><span id="menu-row"><i className="bi bi-lock-fill" ></i>&nbsp;&nbsp;Lock Account</span></div>
           <div className='col-12 col-md-1 col-lg-1 col-xl-1'></div>
         </div>

         <div className='row pt-2 '>
           <div className='col-12 '>
            <div id='main' style={{height:"79vh"}} >
               <div className='content-body mt-1' style={{height:"79vh"}}>
                  <div className='text-start'><button className='btn btn-block btn-success' onClick={()=>navigate('/course')}>Back</button></div>
                  <div className='text-center my-3'>{topic}</div>
                 
                   <Collectdetails FinishHandler={FinishHandler} topic={topic} section={Section} key={Section} />
               </div>
            </div>                
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
