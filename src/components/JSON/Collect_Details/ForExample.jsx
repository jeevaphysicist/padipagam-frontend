import React, { Fragment ,useState } from 'react'

export default function ForExample(props) {
      //  For Example Data

      const [data,setData] = useState({
                              ExamplePoints:props.ExamplePoints,
                              ExamplePhotos:props.ExamplePhotos
                             });


  const [Exampletextarea,setExampletextarea] = useState('');
 

  const ExamplePointsAdd= (data)=>{
    if(data != ""){
                            props.ExamplePointsAdd(data);
                            document.getElementById('part3').value = "";
                            setExampletextarea('');
    }
}  


const ExamplePointDeletehandler = (index)=>{
                       props.ExamplePointDeletehandler(index);
            
  }



let ExamplePointsList =  data.ExamplePoints.length > 0 && data.ExamplePoints.map((items,index)=> <div className="row my-3" key={index + items}>
                                              <div className='col-12 col-md-2 text-end'>{index + 1} . </div>
                                              <div className='col-10 col-md-8 text-start '>
                                              <div className='text-start'>{items}</div>
                                              </div>  
                                              <div className="col-2 col-md-2">
                                               <input type="button" value="&#128465;" className='btn btn-sm btn-light' style={{width:"50px",color:"black",fontSize:"20px",fontWeight:"bolder",borderRadius:"7px"}}  onClick={()=>{ExamplePointDeletehandler(index)}} />
                                                  
                                             </div>
                                          </div>); 

const ExamplePhotoUploadHandler = (e)=>{
             let reader = new FileReader();
                 reader.readAsDataURL(e.target.files[0]);
                 reader.onload = function () {
                               let photo = reader.result ;
                               props.ExamplePhotoUploadHandler(photo)
                 }
}

const RemoveExamplePhoto = (index)=>{
            props.RemoveExamplePhoto(index) 
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
                  <h2 className="fs-title">For Example Data </h2>
                  <div className="row">
                   <div className="col-sm-2 register_right_inner_1 space_left">
                <div className="center_4">
                  <p>Example Photos</p><p>
                  </p></div>	    
              </div>
              <div className="col-sm-10 register_right_inner_1 space_left">
                <div className='row mmx-auto'>
                  <div className='col-12 text-center'>
                  <div>

                  <input id='fileUpload' type='file' multiple accept='application/pdf, image/png' onChange={ExamplePhotoUploadHandler}/>

                    <label htmlFor='fileUpload'>
                        <a  className={`btn btn-primary `}>Upload Files</a>
                    </label>
                  </div>

                  </div>

                </div>
              </div><br/><br/>
              <div className="register_right_inner_1 space_left">
              <div className=" row uploaded-files-list ">
                {
                  data.ExamplePhotos.length > 0 && data.ExamplePhotos.map(
                                                             (items,index)=><div key={index} className='col-12 col-md-6 col-lg-4 my-3 mx-auto'>
                                                                       <img src={items} alt="image..." width="150px" height="150px" /><br/>
                                                                        <input type="button" value="&#128465;" className='btn btn-block btn-danger' style={{width:"50px",color:"black",fontSize:"20px",fontWeight:"bolder",borderRadius:"7px"}} onClick={()=>RemoveExamplePhoto(index)} />
                                                                     </div>
                  )
                }
         </div>
              </div>
                  </div>
                  <hr style={{color:"red"}} /><hr style={{color:"red"}} />
                  <div className="row">
              <div className="col-sm-2 col-md-2 ">
                <div className="center_4">
                  <p>Example Points  </p><p>
                  </p></div>	    
              </div>
              <div className="col-sm-10  col-md-8  ">
                   <textarea name="" id="part3" cols="30" rows="2" style={{width:'100%'}} placeholder='Add Example contents in  Points Format' onChange={(e)=>setExampletextarea(e.target.value)}></textarea>
              </div>
              <div className="col-sm-12  col-md-2 text-center my-auto ">
                   <input type="button" className='btn btn-sm btn-success '   style={{color:"white",padding:"5px",width:"100px",borderRadius:"7px"}} value="ADD + " onClick={()=>ExamplePointsAdd(Exampletextarea)} />
              </div>
                  </div>

                 {
                  ExamplePointsList
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
