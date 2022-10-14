import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Abouts from './Components/Abouts';
import Login from './Components/Login';
import  Alert  from './Components/Alert';
import NoteSatate from './Contex/notes/NoteState';

function App() {
  return (
     <div className="App">
      <NoteSatate>
       <BrowserRouter>
         <NavBar />
         <Alert message="This is amazing React course" />
         <div className="container">
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<Abouts/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          </Routes>
          </div>
        </BrowserRouter>
        </NoteSatate>
     </div>
  );
}

export default App;
