import { useState } from "react";
import NoteContext from "./noteContext";

const  NoteSatate=(props)=>{
  const host = "http://localhost:5000"
  const noteStateInitial =[]
  const [notes, SetNotes]=useState(noteStateInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0N2RlZDE3MmEzMDAxYzQ1OTczNTBjIn0sImlhdCI6MTY2NTY1NTUyN30.3A71Sd2y5TZkZ83lo_bnpkv8D3muLKvx9FwnuuodSPo"
      }
    });
    const json = await response.json() 
    SetNotes(json)
  }

  // Add a Note
  const addNotes = async (title, description) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type':'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0N2RlZDE3MmEzMDAxYzQ1OTczNTBjIn0sImlhdCI6MTY2NTY1NTUyN30.3A71Sd2y5TZkZ83lo_bnpkv8D3muLKvx9FwnuuodSPo"
      },
      body: JSON.stringify({title,description})
    });

    const note = await response.json();
    SetNotes(notes.concat(note))
  }



// Delete Notes
const DeleteNotes=(id)=>{

  const newNotes = notes.filter((note) => { return note._id !== id })
  SetNotes(newNotes)
  console.log("delete user",id)

}

// Edit Notes
const EditNotes= async (id,title,description,tag)=>{

  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0N2RlZDE3MmEzMDAxYzQ1OTczNTBjIn0sImlhdCI6MTY2NTc0NjgyMX0.F_QFsZ2lk-ZI8ngXQHMADAD4W1hzD5fGpdL62ppu_S4"
    },
    body: JSON.stringify({title, description, tag}) 
  });

  const json = await response.json(); 
  let newNotes = JSON.parse(JSON.stringify(notes))

  for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];
    if (element._id === id) {
      newNotes[index].title = title;
      newNotes[index].description = description;
      newNotes[index].tag = tag; 
      break; 
    }
  }
  SetNotes(newNotes);

}


 return(
    <NoteContext.Provider value={{notes,addNotes,DeleteNotes,EditNotes,getNotes}}>
      {props.children}  
    </NoteContext.Provider>
 )
};

export default NoteSatate;