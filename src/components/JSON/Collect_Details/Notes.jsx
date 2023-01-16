import React, { Fragment ,useState } from 'react'

export default function Notes(props) {
    // Notes 
    const [data,setData] = useState({
                      NotesPoints:props.NotesPoints
         })
  const [Notestextarea,setNotestextarea] = useState('');  
  
  const NotesPointsAdd= (data)=>{
    if(data != ""){
    props.NotesPointsAdd(data);
    document.getElementById('part6').value = "";
    setNotestextarea('')
    }
}  


const NotesPointDeletehandler = (index)=>{
   props.NotesPointDeletehandler(index);         
  }



let NotesPointsList =  data.NotesPoints.length > 0 && data.NotesPoints.map((items,index)=> <div className="row my-3" key={index + items}>
                                              <div className='col-12 col-md-2 text-end'>{index + 1} . </div>
                                              <div className='col-10 col-md-8 text-start '>
                                              <div className='text-start'>{items}</div>
                                              </div>  
                                              <div className="col-2 col-md-2">
                                               <input value="&#128465;" type="button" className='btn btn-sm btn-light' style={{width:"50px",color:"black",fontSize:"20px",fontWeight:"bolder",borderRadius:"7px"}} onClick={()=>{NotesPointDeletehandler(index)}} />
                                                 
                                             </div>
                                          </div>);

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
                  <h2 className="fs-title">Notes Data</h2>              
              <div className="row">
              <div className="col-sm-2 col-md-2 ">
                <div className="center_4">
                  <p>Notes Points  </p><p>
                  </p></div>	    
              </div>
              <div className="col-sm-10  col-md-8  ">
                   <textarea name="" id="part6" cols="30" rows="2" style={{width:'100%'}} placeholder='Add Notes contents in  Points Format' onChange={(e)=>setNotestextarea(e.target.value)}></textarea>
              </div>
              <div className="col-sm-12  col-md-2 text-center my-auto ">
                   <input type="button" className='btn btn-sm btn-success '  value="ADD + " style={{color:"white",padding:"5px",width:"100px",borderRadius:"7px"}}  onClick={()=>NotesPointsAdd(Notestextarea)} />
              </div>
                  </div>

                  {
                    NotesPointsList
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
