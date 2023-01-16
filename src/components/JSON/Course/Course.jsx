import React, { Fragment ,useState,useEffect} from 'react';
import Logo from "../Assets/Logo.png";
import Tick from "../Assets/tick.png";
import Wrong from "../Assets/wrong.png";
import API from "../../URL";
import DisplayNoData from './DisplayNoData';
import DisplayData from './DisplayData';
import { useNavigate } from 'react-router-dom';

export default function Course() {
  const [asidesetup , setAsideSetUp] = useState(true);
  const [topicdata,setTopicData] = useState('');
  const [topics,setTopics] = useState('');
  const [allTopics,setAllTopics] = useState('');
  const [totalTopicsCount,setTotalTopicsCount] = useState(0);
  const [completedTopicsCount,setCompletedTopicsCount] = useState(0);
  const [active,setActive] = useState('');
  const [courseDta,setCourseData] = useState('');

  let navigate = useNavigate();

  // Close aside handler
  const closeaside = ()=>{
    setAsideSetUp(false);
  }

  // Open aside handler
  const openaside = ()=>{
    setAsideSetUp(true);
  }

  useEffect(()=>{
     let course = sessionStorage.getItem('CourseData');
         course = JSON.parse(course);
         if(course){
         setCourseData(course);
          let data = {
                      CourseID:course.CourseID
                     }
          let options={
                       method:"POST",
                       headers:{"Content-Type":"application/json"},
                       body:JSON.stringify(data)
                      }
          fetch(`${API}/CourseTopics/getcoursetopics`,options)
                .then(res=>res.json())
                .then(result=>{
                      // console.log("result",result);
                      setTopics(result.data[0]);
                      setActive(result.data[0].Content[0].DataHolder[0].Topics[0].Topic);
                      setTotalTopicsCount(result.data[0].TotalTopics);
                })
          fetch(`${API}/json/getalltopics`,options)
                .then(res=>res.json())
                .then(result=>{
                      // console.log("result",result);
                      if(result.data){
                      setAllTopics(result.data);
                      setCompletedTopicsCount(result.data.length);
                      }
                })

              }
  },[])
  // console.log("active",active);

  useEffect(()=>{
    let data = {
      CourseID:courseDta.CourseID,
      Topic:active
     }

let Options = {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(data)
        }

      fetch(`${API}/json/getTopicdData`,Options)
       .then(res=>res.json())
       .then(result=>{
        // console.log("result",result);
             if(result.data){
                setTopicData(result.data[0])
             }
             else{
                setTopicData('')
             }
       });
  },[active])


const TopicDisplayHandler = (topic)=>{
  
    setActive(topic);

  }
  //  console.log("all topics",allTopics);

  const logouthandler = ()=>{
        sessionStorage.removeItem('JSONUser');
        sessionStorage.removeItem('JSONLogin');
        sessionStorage.removeItem('CourseData');
        navigate('/json');
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

         <div className='row pt-4  mx-auto text-start'  style={{color:"white"}}>
           <div className='col-12 col-md-1 col-lg-1 col-xl-1 '></div>
           <div className='col-12 col-md-1 col-lg-1 col-xl-1'><span onClick={()=>{asidesetup ? closeaside() : openaside()}}><i className="bi bi-menu-button-wide" id="main-menu"></i></span></div>
           <div className='col-12 col-md-2 col-lg-2 col-xl-2'><span id="menu-row"><i className="bi bi-house-fill" ></i>&nbsp;&nbsp;Home</span></div>
           <div className='col-12 col-md-2 col-lg-2 col-xl-2'><span id="menu-row"><span className="about-icon" >!</span>&nbsp;&nbsp;About</span></div>
           <div className='col-12 col-md-2 col-lg-2 col-xl-2'><span id="menu-row"><i className="bi bi-person-fill" ></i>&nbsp;&nbsp;Account</span></div>
           <div className='col-12 col-md-3 col-lg-2 col-xl-2'><span id="menu-row" onClick={()=>logouthandler()}><i className="bi bi-lock-fill" ></i>&nbsp;&nbsp;Lock Account</span></div>
           <div className='col-12 col-md-1 col-lg-2 col-xl-2'></div>
         </div>

         <div className='row pt-1 '>
           <div className='col-12 col-md-12 col-lg-3 col-xl-3'>
             <div id={asidesetup ? 'aside' : "aside-close"} >
                 <div className='row'>
                   <div className='col-4 col-md-4 col-lg-4 col-xl-4'>
                    Topics
                   </div>
                   <div className='col-8 col-md-8 col-lg-8 col-xl-8' style={{fontSize:"10px"}}>
                     <div className='row '>
                        <div className='col-8 col-lg-6 text-end '> Total : </div>
                        <div className='col-4 col-lg-6 text-start '>{totalTopicsCount}</div>
                        <div className='col-8 col-lg-6 text-end'> Completed : </div>
                        <div className='col-4 col-lg-6 text-start'>{completedTopicsCount}</div>
                        <div className='col-8 col-lg-6 text-end '> Pending : </div>
                        <div className='col-4 col-lg-6 text-start'>{totalTopicsCount - completedTopicsCount}</div>
                     </div>
                    
                   </div>
                 </div>
                 <hr/>
                 <div className='aside-body'>
                  <h3 className='text-center'>{courseDta.CourseName}</h3>

                  {
                   topics?.Content?.length > 0 && topics.Content.map((items,idx)=>
                  <div key={idx+items.Heading}>
                  <div className='main-heading' >{items.Heading}</div>
                   {items?.DataHolder?.length > 0 && items.DataHolder.map((item,index)=>
                   <div key={index+item.SubHeadings}>
                  <div className='sub-heading' >{item.SubHeadings}</div>
                  <ul>
                    { item?.Topics?.length > 0 && item.Topics.map((post,x)=>
                      <li key={x+post.Topic} className={active == post.Topic ? "active" : ""} style={{cursor:"pointer"}} onClick={()=>{TopicDisplayHandler(post.Topic)}}>{allTopics  && allTopics.includes(post.Topic) ? <img src={Tick} alt="tick..." width="10px" height="10px" /> : <img src={Wrong} alt="wrong..." width="10px" height="10px" /> } &nbsp;&nbsp;
                      <span style={{cursor:"pointer"}} name={post.Topic}  >{post.Topic}</span></li>)
                    }
                  </ul>
                   </div>

                  )}   
               </div>
                  )
                  }
                 </div>
             </div>
           </div>
           <div className='col-12 col-md-12 col-lg-9 col-xl-9'>
           <div id='main' >
            <div className="row">
              
               <div className='content-body mt-1'>
                { topicdata != "" ? <DisplayData data={topicdata} topic={active}/>  : <DisplayNoData topic={active} />  }      
               </div>
            </div>
                
           </div> 
           </div>
         </div>


         <div className='row '>
           <div className='col-12  text-center '>
                <div className="Footer row mx-auto">
                  <div className='col-8 col-md-6 my-3'>Copyright  @ 2022 by Sairun.in . </div>
                  <div className='col-4 col-md-6 my-3'>Version 1.1.0</div>
                </div> 
            </div>
         </div>
        
       </div>
       </div>
  </Fragment>
  )
}
