// import React, { useState } from 'react'
// import{ToastContainer,toast} from 'react-toastify'

// function Write() {
//     var [title,setTitle] = useState("")
//     var [description,setDescription]=useState("")
//     async function sendData() {
//         if(title.length == 0 && description.length==0){
//             toast.error("fill the details")
//         }else{
//              var formData={
//                 myTitle:title,
//                 myDescription:description
//              }
//              var result= await fetch("https://69281efeb35b4ffc501454ca.mockapi.io/blog",{
//                 method:"POST",
//                 headers:{
//                     "content-Type":"application/json"
//                 },body:JSON.stringify(formData)
//              })
//              if(result.ok){
//                 toast.success("Blog added")
//                 setTitle("")
//                 setDescription("")
//              }
//         }
//     }
//     return(
        
//     <div>
//     <ToastContainer/>
//         <div>
//         <label htmlFor="">Enter Title</label>
//         <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" />
//         <label htmlFor="">Enter Description</label>
//         <input value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text" />
//         <button onClick={sendData}>Add Blog</button>
//         </div>

//     </div>
    
//     )
// }
// export default Write

import React, { useEffect, useState } from "react";
import "./Write.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Write() {
  const API = "https://692d6606e5f67cd80a4b5759.mockapi.io/blog";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch all stories
  async function getStories() {
    const res = await fetch(API);
    const result = await res.json();
    setData(result);
  }

  useEffect(() => {
    getStories();
  }, []);

  // Add New Story
  async function addStory() {
    if (!title.trim() && !description.trim()) {
      toast.error("Enter title or story");
      return;
    }

    const payload = {
      myTitle: title,
      myDescription: description,
    };

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      toast.success("Added!");
      setTitle("");
      setDescription("");
      getStories();
    }
  }

  // Select story to edit
  function editStory(item) {
    setTitle(item.myTitle);
    setDescription(item.myDescription);
    setEditId(item.id);
  }

  // Update Story
  async function updateStory() {
    if (!editId) return;

    const payload = {
      myTitle: title,
      myDescription: description,
    };

    const res = await fetch(`${API}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      toast.success("Updated!");
      setTitle("");
      setDescription("");
      setEditId(null);
      getStories();
    }
  }

  // Delete Story
  async function deleteStory(id) {
    const res = await fetch(`${API}/${id}`, { method: "DELETE" });

    if (res.ok) {
      toast.success("Deleted!");
      getStories();
    }
  }

  return (
    <div className="mini-container">
      <ToastContainer position="top-center" />

      <h2 className="head">Writing on Medium...</h2>

      {/* INPUT SECTION */}
      <div className="box">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />

        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea"
        ></textarea>

        {editId ? (
          <button className="update-btn" onClick={updateStory}>
            Update
          </button>
        ) : (
          <button className="add-btn" onClick={addStory}>
            Add
          </button>
        )}
      </div>

      {/* LIST SECTION */}
      <div className="list">
        {data.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.myTitle}</h3>
            <p>{item.myDescription}</p>

            <div className="actions">
              <FaPencilAlt
                className="icon edit"
                onClick={() => editStory(item)}
              />
              <MdDelete
                className="icon delete"
                onClick={() => deleteStory(item.id)}
                
              />
              <button className="publish-btn">Publish</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Write;
