// // import React from 'react'
// // import { CgProfile } from "react-icons/cg";

// // function Profile() {
// //     return(
// //         <div>
// //             <div id='icon' onClick={functionNav}><CgProfile /></div>
// //         <h1>Java Script</h1>
// //         <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, temporibus praesentium nisi amet alias ipsam, cumque quae enim earum, deserunt quod delectus consequatur laboriosam doloremque accusamus. Fugiat vitae ex inventore!</h5>
// //         </div>
// //     )
    
// // }
// // export default Profile

// import React from "react";
// import { CgProfile } from "react-icons/cg";
// import Sidebar from "./Sidebar";
// import "./ProfileWithSidebar.css";

// function ProfileWithSidebar() {
//   return (
//     <div className="profile-page">
//       <Sidebar />

//       <div className="profile-content">
//         <div className="profile-card">
//           <div className="profile-icon">
//             <CgProfile />
//           </div>
//           <h1 className="profile-name">Java Script</h1>
//           <p className="profile-bio">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, temporibus praesentium nisi amet alias ipsam, cumque quae enim earum, deserunt quod delectus consequatur laboriosam doloremque accusamus. Fugiat vitae ex inventore!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfileWithSidebar;

// import React, { useState } from "react";
// import { CgProfile } from "react-icons/cg";
// import { FaSignInAlt, FaSignOutAlt, FaEdit, FaCamera } from "react-icons/fa";
// import "./Profile.css";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [editing, setEditing] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     bio: "",
//     photo: ""
//   });

//   const handleLogin = () => {
//     const fakeUser = {
//       name: "Jane Doe",
//       email: "jane.doe@example.com",
//       bio: "Writer, Developer, and Medium Enthusiast.",
//       photo: ""
//     };
//     setUser(fakeUser);
//     setForm(fakeUser);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setEditing(false);
//   };

//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // 👉 HANDLE PHOTO UPLOAD
//   const handlePhotoUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageURL = URL.createObjectURL(file); // creates preview link
//       setForm({ ...form, photo: imageURL });
//     }
//   };

//   const handleSave = () => {
//     setUser(form);
//     setEditing(false);
//   };

//   return (
//     <div className="profile-container">

//       <div className="profile-card">
//         <h1 className="heading">Your Profile</h1>

//         {/* Profile Picture Section */}
//         <div className="photo-wrapper">
//           {form.photo ? (
//             <img src={form.photo} alt="Profile" className="photo" />
//           ) : (
//             <CgProfile className="default-icon" />
//           )}

//           {/* Camera button for uploading */}
//           {user && (
//             <>
//               <button className="camera-btn">
//                 <label htmlFor="photo-upload">
//                   <FaCamera />
//                 </label>
//               </button>

//               <input
//                 id="photo-upload"
//                 type="file"
//                 accept="image/*"
//                 style={{ display: "none" }}
//                 onChange={handlePhotoUpload}
//               />
//             </>
//           )}
//         </div>

//         {editing ? (
//           <div className="edit-section">

//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleInputChange}
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleInputChange}
//             />

//             <textarea
//               name="bio"
//               placeholder="Your Bio"
//               value={form.bio}
//               onChange={handleInputChange}
//             />

//             <button className="black-btn" onClick={handleSave}>Save</button>
//           </div>
//         ) : (
//           <div className="info-section">
//             <h2>{user?.name || "Guest User"}</h2>
//             <p className="email">{user?.email}</p>
//             <p className="bio">{user?.bio || "Login to see details"}</p>

//             {user && (
//               <button className="black-btn" onClick={() => setEditing(true)}>
//                 <FaEdit /> Edit Profile
//               </button>
//             )}
//           </div>
//         )}

//         {!user ? (
//           <button className="black-btn" onClick={handleLogin}>
//             <FaSignInAlt /> Login
//           </button>
//         ) : (
//           <button className="black-btn" onClick={handleLogout}>
//             <FaSignOutAlt /> Logout
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Profile;
// import React, { useState, useRef } from "react";
// import AvatarEditor from "react-avatar-editor";
// import { CgProfile } from "react-icons/cg";
// import { FaSignInAlt, FaSignOutAlt, FaEdit, FaCamera } from "react-icons/fa";
// import "./Profile.css";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [editing, setEditing] = useState(false);
//   const [photoEditorOpen, setPhotoEditorOpen] = useState(false);
//   const [imageFile, setImageFile] = useState(null);
//   const [zoom, setZoom] = useState(1.4);

//   const editorRef = useRef(null);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     bio: "",
//     photo: ""
//   });

//   const handleLogin = () => {
//     const fakeUser = {
//       name: "Jane Doe",
//       email: "jane.doe@example.com",
//       bio: "Writer, Developer, and Medium Enthusiast.",
//       photo: ""
//     };
//     setUser(fakeUser);
//     setForm(fakeUser);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setEditing(false);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // 📌 Handle selecting new image
//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setPhotoEditorOpen(true);
//     }
//   };

//   // 📌 Save cropped image
//   const handleSaveCroppedImage = () => {
//     if (editorRef.current) {
//       const canvas = editorRef.current.getImageScaledToCanvas().toDataURL();
//       setForm({ ...form, photo: canvas });
//       setPhotoEditorOpen(false);
//     }
//   };

//   const handleSave = () => {
//     setUser(form);
//     setEditing(false);
//   };

//   return (
//     <div className="profile-container">

//       <div className="profile-card">
//         <h1 className="heading">Your Profile</h1>

//         {/* Photo Display */}
//         <div className="photo-wrapper">
//           {form.photo ? (
//             <img src={form.photo} alt="Profile" className="photo" />
//           ) : (
//             <CgProfile className="default-icon" />
//           )}

//           {user && (
//             <>
//               <button className="camera-btn">
//                 <label htmlFor="photo-upload">
//                   <FaCamera />
//                 </label>
//               </button>

//               <input
//                 id="photo-upload"
//                 type="file"
//                 accept="image/*"
//                 style={{ display: "none" }}
//                 onChange={handlePhotoUpload}
//               />
//             </>
//           )}
//         </div>

//         {/* Photo Editor Modal */}
//         {photoEditorOpen && (
//           <div className="photo-editor-modal">
//             <div className="editor-box">
//               <AvatarEditor
//                 ref={editorRef}
//                 image={imageFile}
//                 width={200}
//                 height={200}
//                 border={50}
//                 borderRadius={200}
//                 scale={zoom}
//               />

//               <input
//                 type="range"
//                 min="1"
//                 max="3"
//                 step="0.1"
//                 value={zoom}
//                 onChange={(e) => setZoom(parseFloat(e.target.value))}
//               />

//               <button className="black-btn" onClick={handleSaveCroppedImage}>
//                 Save Photo
//               </button>
//               <button
//                 className="black-btn"
//                 onClick={() => setPhotoEditorOpen(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         {editing ? (
//           <div className="edit-section">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//             />

//             <textarea
//               name="bio"
//               placeholder="Your Bio"
//               value={form.bio}
//               onChange={handleChange}
//             />

//             <button className="black-btn" onClick={handleSave}>
//               Save
//             </button>
//           </div>
//         ) : (
//           <div className="info-section">
//             <h2>{user?.name || "Guest User"}</h2>
//             <p className="email">{user?.email}</p>
//             <p className="bio">{user?.bio || "Login to see your details"}</p>

//             {user && (
//               <button className="black-btn" onClick={() => setEditing(true)}>
//                 <FaEdit /> Edit Profile
//               </button>
//             )}
//           </div>
//         )}

//         {!user ? (
//           <button className="black-btn" onClick={handleLogin}>
//             <FaSignInAlt /> Login
//           </button>
//         ) : (
//           <button className="black-btn" onClick={handleLogout}>
//             <FaSignOutAlt /> Logout
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Profile;
// import React, { useState } from "react";
// import { CgProfile } from "react-icons/cg";
// import { FaEdit } from "react-icons/fa";
// import "./Profile.css";
// import Sidebar from "./Sidebar";

// function Profile() {
//   const [user, setUser] = useState({
//     name: "Your Name",
//     email: "youremail@gmail.com",
//     photo: null,
//   });

//   const [editing, setEditing] = useState(false);
//   const [form, setForm] = useState({
//     name: user.name,
//     email: user.email,
//     photo: user.photo,
//   });

//   function handleFileChange(e) {
//     const file = e.target.files[0];
//     if (file) {
//       const imageURL = URL.createObjectURL(file);
//       setForm({ ...form, photo: imageURL });
//     }
//   }

//   function handleSave() {
//     setUser(form);
//     setEditing(false);
//   }

//   return (
//     <div className="profile-wrapper">
     

//       <div className="profile-container">
//         <h1 className="heading">Profile</h1>

//         <div className="profile-card">
//           {/* PROFILE IMAGE */}
//           <div className="profile-image-section">
//             <img
//               src={editing 
//                 ? form.photo || "https://via.placeholder.com/120"
//                 : user.photo || "https://via.placeholder.com/120"}
//               alt="Profile"
//               className="profile-photo"
//             />

//             {editing && (
//               <label className="upload-btn">
//                 Change Photo
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   hidden
//                 />
//               </label>
//             )}
//           </div>

//           {/* DETAILS */}
//           <div className="profile-details">
//             {!editing ? (
//               <>
//                 <h2>{user.name}</h2>
//                 <p>{user.email}</p>

//                 <button className="black-btn" onClick={() => setEditing(true)}>
//                   <FaEdit /> Edit Profile
//                 </button>
//               </>
//             ) : (
//               <>
//                 <input
//                   className="input-field"
//                   value={form.name}
//                   onChange={(e) =>
//                     setForm({ ...form, name: e.target.value })
//                   }
//                   placeholder="Enter Name"
//                 />

//                 <input
//                   className="input-field"
//                   value={form.email}
//                   onChange={(e) =>
//                     setForm({ ...form, email: e.target.value })
//                   }
//                   placeholder="Enter Email"
//                 />

//                 <div className="btn-row">
//                   <button className="black-btn" onClick={handleSave}>
//                     Save
//                   </button>
//                   <button
//                     className="cancel-btn"
//                     onClick={() => setEditing(false)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
import React, { useState, useRef } from "react";
import { FaEdit, FaCamera } from "react-icons/fa";
import "./Profile.css";

function Profile() {
  const [editing, setEditing] = useState(false);

  // Resize + Drag States
  const [zoom, setZoom] = useState(1.2);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Convert uploaded image → Base64 (so it stays after refresh)
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  // User Data
  const [user, setUser] = useState({
    name: "Praveena",
    email: "pravee@gmail.com",
    bio: "Writer • Developer • Medium Enthusiast",
    photo: "",
    banner: "",
  });

  const [form, setForm] = useState(user);

  const handleEditToggle = () => {
    setForm(user);
    setEditing(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Upload Banner (With Base64)
  const handleBannerUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await toBase64(file);
      setForm({ ...form, banner: base64 });
    }
  };

  // Upload Profile Photo (With Base64)
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await toBase64(file);
      setForm({ ...form, photo: base64 });
    }
  };

  // Drag Functionality for Photo
  const handleMouseDown = (e) => {
    setDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // Save all profile data
  const handleSave = () => {
    setUser(form);
    localStorage.setItem("profileData", JSON.stringify(form)); // <-- stored permanently
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  // Load user data from localStorage on first render
  React.useEffect(() => {
    const savedUser = localStorage.getItem("profileData");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setForm(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div
      className="profile-main-wrapper"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* MAIN PROFILE CARD */}
      <div className="profile-large-card">
        {/* PROFILE PHOTO EDITOR */}
        <div className="pfp-section">
          <div
            className="pfp-frame"
            onMouseDown={editing ? handleMouseDown : null}
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt="Profile"
                className="pfp-image"
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                }}
              />
            ) : (
              <div className="default-pfp">No Image</div>
            )}
          </div>

          {/* Profile Photo Controls */}
          {editing && (
            <>
              <label className="upload-btn" htmlFor="photoUpload">
                <FaCamera /> Change Photo
              </label>
              <input
                id="photoUpload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handlePhotoUpload}
              />

              <label className="size-label">Zoom</label>
              <input
                type="range"
                min="1"
                max="2.5"
                step="0.01"
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="size-slider"
              />
            </>
          )}
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="details-section">
          {editing ? (
            <>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="input-field"
                placeholder="Your Name"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input-field"
                placeholder="Your Email"
              />

              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                className="input-field"
                rows="4"
              />

              <div className="button-row">
                <button className="black-btn" onClick={handleSave}>
                  Save Changes
                </button>
                <button className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="profile-name">{user.name}</h1>
              <p className="profile-email">{user.email}</p>
              <p className="profile-bio">{user.bio}</p>

              <button className="black-btn" onClick={handleEditToggle}>
                <FaEdit /> Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
