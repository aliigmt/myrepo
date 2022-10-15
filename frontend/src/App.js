import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Abouts from './Components/Abouts';
import Login from './Components/Login';
import  Alert  from './Components/Alert';
import NoteSatate from './Contex/notes/NoteState';
import Signup from './Components/Signup';

function App() {
  const[alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
   }

  return (
     <div className="App">
      <NoteSatate>
       <BrowserRouter>
         <NavBar />
         <Alert alert={alert} />
         <div className="container">
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Abouts/>}></Route>
          <Route path="/login" element={<Login showAlert={showAlert} />}></Route>
          <Route path="/signup" element={<Signup showAlert={showAlert}  />}></Route>
          </Routes>
          </div>
        </BrowserRouter>
        </NoteSatate>
     </div>
  );
}

export default App;
