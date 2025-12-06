// import React, { useEffect, useState } from 'react'

// const Library = () => {
//     var [data,setData] = useState([])
//     async function fetchData(){
//         var result = await fetch("https://6926d71726e7e41498fbc87b.mockapi.io/library")
//         var myResult = await result.json()
//         setData(myResult)
//     }
//     useEffect(()=>{
//         fetchData()
//     },[])
//   return (
//     <div>
//         {
//             data.map((item)=>{
//                 return(
//                     <div>
//                         <h1>{item.myTitle}</h1>
//                         <h5>{item.myDescription}</h5>
//                     </div>
//                 )
//             })
//         }

//     </div>
//   )
// }

// export default Library

// import React, { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import "./Library.css";

// const Library = () => {
//   const [data, setData] = useState([]);
//   const [activeTab, setActiveTab] = useState("savedLists");

//   async function fetchData() {
//     try {
//       const result = await fetch(
//         "https://692d6606e5f67cd80a4b5759.mockapi.io/library"
//       );
//       const json = await result.json();
//       setData(json);
//     } catch (err) {
//       console.log("Fetch Error:", err);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const tabData = {
//     savedLists: data.filter((item) => item.saved === true),
//     yourLists: data.filter((item) => item.type === "list"),
//     highlights: [],
//     history: [],
//     responses: [],
//   };

//   const currentList =
//     activeTab === "yourLists"
//       ? tabData.yourLists
//       : activeTab === "highlights"
//       ? tabData.highlights
//       : activeTab === "history"
//       ? tabData.history
//       : activeTab === "responses"
//       ? tabData.responses
//       : tabData.savedLists;

//   return (
//     <div className="library-wrapper">
     

//       <div className="library-content">
//         <h1 className="library-title">Your library</h1>

//         <div className="library-tabs">
//           <button
//             className={activeTab === "yourLists" ? "active" : ""}
//             onClick={() => setActiveTab("yourLists")}
//           >
//             Your lists
//           </button>

//           <button
//             className={activeTab === "savedLists" ? "active" : ""}
//             onClick={() => setActiveTab("savedLists")}
//           >
//             Saved lists
//           </button>

//           <button
//             className={activeTab === "highlights" ? "active" : ""}
//             onClick={() => setActiveTab("highlights")}
//           >
//             Highlights
//           </button>

//           <button
//             className={activeTab === "history" ? "active" : ""}
//             onClick={() => setActiveTab("history")}
//           >
//             Reading history
//           </button>

//           <button
//             className={activeTab === "responses" ? "active" : ""}
//             onClick={() => setActiveTab("responses")}
//           >
//             Responses
//           </button>
//         </div>

       
//         <div className="story-list">
//           {currentList.length > 0 ? (
//             currentList.map((item) => (
//               <div className="story-card" key={item.id}>
//                 <h2 className="story-title">{item.title}</h2>
//                 <p className="story-desc">{item.description}</p>
//               </div>
//             ))
//           ) : (
//             <p className="empty-msg">Nothing to show here yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Library;


import React, { useEffect, useState } from 'react';
import "./Library.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from './Sidebar';

const Library = () => {
    const [data, setData] = useState([]);

    async function fetchData() {
        const res = await fetch("https://692d6606e5f67cd80a4b5759.mockapi.io/library");
        const json = await res.json();
        setData(json);
    }

    async function handleDelete(id) {
        try {
            await fetch(`https://692d6606e5f67cd80a4b5759.mockapi.io/library/${id}`, {
                method: "DELETE",
            });

            setData(prev => prev.filter(item => item.id !== id));
            toast.warn("Removed from Library");
        } catch (error) {
            toast.error("Delete failed!");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="library-wrapper">

          

            <div className="library-main">

                <h2 className="lib-heading">Your Saved Stories</h2>

                <div className="library-list">
                    {data.map((item) => (
                        <div className="library-card" key={item.id}>
                            
                            <h2 className="lib-title">{item.myTitle}</h2>
                            
                            <p className="lib-desc">{item.myDescription}</p>

                            <button 
                                className="remove-btn"
                                onClick={() => handleDelete(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={1500} />
        </div>
    );
};

export default Library;
