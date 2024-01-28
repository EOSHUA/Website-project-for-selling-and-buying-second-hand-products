import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Publish() {
  const [userData, setUserData] = useState({});
  const [menu, setMenu] = useState({});

  useEffect(() => getAllTheCategory(), []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  const getAllTheCategory = (e) => {
    try {
      const data = axios
        .get("http://localhost:3000/getAllTheCategory")
        .then((response) => setMenu(response));
    } catch (e) {
      console.log(e);
    }
  };
  const getAllTheSabCategory = (subCategory) => {
    try {
      setUserData({ ...userData, ["category"]: e.target.value });
      const data = axios
        .get(`http://localhost:3000/getAllTheCategory/${subCategory}`)
        .then((response) => setMenu(response));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div onSubmit={handleSubmit}>
      {Object.values(menu).map((cat, e) => {
        <div id="category" onClick={getAllTheSabCategory(e.target.value)}>
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

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
