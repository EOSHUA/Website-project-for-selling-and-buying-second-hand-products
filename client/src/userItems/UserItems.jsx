import React, { useEffect, useState } from "react";
import axios from "axios";
import './userItems.css'

export default function UserItems() {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4545/items/getMyAds`)
      .then((response) => {
        setMyItems(response.data);   
      })
      .catch((error) => {
        console.error("There was an error fetching the ads:", error);
      });
  }, []);

  return (
    <div className="user-items-container">
      <h2 className="user-items-title">המודעות שלי</h2>
      <div className="items-list">
        {myItems.length > 0 ? (
          myItems.map((item, index) => (
            <div key={index} className="item">
              <h3>{item.title}</h3> 
              <p>{item.description}</p>
             
            </div>
          ))
        ) : (
          <p>אין מודעות להצגה</p>
        )}
      </div>
    </div>
  );
}
