// import React, { useEffect, useState } from 'react'


// function Stories() {
// var [data,setData]=useState([])
// async function fetchData() {
//     var result=await fetch("https://69281efeb35b4ffc501454ca.mockapi.io/blog")
//     var myResult=await result.json()
//     setData(myResult)
// }
// useEffect(()=>{fetchData()},[])

//     return(
// <div>
//         {
//             data.map((item)=>{
//                 return(
//                     <div>
//                         <h1>{item.myTitle.split(" ").slice(0,2)}</h1>
//                         <h5>{item.myDescription.split(" ").slice(0,5)}</h5>
//                     </div>
//                 )
//             })
//         }

//     </div>
//     )
// }
// export default Stories

import React, { useEffect, useState } from 'react';
import Sidebar from "./Sidebar";
import './Stories.css';
import { CgProfile } from "react-icons/cg";

function Stories() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const result = await fetch("https://692d6606e5f67cd80a4b5759.mockapi.io/blog");
    const myResult = await result.json();
    setData(myResult);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="stories-page">

      

      <div className="stories-container">
        {data.map((item) => (
          <div className="story-card" key={item.id}>

            {/* Top user info */}
            <div className="story-header">
              <CgProfile className="profile-icon" />
              <div>
                <h4 className="author-name">pravee</h4>
                <span className="story-meta">
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  })}
                  · {Math.floor(item.myDescription.split(" ").length / 20)} min read
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="story-title">
              {item.myTitle.split(" ").slice(0, 12).join(" ")}
            </h2>

            {/* Description */}
            <p className="story-description">
              {item.myDescription.split(" ").slice(0, 25).join(" ")}...
            </p>

            {/* Tag + Read more */}
            <div className="story-footer">
              <span className="story-tag">Technology</span>

              <button className="read-more-btn">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Stories;
