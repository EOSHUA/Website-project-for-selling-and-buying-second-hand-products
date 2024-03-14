import { useState, useEffect, useContext } from "react";
import axios from "axios";
import './userItems.css';
import { memberContext } from "../layout/Layout";

export default function UserItems() {
  const { memberConnected, setMemberConnected } = useContext(memberContext);
  const [myItems, setMyItems] = useState([]);





  
  useEffect(() => {
    axios.get(`http://localhost:4545/items/getMyAds`, { memberConnected:memberConnected.userName})
      .then((response) => {
        setMyItems(response.data);   
      })
      .catch((error) => {
        console.error("There was an error fetching the ads:", error);
      });
  }, [setMyItems]);

  const handleEdit = (itemId) => {
    
  };

  const handleDelete = (itemId) => {
    
  };

  return (
    <div className="user-items-container">
      <h2 className="user-items-title">Your ads</h2>
      <div className="items-list">
        {myItems.length > 0 ? (
          myItems.map((item, index) => (
            <div key={index} className="item">
              <h3>{item.title}</h3> 
              <p>{item.description}</p>
              <button onClick={() => handleEdit(item.id)} className="edit-btn">Edit</button>
              <button onClick={() => handleDelete(item.id)} className="delete-btn">Delete</button>
            </div>
          ))
        ) : (
          <p>No ads to display</p>
        )}
      </div>
    </div>
  );
}