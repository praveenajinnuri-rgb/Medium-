// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { LuPencilLine } from "react-icons/lu";
// import Sidebar from './Sidebar'
// import { MdOutlineBookmarkAdd } from "react-icons/md";

// function Home() {
//     var [data,setData]=useState([])
//     var navigate=useNavigate()
//     function functionNav() {
//         navigate("/Write")
        
//     }
//     async function fetchData() {
//         var result = await fetch("https://69281efeb35b4ffc501454ca.mockapi.io/blog")
//         var myResult=await result.json()
//         setData(myResult)
        
//     }
//     useEffect(()=>{fetchData()},[])
//     async function handleLibrary(myItem) {
//         var data=await fetch("https://69281efeb35b4ffc501454ca.mockapi.io/library",{
//             method:"POST",
//             headers:{
//                 "content-Type":"application/json"
//             },body:
//             JSON.stringify(myItem)
//         })
//         if(data.ok){
//             console.log("added to cart");
            
//         }else{
//             console.log("failed to add");
            
//         }
//     }
//     return(
//       <div>
//        <div id='icon' onClick={functionNav}> <LuPencilLine /></div>
//        <Sidebar/>
//        <div>
//         {
//             data.map((item)=>{
//                 return(
//                     <div>
//                         <h1>{item.myTitle}</h1>
//                         <h4>{item.myDescription}</h4>
//                         <button onClick={()=>handleLibrary(item)}><MdOutlineBookmarkAdd /></button>
//                     </div>
//                 )
//             })
//         }
//        </div>
        
//     </div>
//     )
// }
// export default Home


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { LuPencilLine } from "react-icons/lu";
// import { MdOutlineBookmarkAdd } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import Sidebar from "./Sidebar";
// import "./Home.css";

// function Home() {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   function goToWrite() {
//     navigate("/Write");
//   }

//   async function fetchData() {
//     const result = await fetch("https://69281efeb35b4ffc501454ca.mockapi.io/blog");
//     const myResult = await result.json();
//     myResult.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//     setData(myResult);
//   }

//   async function addToLibrary(item) {
//     const res = await fetch("https://69281efeb35b4ffc501454ca.mockapi.io/library", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(item),
//     });
//     if (res.ok) {
//       console.log("Added to library");
//     } else {
//       console.log("Failed to add");
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="home-container">
//       <div className="write-icon" onClick={goToWrite}>
//         <LuPencilLine />
//       </div>

    

//       <div className="blog-list">
//         {data.map((item) => (
//           <div className="blog-card" key={item.id}>
//             <div className="blog-header">
//               <CgProfile className="blog-profile-icon" />
//               <div className="blog-info">
//                 <h2 className="blog-title">
//                   {item.myTitle
//                     ? item.myTitle.split(" ").slice(0, 6).join(" ") +
//                       (item.myTitle.split(" ").length > 6 ? "..." : "")
//                     : "Untitled"}
//                 </h2>
//                 <p className="blog-desc">
//                   {item.myDescription
//                     ? item.myDescription.split(" ").slice(0, 20).join(" ") +
//                       (item.myDescription.split(" ").length > 20 ? "..." : "")
//                     : "No description yet."}
//                 </p>
//               </div>
//             </div>
//             <button className="bookmark-btn" onClick={() => addToLibrary(item)}>
//               <MdOutlineBookmarkAdd />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { LuPencilLine } from "react-icons/lu";
// import { MdOutlineBookmarkAdd } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import Sidebar from "./Sidebar";
// import "./Home.css";

// function Home() {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   function goToWrite() {
//     navigate("/Write");
//   }

//   async function fetchData() {
//     const result = await fetch(
//       "https://69281efeb35b4ffc501454ca.mockapi.io/blog"
//     );
//     const myResult = await result.json();
//     myResult.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//     setData(myResult);
//   }

//   async function addToLibrary(item) {
//     const res = await fetch(
//       "https://69281efeb35b4ffc501454ca.mockapi.io/library",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(item),
//       }
//     );
//     if (res.ok) console.log("Added to library");
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="home-wrapper">

//       {/* MAIN CONTENT */}
//       <div className="home-container">
//         {/* Write Button (top right) */}
//         <div className="write-icon" onClick={goToWrite}>
//           <LuPencilLine />
//         </div>

//         <div className="blog-list">
//           {data.map((item) => (
//             <div className="blog-card" key={item.id}>
//               <div className="blog-header">
//                 <CgProfile className="blog-profile-icon" />
//                 <div className="blog-info">
//                   <h2 className="blog-title">
//                     {item.myTitle
//                       ? item.myTitle.split(" ").slice(0, 12).join(" ") +
//                         (item.myTitle.split(" ").length > 12 ? "..." : "")
//                       : "Untitled"}
//                   </h2>

//                   <p className="blog-desc">
//                     {item.myDescription
//                       ? item.myDescription.split(" ").slice(0, 25).join(" ") +
//                         (item.myDescription.split(" ").length > 25 ? "..." : "")
//                       : "No description yet."}
//                   </p>
//                 </div>
//               </div>

//               <button
//                 className="bookmark-btn"
//                 onClick={() => addToLibrary(item)}
//               >
//                 <MdOutlineBookmarkAdd />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT SIDEBAR (optional) */}
//       <div className="right-side-box">
//         <h3 className="side-title">Staff Picks</h3>
//         <p className="side-small">Your feed will improve over time ✨</p>
//       </div>
//     </div>
//   );
// }

// export default Home;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { LuPencilLine } from "react-icons/lu";
// import { MdOutlineBookmarkAdd, MdOutlineBookmark } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import "./Home.css";

// function Home() {
//   const [data, setData] = useState([]);
//   const [libraryIds, setLibraryIds] = useState([]); 
//   const navigate = useNavigate();

//   function goToWrite() {
//     navigate("/Write");
//   }

//   async function fetchData() {
//     const result = await fetch("https://692d6606e5f67cd80a4b5759.mockapi.io/blog");
//     const myResult = await result.json();
//     myResult.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//     setData(myResult);
//   }

//   async function fetchLibrary() {
//     const res = await fetch("https://692d6606e5f67cd80a4b5759.mockapi.io/library");
//     const json = await res.json();
//     setLibraryIds(json.map((item) => item.blogId));  // track saved blogId
//   }

//   async function addToLibrary(item) {
//     if (libraryIds.includes(item.id)) return;

//     const newItem = {
//       blogId: item.id,
//       myTitle: item.myTitle,
//       myDescription: item.myDescription,
//       createdAt: new Date().toISOString(),
//     };

//     const res = await fetch("https://692d6606e5f67cd80a4b5759.mockapi.io/library", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newItem),
//     });

//     if (res.ok) {
//       setLibraryIds([...libraryIds, item.id]); 
//     }
//   }

//   useEffect(() => {
//     fetchData();
//     fetchLibrary();
//   }, []);

//   return (
//     <div className="medium-wrapper">

 
//       <div className="feed-section">

//         <div className="feed-top">
//           <h2 className="section-title">Your Feed</h2>

//           <div className="write-btn" onClick={goToWrite}>
//             <LuPencilLine />
//           </div>
//         </div>

//         <div className="blog-list">
//           {data.map((item) => (
//             <div className="blog-card" key={item.id}>
              
//               <div className="blog-header">
//                 <CgProfile className="avatar" />
//                 <span className="username">Author</span>
//               </div>

//               <h2 className="blog-title">
//                 {item.myTitle || "Untitled"}
//               </h2>

//               <p className="blog-desc">
//                 {item.myDescription || "No description available."}
//               </p>

//               <div className="card-footer">
                
//                 {libraryIds.includes(item.id) ? (
//                   <MdOutlineBookmark className="bookmark-btn added" />
//                 ) : (
//                   <MdOutlineBookmarkAdd
//                     className="bookmark-btn"
//                     onClick={() => addToLibrary(item)}
//                   />
//                 )}

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="right-sidebar">
//         <h3 className="right-title">Trending on Medium</h3>
//         <ul className="trending-list">
//           <li>• AI is changing everything</li>
//           <li>• Best career choices in 2025</li>
//           <li>• Improve your writing</li>
//           <li>• Web development tips</li>
//           <li>• Productivity hacks</li>
//         </ul>
//         <p className="right-footer">See more →</p>
//       </div>

//     </div>
//   );
// }

// export default Home;

// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { LuPencilLine } from "react-icons/lu";
// import Sidebar from './Sidebar'
// import { MdOutlineBookmarkAdd } from "react-icons/md";
// import "./Home.css"
// import { ToastContainer,toast } from 'react-toastify';

// function Home() {
//     var [data,setData]=useState([])
//     var navigate=useNavigate()
//     function functionNav() {
//         navigate("/Write")
        
//     }
//     async function fetchData() {
//         var result = await fetch("https://692d6606e5f67cd80a4b5759.mockapi.io/blog")
//         var myResult=await result.json()
//         setData(myResult)
        
//     }
//     useEffect(()=>{fetchData()},[])

//     async function handleLibrary(myItem) {
//         var data=await fetch("https://692d6606e5f67cd80a4b5759.mockapi.io/library",{
//             method:"POST",
//             headers:{
//                 "content-Type":"application/json"
//             },body:
//             JSON.stringify(myItem)
//         })
//         if(data.ok){
//           toast.success("added to blog")
           
            
//         }else{
//           toast.error("failed to add blog")
           
            
//         }
//     }
//     return(
//       <div>
//    <div id='icon' onClick={functionNav}>
//     <ToastContainer/>
//   <LuPencilLine />
// </div>


// <div className="blog-container">
//   {data.map((item) => (
//     <div className="blog-card">
//       <h1>{item.myTitle}</h1>
//       <h4>{item.myDescription}</h4>
//       <button onClick={() => handleLibrary(item)}>
//         <MdOutlineBookmarkAdd />
//       </button>
//     </div>
//   ))}
// </div>

        
//     </div>
//     )
// }
// export default Home
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";
import {
  MdOutlineBookmarkAdd,
  MdOutlineBookmark,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

function Home() {
  const [data, setData] = useState([]);
  const [library, setLibrary] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // <-- search state
  const navigate = useNavigate();

  function goToWrite() {
    navigate("/Write");
  }

  // FETCH BLOGS
  async function fetchData() {
    const res = await fetch(
      "https://692d6606e5f67cd80a4b5759.mockapi.io/blog"
    );
    const json = await res.json();

    json.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setData(json);
  }

  // FETCH LIBRARY
  async function fetchLibrary() {
    const res = await fetch(
      "https://692d6606e5f67cd80a4b5759.mockapi.io/library"
    );
    const json = await res.json();
    setLibrary(json);
  }

  // ADD TO LIBRARY
  async function addToLibrary(item) {
    const newItem = {
      blogId: item.id,
      myTitle: item.myTitle,
      myDescription: item.myDescription,
      createdAt: new Date().toISOString(),
    };

    const res = await fetch(
      "https://692d6606e5f67cd80a4b5759.mockapi.io/library",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      }
    );

    if (res.ok) {
      toast.success("Saved to Library");
      fetchLibrary();
    }
  }

  // REMOVE FROM LIBRARY
  async function removeFromLibrary(blogId) {
    const item = library.find((x) => x.blogId === blogId);
    if (!item) return;

    const res = await fetch(
      `https://692d6606e5f67cd80a4b5759.mockapi.io/library${item.id}`,
      { method: "DELETE" }
    );

    if (res.ok) {
      toast.warn("Removed from Library");
      fetchLibrary();
    }
  }

  useEffect(() => {
    fetchData();
    fetchLibrary();
  }, []);

  // FILTER BLOGS BASED ON SEARCH
  const filteredData = data.filter((blog) =>
    blog.myTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="medium-wrapper">
      <ToastContainer />

      <div className="feed-section">
        <div className="feed-top">
          <h2 className="section-title">Your Feed</h2>

          <div className="write-btn" onClick={goToWrite}>
            <LuPencilLine />
          </div>
        </div>

        {/* SEARCH BAR */}
        <input
          type="text"
          className="search-box"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="blog-list">
          {filteredData.map((item) => {
            const saved = library.some((x) => x.blogId === item.id);

            return (
              <div className="blog-card" key={item.id}>
                <div className="blog-header">
                  <CgProfile className="avatar" />
                  <span className="username">Author</span>
                </div>

                <h2 className="blog-title">{item.myTitle}</h2>

                <p className="blog-desc">{item.myDescription}</p>

                <div className="card-footer">
                  {saved ? (
                    <MdOutlineBookmark
                      className="bookmark-btn added"
                      onClick={() => removeFromLibrary(item.id)}
                    />
                  ) : (
                    <MdOutlineBookmarkAdd
                      className="bookmark-btn"
                      onClick={() => addToLibrary(item)}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
