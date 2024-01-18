import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Categories() {
  const [menu, setMenu] = useState({});
  useEffect(() => {
    try {
      axios.get(`http://localhost:5173/categories`).then(() => setMenu(menu));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return <div>Categories</div>;
}
