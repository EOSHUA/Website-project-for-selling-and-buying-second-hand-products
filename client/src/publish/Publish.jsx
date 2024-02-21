import React from "react";
import { useState } from "react";
import assets from "../assets/assets.gif";
import axios from "axios";
import "./publish.css"

export default function UploadImage() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState([]);

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
    axios
      .post("http://localhost:5000/uploadMultipleImages", { images })
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

  return (
    <div >
      <div>
        <h2 >
          Upload Photo
        </h2>
      </div>
      <div>
        {url && (
          <div>
            
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </div>
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
      <br />
      <br />
      <br />

      <img src={url} height="100px" width="200px"></img>
    </div>
  );
}
