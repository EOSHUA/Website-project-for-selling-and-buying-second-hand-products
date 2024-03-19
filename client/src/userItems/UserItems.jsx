import { useState, useEffect, useContext } from "react";
import axios from "axios";
import './userItems.css';
import { memberContext } from "../layout/Layout";

export default function UserItems() {
  const { memberConnected, setMemberConnected } = useContext(memberContext);
  const [myItems, setMyItems] = useState([]);
  const [activityAds, setActivityAds] = useState("");





  useEffect(() => {
    axios.post(`http://localhost:4545/items/getMyAds`, { memberConnected:memberConnected.
    userId
    })
      .then((response) => {
        setMyItems(response.data);   
      })
      .catch((error) => {
        console.error("There was an error fetching the ads:", error);
      });
  }, [activityAds]);


  const handleDelete = (item) => {
    axios.delete(`http://localhost:4545/items/delete`, { 
      data: { itemId: item }
    })
    .then((response) => {
      setActivityAds("");   
    })
    .catch(error => {
      console.error(error.response?.data?.message ?? "An error occurred");
    });
  };
  

  return (
    <div className="user-items-container">
      <h2 className="user-items-title">Your ads</h2>
      <div className="items-list">
        {myItems.length > 0 ? (
          myItems.map((item, index) => (
            <div key={index} className="item">
              <img src={item.image} width="200px" height="100px"/> 
              <p>{item.description}</p>
              <p>{item.productStatus}</p>
              <button onClick={() => handleDelete(item._id)} className="delete-btn">Delete</button>
            </div>
          ))
        ) : (
          <p>No ads to display</p>
        )}
      </div>
    </div>
  );
}