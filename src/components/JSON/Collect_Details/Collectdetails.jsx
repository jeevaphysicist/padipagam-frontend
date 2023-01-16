import React ,{Fragment , useState , useEffect} from 'react';
import "./Collectdetails.css";
import Uploadfile from '../../AWSVideoUpload/uploadfile';
import Syntax from './Syntax';
import ForExample from './ForExample';
import Output from './Output';
import ExplainExample from './ExplainExample';
import Notes from './Notes';
import Finish from './Finish';
import Definitions from './Definitions';
import Steps from './Steps';

export default function Collectdetails(props) {
  // console.log("props",props.section);

 const [step,setStep] = useState(1);

   // feildset 1
  //  Definition Data
  const [DefinitionPoints,setDefinitionPoints] = useState({points:props.section.DefinitionPoints});
  const [Definition,setDefinition] = useState(props.section.Definition);
  const [SubHeading,setSubHeading] = useState(props.section.SubHeading);

  //  feildset 2
  // Syntax Data 
  const [SyntaxPoints,setSyntaxPoints] = useState({points:props.section.SyntaxPoints});
  const [syntaxt,setSyntax] = useState(props.section.syntaxt);
 

  //  feildset 3
  //  For Example Data
  const [ExamplePoints,setExamplePoints] = useState({points:props.section.ExamplePoints});
  const [ExamplePhotos,setExamplePhoto] = useState({Photo:props.section.ExamplePhotos});  



  // feildset 4
  // Output Data
  const [OutputPoints,setOutputPoints] = useState({points:props.section.OutputPoints});
  const [OutputPhotos,setOutputPhoto] = useState({Photo:props.section.OutputPhotos});


  // feildset 5
  // Example Explaination Data
  const [ExampleExplainationPoints,setExampleExplainationPoints] = useState({points:props.section.ExampleExplainationPoints});


  // feildset 6
  // Notes 
  const [NotesPoints,setNotesPoints] = useState({points:props.section.NotesPoints});


  //  feildset 7
  // Upload Lecture Video
  const[Videos,setVideos] = useState(props.section.Videos);

  useEffect(()=>{
    setDefinition(props.section.Definition);
    setSubHeading(props.section.SubHeading);
    setSyntax(props.section.syntaxt);
    setVideos(props.section.Videos);
},[props.section.Definition,props.section.SubHeading,props.section.syntaxt,props.section.Videos]);

  
const registerHandler = ()=>{
  
      //  e.preventDefault();
       let course = sessionStorage.getItem('CourseData');
         course = JSON.parse(course);
         if(course){

 let data ={ 
          CourseID:course.CourseID,
          Topic:props.topic,
          CourseName:course.CourseName,
          Definition:Definition,
          SubHeading : SubHeading,
          DefinitonPoints:DefinitionPoints.points,
          Syntax:syntaxt,
          SyntaxPoints:SyntaxPoints.points,
          ExamplePoints:ExamplePoints.points,
          ExamplePhotos:ExamplePhotos.Photo,
          OutputPoints:OutputPoints.points,
          OutputPhotos:OutputPhotos.Photo,
          ExampleExplainationPoints:ExampleExplainationPoints.points,
          Notes:NotesPoints.points,
          Video:Videos
    };
    props.FinishHandler(data);
            }
            }




// FeildSet 1
const DefinitionHandler = (data)=>{
      setDefinition(data.Definition);
      setSubHeading(data.SubHeading);
      
}

const PointsHandler = (value)=>{
  DefinitionPoints.points.push(value);
  setDefinitionPoints({...DefinitionPoints});
}

const DeletePointsHandler=(index)=>{
  DefinitionPoints.points.splice(index,1);
  setDefinitionPoints({...DefinitionPoints}); 
}


// FeildSet 2
const SyntaxHandler = (data)=>{
  setSyntax(data.syntaxt);  
}

const syntaxAddPoints = (value)=>{
  SyntaxPoints.points.push(value);
  setSyntaxPoints({...SyntaxPoints});
}

const syntaxDeletePoints=(index)=>{
  SyntaxPoints.points.splice(index,1);
  setSyntaxPoints({...SyntaxPoints}); 
}



// FeildSet 3
const ExamplePointsAdd= (value)=>{
  ExamplePoints.points.push(value);
  setExamplePoints({...ExamplePoints});

}
const ExamplePhotoUploadHandler= (value)=>{
  ExamplePhotos.Photo.push(value);
  setExamplePhoto({...ExamplePhotos});
  
}
const ExamplePointDeletehandler= (index)=>{
  ExamplePoints.points.splice(index,1);
  setExamplePoints({...ExamplePoints});
  
}
const RemoveExamplePhoto= (index)=>{
  ExamplePhotos.Photo.splice(index,1);
  setExamplePhoto({...ExamplePhotos});
  
}


 


// FeildSet 4
const OutputPointsAdd= (value)=>{ 
  OutputPoints.points.push(value);
  setOutputPoints({...OutputPoints});

}
const OutputPhotoUploadHandler= (value)=>{
  OutputPhotos.Photo.push(value);
  setOutputPhoto({...OutputPhotos});
  
}
const OutputPointDeletehandler= (index)=>{
  OutputPoints.points.splice(index,1);
  setExamplePoints({...OutputPoints});
  
}
const RemoveOutputPhoto= (index)=>{
  OutputPhotos.Photo.splice(index,1);
  setOutputPhoto({...OutputPhotos});
  
}


 
 // FeildSet 5

 const ExampleExplainationPointsAdd= (value)=>{ 
  ExampleExplainationPoints.points.push(value);
  setExampleExplainationPoints({...ExampleExplainationPoints});

}

 const ExampleExplainationPointDeletehandler= (index)=>{
  ExampleExplainationPoints.points.splice(index,1);
  setExampleExplainationPoints({...ExampleExplainationPoints});
  
}


 // FeildSet 6

 const NotesPointsAdd= (value)=>{ 
  NotesPoints.points.push(value);
  setNotesPoints({...NotesPoints});

}

 const NotesPointDeletehandler= (index)=>{
  NotesPoints.points.splice(index,1);
  setNotesPoints({...NotesPoints});
  
}


 
//  Feildset 7
 let VideoDataHandler = (data)=>{
     setVideos(data);
 }

     // go back to previous step
const prevStep = () => {
  setStep(step - 1);
}

// proceed to the next step
const nextStep = () => {
 setStep(step + 1);
}
// console.log("definition",Definition);
 switch (step) {
  case 1: 
    return (
      <Fragment>
      <div className='row mx-auto'>
      <Steps step={step-1}/>
      <Definitions nextStep={nextStep} key={syntaxt} DefinitionPoints={DefinitionPoints.points} Definition={Definition} SubHeading={SubHeading} DefinitionHandler={DefinitionHandler} PointsHandler={PointsHandler} DeletePointsHandler={DeletePointsHandler}  />
      </div>
      </Fragment>
    )
  case 2: 
    return (
      <Fragment>
        <div className='row mx-auto'>
         <Steps step={step-1}/>
         <Syntax nextStep={nextStep} prevStep={prevStep} SyntaxPoints={SyntaxPoints.points} syntaxt={syntaxt}  syntaxAddPoints={syntaxAddPoints} SyntaxHandler={SyntaxHandler} syntaxDeletePoints={syntaxDeletePoints}   />
        </div>
      </Fragment>
    )
    case 3: 
    return (
      <Fragment>
        <div className='row mx-auto'>
          <Steps step={step-1}/>
          <ForExample nextStep={nextStep} prevStep={prevStep} ExamplePoints={ExamplePoints.points} ExamplePhotos={ExamplePhotos.Photo} ExamplePointsAdd={ExamplePointsAdd} ExamplePointDeletehandler={ExamplePointDeletehandler} ExamplePhotoUploadHandler={ExamplePhotoUploadHandler} RemoveExamplePhoto={RemoveExamplePhoto}  />
        </div>
      </Fragment>
    )
    case 4: 
    return (
      <Fragment>
        <div className='row mx-auto'>
         <Steps step={step-1}/>
         <Output nextStep={nextStep} prevStep={prevStep} OutputPoints={OutputPoints.points} OutputPhotos={OutputPhotos.Photo}  OutputPointsAdd={OutputPointsAdd} OutputPointDeletehandler={OutputPointDeletehandler} OutputPhotoUploadHandler={OutputPhotoUploadHandler} RemoveOutputPhoto={RemoveOutputPhoto} />
        </div>
      </Fragment>
    )
  case 5: 
    return (
      <Fragment>
        <div className='row mx-auto'>
         <Steps step={step-1}/>
         <ExplainExample nextStep={nextStep} prevStep={prevStep} ExampleExplainationPoints={ExampleExplainationPoints.points} ExampleExplainationPointsAdd={ExampleExplainationPointsAdd} ExampleExplainationPointDeletehandler={ExampleExplainationPointDeletehandler} />
        </div>
      </Fragment>
    )
    case 6: 
    return (
      <Fragment>
        <div className='row mx-auto'>
           <Steps step={step-1}/>
           <Notes nextStep={nextStep} prevStep={prevStep} NotesPoints={NotesPoints.points} NotesPointsAdd={NotesPointsAdd} NotesPointDeletehandler={NotesPointDeletehandler} />
        </div>
      </Fragment>
    )
    case 7: 
    return (
      <Fragment>
        <div className='row mx-auto'>
          <Steps step={step-1}/>
           <div className="form-card">
                  <h2 className="fs-title">Video Upload </h2>
                  <Uploadfile datahandler={VideoDataHandler} Videos={Videos} key={Videos} />
                </div>
                <div className='row mt-5'>
                  <div className='col-6 text-end'>
                    <input type="button" name="previous" className="btn btn-block btn-danger" defaultValue="Previous" onClick={()=>prevStep()} />
                  </div>
                  <div className='col-6 text-start'>
                    <input type="button" name="next" className="btn btn-block btn-success"  value="Submit" onClick={()=>{registerHandler();nextStep()}} />
                  </div>

            </div>
               
       </div>     
      </Fragment>
    )

  // never forget the default case, otherwise VS code would be mad!
  default: return (
      <Fragment>
        <div className='row mx-auto'>
         <Steps step={step-1}/>
         <Finish topic={props.topic} />
        </div>
      </Fragment>
    )
     // do nothing
} 
}