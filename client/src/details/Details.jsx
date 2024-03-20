import React, { useContext, useState } from "react";
import { memberContext } from "../layout/Layout";
import './details.css'; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const { memberConnected ,setMemberConnected } = useContext(memberContext);
  const navigate = useNavigate();
  const [newdata, setNewdata] = useState({
    Username: memberConnected.userName,
    Email: memberConnected.email,
    Password: memberConnected.password
   
  });

  const [isEditing, setIsEditing] = useState({
    Username: false,
    Email: false,
    Password: false,
   
  });

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: true });
    // נוסף לכך, יש לעדכן את המערכת כך שתאפשר שמירה או ביטול של העריכה
  };

  const handleSave = (field) => {
    setIsEditing({ ...isEditing, [field]: false });
    // פה תהיה הגדרת הלוגיקה לשמירת השינויים לשרת או מקור הנתונים
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
      try {
        console.log("trry");
         await axios.post(`http://localhost:4545/member/deleteMember`,{
          userId: memberConnected.userId
         });
        
         setMemberConnected({userName:""})
         const temp ={userName:"user not logged in"}
         // localStorage.removeItem("currentUser")
          localStorage.setItem(
           "currentUser",
           JSON.stringify(temp))
        navigate("/guest");  
      } catch (error) {
        console.error("Failed to delete account:", error);
        alert("There was an issue deleting your account.");
      }
    }
  };

  return (
    <div className="details-container">
      <h3 className="details-title">Your details</h3>
      
      <p>Hello, {newdata.Username}</p>

      <form className="details-form" onSubmit={(e) => e.preventDefault()}>
        {Object.entries(newdata).map(([field, value]) => (
          <div key={field} className="details-field">
            <label htmlFor={field}>{field}:</label>
            <input
              id={field}
              // type={field === "Password" ? "password" : "text"}
              value={value}
              disabled={!isEditing[field]}
              onChange={(e) => setNewdata({ ...newdata, [field]: e.target.value })}
            />
            {isEditing[field] ? (
              <button type="button" onClick={() => handleSave(field)} className="edit-btn">
                Save
              </button>
            ) : (
              <button type="button" onClick={() => handleEditClick(field)} className="edit-btn">
                Edit
              </button>
            )}
          </div>
        ))}
         <button className="delete-account-btn" onClick={handleDeleteAccount}>
        Delete Account
      </button>
      </form>
    </div>
  );
}
