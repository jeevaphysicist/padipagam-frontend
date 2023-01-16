import React , {Fragment,useState} from 'react';
const MAX_COUNT = 5;

export default function Main() {
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false);
    const [uploadPhotos,setUploadPhotos] = useState([]);

    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        const Photos = [...uploadPhotos];
        let limitExceeded = false;
        // document.getElementById('fileUpload').reset();
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
              let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                  let document = reader.result;
                  var stringLength = document.length - 'data:image/png;base64,'.length;
                 var sizeInBytes = 4 * Math.ceil((stringLength / 3))*0.5624896334383812;
                 var sizeInKb=sizeInBytes/1024;
                 var mb =(sizeInKb/1024).toFixed(2);
                 console.log("mb",mb);
                  if(mb <= 1){
                      uploaded.push(file);
                      Photos.push(document);
                  }
                  else{
                    window.alert('less than 1 mb');
                  }
                  }
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length >= MAX_COUNT) {
                    window.alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded){
          setUploadedFiles(uploaded);
          setUploadPhotos(Photos);
         }     
    }

    const handleFileEvent =  (e) => {
            let chosenFiles = Array.prototype.slice.call(e.target.files); 
            handleUploadFiles(chosenFiles);             
    }
    console.log("files",uploadedFiles);
    console.log('photos',uploadPhotos);
  return (
   <Fragment>
      {/* <div>
        <h1>C++ Tutorials</h1>
          <h2>Course Content : </h2>
          <ol>
            <li>Introduction of C++</li>
            <li>Variables in C++</li>
            <li>Keywords in C++</li>
            <li>Datatypes in C++</li>
            <li>Operators  in C++</li>
            <li>Functions  in C++</li>
            <li>Loops in C++</li>
            <li>Conditional Statements in C++</li>
           </ol>
           <div>
                 
           </div>
    </div> */}

<div className="App">

<input id='fileUpload' type='file' multiple
    accept='application/pdf, image/png'
              onChange={handleFileEvent}
              disabled={fileLimit}
/>

<label htmlFor='fileUpload'>
  <a  className={`btn btn-primary ${!fileLimit ? '' : 'disabled' } `}>Upload Files</a>
</label>

<div className="uploaded-files-list">
  {uploadedFiles.map(file => (
              <div >
                  {file.name}
              </div>
          ))}
</div>
<div className="uploaded-files-list">
  {uploadPhotos.length >0 && uploadPhotos.map(file => (
              <div >
                  <img src={file} alt="photos" width="60px" heigth="60px" />
              </div>
          ))}
</div>

</div>
   </Fragment>
  )
}
