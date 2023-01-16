import React, { Fragment ,useEffect,useState } from 'react'

export default function Syntax(props) {
  const [data,setData] = useState({
                          SyntaxPoints:props.SyntaxPoints,
                          syntaxt:props.syntaxt
                          });

    // Syntax Data 
  const [syntaxtextarea,setSyntaxtextarea] = useState('');

  useEffect(()=>{
    // console.log("asyntax!!!")
    props.SyntaxHandler(data);
  },[data]);

  const SyntaxPointsAdd= (data)=>{
    if(data != ""){
    props.syntaxAddPoints(data);
    document.getElementById('part2').value = "";
    setSyntaxtextarea('');
    }
    }  

const SyntaxPointDeletehandler = (index)=>{
               props.syntaxDeletePoints(index)         
    }



let SyntaxPointsList =  data.SyntaxPoints.length > 0 && data.SyntaxPoints.map((items,index)=> <div className="row my-3" key={index + items}>
                                                <div className='col-12 col-md-2 text-end'>{index + 1} . </div>
                                                <div className='col-10 col-md-8 text-start '>
                                                <div className='text-start'>{items}</div>
                                                </div>  
                                                <div className="col-2 col-md-2">
                                                 <input type="button" className='btn btn-sm btn-lighter' value="&#128465;" style={{width:"50px",backgroundColor:"white",color:"black",fontSize:"20px",fontWeight:"bolder",borderRadius:"7px"}}  onClick={()=>{SyntaxPointDeletehandler(index)}} />
                                                   
                                               </div>
                                            </div>);

const continuehandler = ()=>{
    props.nextStep()
}
const backhandler = ()=>{
    props.prevStep()
}

const syntaxHandler = (e)=>{
  
    data.syntaxt = e.target.value ;
    setData({...data});
}

  return (
    <Fragment>
          <fieldset>
                <div className="form-card">
                  <h2 className="fs-title">Syntax Data</h2>
                  <div className="row">
                   <div className="col-sm-2 ">
                <div className="center_4">
                  <p>Syntax</p><p>
                  </p></div>	    
              </div>
              <div className="col-sm-10 ">
               <input type="text" placeholder="Syntax" value={data.syntaxt} onChange={(e)=>syntaxHandler(e)} />
              </div>
                  </div>

                  <div className="row">
              <div className="col-sm-2 col-md-2 ">
                <div className="center_4">
                  <p>Syntax Points  </p><p>
                  </p></div>	    
              </div>
              <div className="col-sm-10  col-md-8  ">
                   <textarea name="" id="part2" cols="30" rows="2" style={{width:'100%'}} placeholder='Add Syntax contents in  Points Format' onChange={(e)=>setSyntaxtextarea(e.target.value)}></textarea>
              </div>
              <div className="col-sm-12  col-md-2 text-center my-auto ">
                   <input type="button" value="ADD +"  style={{color:"white",padding:"5px",width:"100px",borderRadius:"7px"}} className='btn btn-sm btn-success ' onClick={()=>SyntaxPointsAdd(syntaxtextarea)} />
              </div>
                  </div>

                  {
                    SyntaxPointsList
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
