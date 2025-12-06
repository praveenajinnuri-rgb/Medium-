// import React from 'react'
// function Sidebar() {
//   return (
//     <div>Sidebar</div>
//   );
// }

// export default Sidebar;   

import React from "react";
import { CgProfile } from "react-icons/cg";
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";
import { RiBookOpenLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/", icon: <RiBookOpenLine /> },
  
    { name: "Profile", path: "/Profile", icon: <CgProfile /> },
    { name: "Stories", path: "/Stories", icon: <RiBookOpenLine /> },
     { name: "Library", path: "/Library", icon: <MdOutlineBookmarkAdd /> },
    { name: "Stats", path: "/Stats", icon: <FiBarChart2 /> },
   
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">Medium</div>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`sidebar-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <Link to={item.path}>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
