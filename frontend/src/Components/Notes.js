import React, { useContext } from "react";
import noteContext from "../Contex/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
const context=useContext(noteContext);
const {notes,getNotes}=context;
  return (
    <div>
       <AddNote />
       <div className="row my-3">
        <h2>Your Notes</h2>
        { notes.map((note) => {
          return <NoteItem key={note._id} note={note} />
        })}
      </div>
    </div>
  );
};

export default Notes;
