import React , { Fragment } from "react";
import {Route,Routes} from 'react-router-dom';
import Home  from "./components/Home/Home";

import Main from "./components/Main/Main";
import JSON from "./components/JSON/Index";
import Uploadfile from "./components/AWSVideoUpload/uploadfile";
import Course_Login from "./components/JSON/Couse_login/Course_Login";
import Course from "./components/JSON/Course/Course";
import CollectDetails from "./components/JSON/Collect_Details/Collectdetails";
import Update from "./components/JSON/Collect_Details/Update";
import Upload from "./components/JSON/Collect_Details/Upload";


function App() {
  return (
    <Fragment>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/content" element={<Main/>} />
      <Route path="/json" element={<JSON/>} />
      <Route path="/courselogin" element={<Course_Login/>} />
      <Route path="/uploadfile" element={<Uploadfile/>}/>
      <Route path="/course" element={<Course/>} />
      <Route path="/CollectDetails/:topic" element={<CollectDetails/>} />
      <Route path="/update/:topic" element={<Update/>} />
      <Route path="/upload/:topic" element={<Upload/>} />
     </Routes>
        
    </Fragment>
  );
}

export default App;
