import React from "react";
import { useState,useEffect } from "react";
import assets from "../assets/assets.gif";
import axios from "axios";
import "./publish.css"
import search from "./Photos/search.png";

export default function UploadImage() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState([]);
  const [allCat, setAllCat] = useState([]);
  const [allSubCat, setAllSubCat] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const [showList, setShowList] = useState(false);

  
  const [add, setAdd] = useState({
    category:"",
    subCategory:"",
    description:""
  });

  useEffect(() => {
    setCharCount(add.description.length);
  }, []);
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
        .post("http://localhost:4545/upload/uploadImage", { image: base64 })
        .then((res) => {
          setUrl(res.data);
          alert("Image uploaded Succesfully");
        }).then((response) => {console.log(response)})
        .then(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }

  function uploadMultipleImages(images) {
    setLoading(true);
    axios.post("http://localhost:4545/apload/uploadImage", { images })
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
  const getAllCat = (e) => {
    const inputValue = e.target.value; 
    setAdd({ ...add, category: inputValue });
    if (!inputValue) {
      setAllCat([]);
      setShowList(false);
      return;
    }
    axios.post('http://localhost:4545/guest/publish/getCat/', { cat: inputValue })
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setAllCat(response.data);
          setShowList(true); 
        } else {
          setAllCat([]);
          setShowList(false); 
        }
      })
      .catch((error) => {
        console.error(error);
        setAllCat([]);
        setShowList(false);
      });
  };
  
  const getAllSubCat=(e)=>{
    setAdd({...add,subCategory:e.target.value})
    try {
     e.target.value.length>0?
     axios.post('http://localhost:4545/guest/publish/getCat/sub',{
      cat:add.category,
      sub:e.target.value
      }).then((response) => {setAllSubCat(response.data)}):setAllSubCat([]); setShowList(true).then(()=>{setShowList(true)})
  } catch (e) {
      console.log(e);
    }
  }

  const onSubmit=()=>{

  }
  const handleDescriptionChange = (e) => {
    const newValue = e.target.value;
    setAdd({ ...add, description: newValue });
    setCharCount(newValue.length);
  };

  return (
    <div >
      <div className="publish">
        <div className="product">

            <br/><br/>

            <span className="headerPublish">
              <p className="numIcon" >1</p>
              <h3 className="title">The product I want to give</h3>
           </span>

             <br/><br/><br/>

             <h2>category</h2>
            <div className="inputWithIcon">
              <input
                className="inputPublish"
                type="text"
                onChange={getAllCat}
                value={add.category}
              />
              <img src={search} alt="Search" width={20} />
             </div >
             <div className={`listAllCat ${showList ? 'show' : ''}`}>
                {allCat.map((cat, index) => (
                <p onClick={()=>setAdd({...add,category:cat.category}) & setAllCat([]) & setShowList(false)}
               
                key={index}>{cat.category}</p> 
                ))} 
                {console.log(showList)}
            </div>

          <br/><br/><br/>

          <h2>subCategory</h2>
          <div className="inputWithIcon">
             <input   className="inputPublish" type="text" onChange={getAllSubCat}  value={add.subCategory}>
             </input>
             <img src={search} alt="Search" width={20} />
          </div>
          <div className={`listAllCat ${showList ? 'show' : ''}`}>
               {allSubCat.map((sub, index) => (
            <p onClick={()=>setAdd({...add,subCategory:sub.category}) & setAllSubCat([])  & setShowList(false)}
            key={index}>{sub.category}</p> 
          ))}
          </div>

          <br/><br/><br/>

          <h2>description</h2>
          <p className="LimitedDescription ">Limited to 200 characters only</p>
          <p className="maxLengthChar">{charCount}/400</p>
          <div className="inputWithIcon">
            <textarea  className="inputPublish inputDescription" type="text"
              onChange={(e)=>handleDescriptionChange(e)} 
              value={add.description} placeholder="Free Text"
              maxLength={400}>
            </textarea>
          </div>
          <p className="LimitedDescription ">Note! There is no need to add a phone number as part of the description</p>

          <br/><br/><br/>

        </div>

        <div className="AddingPictures">
            <span className="headerPublish">
              <p className="numIcon" >2</p>
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
                <p className="numIcon" >3</p>
                <h3 className="title">Contact information</h3>
              </span>
              <form onSubmit={onSubmit}>

                <br/><br/><br/>
            
              <input className="inputPublish inputContactInformation" type="text" placeholder="Name"/>

              <br/><br/><br/>
              
              <input  className="inputPublish inputContactInformation" type="text"  placeholder="City"/>

              <br/> <br/> <br/>

              <input  className="inputPublish inputContactInformation" type="number"  placeholder="Phone" />
            
              <br/><br/><br/>

                </form>
          </div>
      </div>
   <input type="submit" value="Published" class="submitBtn"/>

    </div>
  );
}
