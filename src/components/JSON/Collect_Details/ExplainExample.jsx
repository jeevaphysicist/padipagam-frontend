import React, { Fragment ,useState} from 'react'

export default function ExplainExample(props) {
    // Example Explaination Data
    const [data,setData] = useState({
                         ExampleExplainationPoints:props.ExampleExplainationPoints
                            })
  const [ExampleExplainationtextarea,setExampleExplainationtextarea] = useState('');

  const ExampleExplainationPointsAdd= (data)=>{
    if(data != ""){
    props.ExampleExplainationPointsAdd(data);
    document.getElementById('part5').value = "";
    setExampleExplainationtextarea('');
    }
}  


const ExampleExplainationPointDeletehandler = (index)=>{
                     props.ExampleExplainationPointDeletehandler(index);
       }



let ExampleExplainationPointsList =  data.ExampleExplainationPoints.length > 0 && data.ExampleExplainationPoints.map((items,index)=> <div className="row my-3" key={index + items}>
                                                   <div className='col-12 col-md-2 text-end'>{index + 1} . </div>
                                                   <div className='col-10 col-md-8 text-start '>
                                                   <div className='text-start'>{items}</div>
                                                   </div>  
                                                   <div className="col-2 col-md-2">
                                                    <input value="&#128465;" type="button" className='btn btn-sm btn-light' style={{width:"50px",color:"black",fontSize:"20px",fontWeight:"bolder",borderRadius:"7px"}}  onClick={()=>{ExampleExplainationPointDeletehandler(index)}} />
                                                       
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
                  <h2 className="fs-title">Example Explaination</h2>
              
              <div className="row">
              <div className="col-sm-2 col-md-2 ">
                <div className="center_4">
                  <p>Example Points  </p><p>
                  </p></div>	    
              </div>
              <div className="col-sm-10  col-md-8  ">
                   <textarea name="" id="part5" cols="30" rows="2" style={{width:'100%'}} placeholder='Add  Example Explaination contents in  Points Format' onChange={(e)=>setExampleExplainationtextarea(e.target.value)}></textarea>
              </div>
              <div className="col-sm-12  col-md-2 text-center my-auto ">
                   <input type="button" className='btn btn-sm btn-success ' value="ADD +" style={{color:"white",padding:"5px",width:"100px",borderRadius:"7px"}}  onClick={(e)=>ExampleExplainationPointsAdd(ExampleExplainationtextarea)} />
              </div>
                  </div>

                  {
                    ExampleExplainationPointsList
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
