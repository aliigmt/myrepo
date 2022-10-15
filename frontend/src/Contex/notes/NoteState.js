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
        "auth-token":localStorage.getItem('token')
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
      headers: {
        'Content-Type':'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title,description})
    });

    const note = await response.json();
    SetNotes(notes.concat(note))
  }



// Delete Notes
const DeleteNotes= async (id)=>{
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      }
    });
    const json = response.json(); 
    const newNotes = notes.filter((note) => { return note._id !== id })
    SetNotes(newNotes)
}

// Edit Notes
const EditNotes= async (id,title,description,tag)=>{
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json(); 

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
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