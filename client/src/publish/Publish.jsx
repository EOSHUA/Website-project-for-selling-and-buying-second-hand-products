import React, { useEffect, useState } from "react";
import axios from "axios";
import './publish.css'

export default function Publish() {
  const [userData, setUserData] = useState({});
  const [menu, setMenu] = useState({});

  useEffect(() => getAllTheCategory(), []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getAllTheCategory = (e) => {
    // try {
    //   const data = axios
    //     .get("http://localhost:3000/getAllTheCategory")
    //     .then((response) => setMenu(response));
    // } catch (e) {
    //   console.log(e);
    // }
  };

  
  const getAllTheSabCategory = (e) => {
    // try {
    //   setUserData({ ...userData, ['category']: e.target.value });
    //   const data = axios
    //     .get(`http://localhost:3000/getAllTheCategory/${e.target.value}`)
    //     .then((response) => setMenu(response));
    // } catch (e) {
    //   console.log(e);
    // }
  };
  return (
    <div className="publish-container" onSubmit={handleSubmit}>
      {Object.values(menu).map((cat, e) => {
        <div id="category-item" onClick={()=>getAllTheSabCategory(e)}>
          {cat}
        </div>;
      })}
      <form>
        <br />
        <label>city </label>

        <br />
        <label>
          picture
          <input type="file" id="image" onChange={handleChange} />
        </label>
        <br />

        <input type="submit" value="Submit"  className="publish-form" />
      </form>
    </div>
  );
}
