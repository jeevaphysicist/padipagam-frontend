import React, { Fragment, useState ,useEffect } from 'react';
import API from "../URL";


export default function Uploadfile(props) {
  // console.log("props in videos",props.Videos);
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState(false)
  const [data,setData] = useState(props.Videos);

   useEffect(()=>{

              props.datahandler(data);

   },[data]);


  const handleSubmit = async (e) => {

              e.preventDefault()
              let formData = new FormData();
              formData.append('file', image.data);
              await fetch(`${API}/AWS/image`, {
                                            method: 'POST',
                                            body: formData,
              }) .then(res=>res.json())
                 .then(result=>{
                 console.log("result",result);
                 setStatus(true);
                 setData(result.data);
                  })

          }




  const handleFileChange = (e) => {
    const img = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
      }
        setImage(img)
  }



  
  return (
   <Fragment>
        <div className='row mx-auto container-fluid'>
             <div className='col-12 text-center'>
             <div className='App'>
              <h1 className='col-12 text-center'>Upload Lecture Video </h1>
                <div className='col-12 text-center my-3'> <input type='file' name='file' onChange={handleFileChange}></input></div>
                <div className='col-12 text-center my-3'>  <input type="button" value="Submit" style={{color:"white",padding:"5px",width:"100px",borderRadius:"7px"}} className='btn btn-sm  btn-danger' onClick={(e)=>handleSubmit(e)}/></div>
                  {status || data !="" &&
                         <div>
                           <h4>{data.Bucket}</h4>
                           <p>Location : <span>{data.Location}</span></p>
                           <p>Key : <span>{data.Key}</span></p>
                           <p>Bucket : <span>{data.VersionId}</span></p>
                           </div>       
                   }
             </div>
             </div>
        </div>
   </Fragment>    
  )
}
