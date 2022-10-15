import React, {useState,useContext } from "react";
import noteContext from "../Contex/notes/noteContext";

const AddNote = (props) => {
    const context=useContext(noteContext);
    const {addNotes}=context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleclick=(e)=>{
        e.preventDefault();
        addNotes(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})

    }

    const onChange =(e) =>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
    <div>
      <div className="container my-3">
        <h2>Add A Note</h2>
        <form>
          <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
          <label htmlFor="description" className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Description"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
          <label htmlFor="tag" className="form-label">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="Tag"
              onChange={onChange}
            />
          </div>

          <br />
          <button type="submit"  onClick={handleclick} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
