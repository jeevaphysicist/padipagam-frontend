import React, { Fragment ,useEffect,useState} from 'react'

export default function Definitions(props) {

   //   Definition Data
   const [data,setData] = useState({
                                  DefinitionPoints:props.DefinitionPoints,
                                  Definition:props.Definition,
                                  SubHeading:props.SubHeading
                                 });

  const [definationtextarea,setDefinitiontextarea] = useState('');

  useEffect(()=>{
   props.DefinitionHandler(data);   
  },[data])

//   Add Definition Points
const DefinitionPointsAdd= (value)=>{
                             if(value != ""){
                                         props.PointsHandler(value);
                                         document.getElementById('part1').value = "";
                                         setDefinitiontextarea('');
                               }
}  


const DefinitionPointDeletehandler = (index)=>{
                         props.DeletePointsHandler(index);           
                        }

 const continuehandler = ()=>{
                           props.nextStep()
                        }



let DefinitionPointsList =  data.DefinitionPoints.length > 0 && data.DefinitionPoints.map((items,index)=> <div className="row my-3" key={index + items}>
                                                                    <div className='col-12 col-md-2 text-end'>{index + 1} . </div>
                                                                    <div className='col-10 col-md-8 text-start '>
                                                                    <div className='text-start'>{items}</div>
                                                                    </div>  
                                                                    <div className="col-2 col-md-2">
                                                                     <input type="button" style={{width:"50px",color:"black",fontSize:"20px",fontWeight:"bolder",borderRadius:"7px"}} value="&#128465;" className='btn btn-sm btn-light'  onClick={()=>{DefinitionPointDeletehandler(index)}} />
                                                                       
                                                                   </div>
                                                                </div>); 
const SubHeadingHandler = (e)=>{
   data.SubHeading = e.target.value;
   setData({...data});

}
const DefinitionHandler = (e)=>{
   data.Definition = e.target.value;
   setData({...data});

}

  return (
    <Fragment>


         <fieldset>
                <div className="form-card" >
                  <h2 className="fs-title">Definiton data</h2>
                 <div className="row">
                      <div className="col-sm-2 col-md-2 register_right_inner_1 space_left">
                         <div className="center_4">
                            <p>Definition </p>
                         </div>	    
                      </div>
                      <div className="col-sm-10  col-md-10  ">
                            <textarea name="def" id="" cols="30" rows="2" placeholder='Definiton' style={{width:'100%'}} value={data.Definition} onChange={(e)=>{DefinitionHandler(e)}}></textarea>
                      </div>
                 </div>
                 <div className="row">
                      <div className="col-sm-2">
                         <div className="center_4">
                             <p> Breif </p>
                         </div>	    
                      </div>
                      <div className="col-sm-10 ">
                          <input type="text"  name="Breif" placeholder="Breif" value={data.SubHeading} onChange={(e)=>{SubHeadingHandler(e)}} />
                      </div>
                </div>
                <div className="row">
                     <div className="col-sm-2 col-md-2 register_right_inner_1 space_left">
                        <div className="center_4">
                           <p>Definition Points  </p>
                        </div>	    
                     </div>
                      <div className="col-sm-10  col-md-8  ">
                           <textarea name="defpoints" id="part1" style={{width:'100%'}} cols="30" rows="2" placeholder='Add Breif contents in  Points format' onChange={(e)=>setDefinitiontextarea(e.target.value)}></textarea>
                      </div>
                      <div className="col-sm-12  col-md-2 text-center my-auto ">
                            <input type="button" className='btn btn-sm btn-success '  style={{color:"white",padding:"5px",width:"100px",borderRadius:"7px"}} value="ADD +" onClick={()=>{DefinitionPointsAdd(definationtextarea)}} />
                      </div>
                </div>    
                  { 
                    DefinitionPointsList
                  }  
           </div>
                <div className='row my-3'>
                  <div className='col-6'></div>
                  <div className='col-6'>
                     <input type="button" name="next" className="btn btn-block btn-success"  defaultValue="Next Step" onClick={continuehandler} />
                  </div>

                </div>
                
              </fieldset>
    </Fragment>
  )
}
