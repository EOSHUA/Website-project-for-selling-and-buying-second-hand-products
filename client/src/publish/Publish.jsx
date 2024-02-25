import React from "react";
import { useState,useEffect } from "react";
import assets from "../assets/assets.gif";
import axios from "axios";
import "./publish.css"

export default function UploadImage() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState([]);
  const [allCat, setAllCat] = useState([]);
  const [allSubCat, setAllSubCat] = useState([]);
  const [add, setAdd] = useState({
    category:"",
    subCategory:"",
    description:""
  });


  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function uploadSingleImage(base64) {
    setLoading(true);
    try {
      axios
        .post("http://localhost:5000/uploadImage", { image: base64 })
        .then((res) => {
          setUrl(res.data);
          alert("Image uploaded Succesfully");
        })
        .then(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }

  function uploadMultipleImages(images) {
    setLoading(true);
    axios.post("http://localhost:5000/uploadMultipleImages", { images })
      .then((res) => {
        const data = res.data.slice(",");
        console.log(data);
        console.log(url);
        alert("Image uploaded Succesfully");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  }

  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files.length);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      uploadSingleImage(base64);
      return;
    }

    const base64s = [];
    for (var i = 0; i < files.length; i++) {
      var base = await convertBase64(files[i]);
      base64s.push(base);
    }
    uploadMultipleImages(base64s);
  };

  function UploadInput() {
    return (
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <input
            onChange={uploadImage}
            id="dropzone-file"
            type="file"
            className="hidden"
            multiple
          />
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
             
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
        </label>
      </div>
    );
  }
  const getAllCat=(e)=>{
    setAdd({...add,category:e.target.value})
    try {
     e.target.value.length>0?
     axios.post('http://localhost:4545/guest/publish/getCat/',{
     cat:e.target.value
      }).then((response) => {setAllCat(response.data)}):setAllCat([])
  } catch (e) {
      console.log(e);
    }
  }
  const getAllSubCat=(e)=>{
    setAdd({...add,subCategory:e.target.value})
    try {
     e.target.value.length>0?
     axios.post('http://localhost:4545/guest/publish/getCat/sub',{
      cat:add.category,
      sub:e.target.value
      }).then((response) => {setAllSubCat(response.data)}):setAllSubCat([])
  } catch (e) {
      console.log(e);
    }
  }

  return (
    <div >
      <div className="publish">
      
          <div className="product"  >
            <br/>
            <br/>
            <span className="headerPublish">
              <p className="numIcon" >1</p>
              <h3 className="title">The product I want to give</h3>
           </span>
             <br/>
             <br/>
             <br/>
             <h2>category</h2>

              <input type="text" onChange={getAllCat} value={add.category} ></input>
               {allCat.map((cat, index) => (
            <p onClick={()=>setAdd({...add,category:cat.category}) & setAllCat([])}

            key={index}>{cat.category}</p> // Ensure your category objects have a 'category' field
          ))}
          <br/>
          <br/>
          <br/>
          <h2>subCategory</h2>
             <input type="text" onChange={getAllSubCat}  value={add.subCategory}></input>
               {allSubCat.map((sub, index) => (
            <p onClick={()=>setAdd({...add,subCategory:sub.category}) & setAllSubCat([])}
            key={index}>{sub.category}</p> // Ensure your category objects have a 'category' field
          ))}
           <br/>
          <br/>
          <br/>
          <h2>description</h2>
              <input type="t" onChange={(e)=>setAdd({...add,description:e.target.value})} value={add.description} >

              </input>
          <br/>
          <br/>
          <br/>
            {console.log(add)}
          </div>
       
          
          <div className="AddingPictures">
            <span className="headerPublish">
              <p className="numIcon" >3</p>
              <h3 className="title">Adding pictures</h3>
            </span>
            <br />
                <div >
                    {url && (
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {url}
                      </a>
                    )}
                </div>
                <div>
                {loading ? (
                  <div >
                    <img src={assets} />{" "}
                  </div>
                ) : (
                  <UploadInput />
                )}
                </div>
                  <br /><br /><br />
                  <img src={url} height="250px" width="400px"></img>
            </div>

            <div className="ContactInformation">
            <span className="headerPublish">
              <p className="numIcon" >4</p>
              <h3 className="title">Contact information</h3>
            </span>
            <p>Just before the ad is published, we would like to get to know you</p>

          </div>
      </div>
      <input type="submit"></input>
    </div>
  );
}
