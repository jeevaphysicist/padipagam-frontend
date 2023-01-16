import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function DisplayData(props) {
//   console.log("props",props);

  return (
   <Fragment>
     <div style={{color:"white" ,fontStyle:"italic"}}>
        <div className='row pt-2 container-fluid mx-auto'>
            <div className="col-12 text-end"><Link to={`/update/${props.topic}`}><button className='btn btn-block btn-light text-success'>Update</button></Link></div>
        </div>
        <div className='row pt-1 container-fluid mx-auto'>
           <h1>{props.data.Topic} in {props.data.CourseName}</h1>
           {/*---- Videos part start ----*/}
           <div>
              <div className='280px text-center'>
                 <div className='my-2'> {props.data.Topic} in {props.data.CourseName} </div><span>( &nbsp;VideoKey : &nbsp;{props.data.Video.Key} &nbsp;)</span>
                 <div><video src={props.data.Video.Location} controls muted autoPlay loop width="300px" height="auto"></video></div> 
                 <div className='btn btn-block btn-warning'> Go Video Tutorials </div>
              </div>
           </div>
            {/*---- Videos part end ----*/}

           {/* Topic Content Display Part Start */}
           <div><u><em>Definition :</em> </u></div>
           <ul style={{paddingLeft:"40px"}}>

              <li className='py-2'>{props.data.Definition}</li>

           </ul>
           <div><u><em>Breif : </em></u></div>
           <ul style={{paddingLeft:"40px"}}>
            {
               props.data.DefinitonPoints.length > 0  && props.data.DefinitonPoints.map((items,index)=> <li className='py-2' key={index}>{items}</li>)
            }
             
           </ul>
           <div><u><em>Syntax : </em></u></div>
           <span>{props.data.Syntax}</span>
           <ul style={{paddingLeft:"40px"}}>
            {
               props.data.SyntaxPoints.length > 0  && props.data.SyntaxPoints.map((items,index)=> <li className='py-2' key={index}>{items}</li>)
            }
             
           </ul>
           <div><u><em>For Example : </em></u></div>
           <ul style={{paddingLeft:"40px"}}>
            {
               props.data.ExamplePoints.length > 0  && props.data.ExamplePoints.map((items,index)=> <li className='py-2' key={index}>{items}</li>)
            }
           </ul>
           {
               props.data.ExamplePhotos.length > 0  && props.data.ExamplePhotos.map((items,index)=> <div className='text-center my-3' key={index}>
                                                                                               <img src={items} alt="code..."  className='display-image col-12'  />
                                                                                          </div>)
            }
          

           <div><u><em>Example Explaination : </em></u></div>
           <ul style={{paddingLeft:"40px"}}>
           {
               props.data.ExampleExplainationPoints.length > 0  && props.data.ExampleExplainationPoints.map((items,index)=> <li className='py-2' key={index}>{items}</li>)
           }
             
           </ul>

           <div><u><em>Output :</em></u> </div>
           {
               props.data.OutputPhotos.length > 0  && props.data.OutputPhotos.map((items,index)=> <div className='text-center my-3' key={index}>
                                                                                               <img src={items} alt="code..."  className='display-image col-12'  />
                                                                                          </div>)
            }

           <ul style={{paddingLeft:"40px"}}>
           {
               props.data.OutputPoints.length > 0  && props.data.OutputPoints.map((items,index)=> <li className='py-2' key={index}>{items}</li>)
           }
           </ul>

           <div><u><em>Notes :</em></u></div>
           <ul style={{paddingLeft:"40px"}}>
           {
               props.data.Notes.length > 0  && props.data.Notes.map((items,index)=> <li className='py-2' key={index}>{items}</li>)
           }
           </ul>
          
          {/* Topic Content Display Part end */}

        </div>
     </div>
        
   </Fragment>
  )
}
