import React, { Fragment ,useState } from 'react'

export default function Output(props) {
  const [data,setData] = useState({
                             OutputPoints:props.OutputPoints,
                             OutputPhotos:props.OutputPhotos

  })
    // Output Data
  const [OutputPoints,setOutputPoints] = useState({points:[]});
  const [Outputtextarea,setOutputtextarea] = useState('');
  const [OutputPhotos,setOutputPhoto] = useState({Photo:[]});

  
  const OutputPointsAdd= (data)=>{
    if(data != ""){
                   props.OutputPointsAdd(data);
                   document.getElementById('part4').value = "";
                   setOutputtextarea('')
    }
}  


const OutputPointDeletehandler = (index)=>{
                     props.OutputPointDeletehandler(index);      
               }



let OutputPointsList =  data.OutputPoints.length > 0 && data.OutputPoints.map((items,index)=> <div className="row" key={index + items}>
                                                           <div className='col-12 col-md-2 text-end'>{index + 1} . </div>
                                                           <div className='col-10 col-md-8 text-start '>
                                                           <div className='text-start'>{items}</div>
                                                           </div>  
                                                           <div className="col-2 col-md-2">
                                                            <input className='btn btn-sm btn-light' value="&#128465;" type="button" style={{width:"50px",color:"black",fontSize:"20px",fontWeight:"bolder",borderRadius:"7px"}} onClick={()=>{OutputPointDeletehandler(index)}} />
                         
                                                          </div>
                                                       </div>);
let OutputPhotoUploadHandler = (e)=>{
           let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = function () {
                                          let photo = reader.result ;
                                              props.OutputPhotoUploadHandler(photo);
                                           }
            }   

let RemoveOutputPhoto = (index)=>{
          props.RemoveOutputPhoto(index);
}     

const continuehandler = ()=>{
    props.nextStep()
}
const backhandler = ()=>{
    props.prevStep()
}

  return (
   <Fragment>
      <fieldset>
                <div className="form-card">
                  <h2 className="fs-title">Output Data </h2>
                  <br/><br/>
                 <div className="row">
                     <div className="col-sm-2 register_right_inner_1 space_left">
                        <div className="center_4">
                            <p>Output Photos</p>
                        </div>	    
                      </div>
                      <div className="col-sm-10 register_right_inner_1 space_left">
                         <div className='row mmx-auto'>
                           <div className='col-12 text-center'>
                           <div>
                            <input id='fileUpload2' type='file' multiple accept='application/pdf, image/png' onChange={OutputPhotoUploadHandler} />
                            <label htmlFor='fileUpload2'>
                              <a  className={`btn btn-primary `}>Upload Files</a>
                            </label>
                           </div>
                            </div>
                      </div>
                    </div>
                    <br/><br/>
                    <div className="register_right_inner_1 space_left">
                    <div className=" row uploaded-files-list">

                        {
                          data.OutputPhotos.length > 0 && data.OutputPhotos.map(
                                                                 (items,index)=><div className='col-12 col-md-6 col-lg-4 my-3 mx-auto' key={index}>
                                                                           <img src={items} alt="image..." width="150px" height="150px" />
                                                                           <input value="&#128465;" type="button" className='btn btn-block btn-danger' style={{width:"50px",color:"black",fontSize:"20px",fontWeight:"bolder",borderRadius:"7px"}} onClick={()=>RemoveOutputPhoto(index)} />
                                                                        </div>
                                   )
                        }

                    </div>
                    </div>
                  </div>
                   <hr style={{color:"red"}} /> <hr style={{color:"red"}} />
                  <div className="row">
              <div className="col-sm-2 col-md-2 ">
                <div className="center_4">
                  <p>Output Points  </p><p>
                  </p></div>	    
              </div>
              <div className="col-sm-10  col-md-8  ">
                   <textarea name="" id="part4" cols="30" rows="2" style={{width:'100%'}} placeholder='Add Output contents in  Points Format' onChange={(e)=>setOutputtextarea(e.target.value)}></textarea>
              </div>
              <div className="col-sm-12  col-md-2 text-center my-auto ">
                   <input type="button" value="ADD +"   style={{color:"white",padding:"5px",width:"100px",borderRadius:"7px"}} className='btn btn-sm btn-success ' onClick={()=>{OutputPointsAdd(Outputtextarea)}} />
              </div>
                  </div>

                 {
                  OutputPointsList
                 }

                
                </div>
                <div className='row my-3'>
                  <div className='col-6 text-end'>
                    <input type="button" name="previous" className="btn btn-block btn-danger" defaultValue="Previous" onClick={backhandler} />
                  </div>
                  <div className='col-6 text-start'>
                     <input type="button" name="next" className="btn btn-block btn-success"  defaultValue="Next Step" onClick={continuehandler} />
                  </div>

                </div>
              </fieldset>
   </Fragment>
  )
}
