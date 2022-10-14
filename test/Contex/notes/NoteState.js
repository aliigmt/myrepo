import { useState } from "react";
import NoteContext from "./noteContext";

const  NoteSatate=(props)=>{
    const s1={
        "name":"alii",
        "class":"A61"
    }
    const[state,setState]=useState(s1);
    const update=()=>{
        setTimeout(()=>{
          setState({
             "name":"alisha",
             "class":"B61"
          })
        },1000)
    }
 return(
    <NoteContext.Provider value={{state,update}}>
      {props.children}  
    </NoteContext.Provider>
 )
};

export default NoteSatate;