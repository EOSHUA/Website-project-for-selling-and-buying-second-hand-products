import React from "react";
import { useState, useEffect, useContext } from "react";
import assets from "../assets/assets.gif";
import axios, { AxiosError } from "axios";
import "./publish.css";
import search from "./Photos/search.png";
import UploadImage from "./UploadImage";
import { memberContext } from "../layout/Layout";
import Cookies from "js-cookie";

export default function Publish() {
  const { memberConnected, setMemberConnected } = useContext(memberContext);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState([]);
  const [allCat, setAllCat] = useState([]);
  const [allSubCat, setAllSubCat] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const [showList, setShowList] = useState(false);

  const [add, setAdd] = useState({
    category: "",
    subCategory: "",
    description: "",
    userId: "",
    city: "",
    phone: "`",
    name: "",
    userName:"",
    productStatus:""
  });

  useEffect(() => {
    setCharCount(add.description.length);
  }, []);

  
  const getAllCat = (e) => {
    const inputValue = e.target.value;
    setAdd({ ...add, category: inputValue });
    if (!inputValue) {
      setAllCat([]);
      setShowList(false);
      return;
    }
    axios
      .post("http://localhost:4545/guest/publish/getCat/", { cat: inputValue })
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

  const getAllSubCat = (e) => {
    setAdd({ ...add, subCategory: e.target.value });
    try {
      e.target.value.length > 0
        ? axios
            .post("http://localhost:4545/guest/publish/getCat/sub", {
              cat: add.category,
              sub: e.target.value,
            })
            .then((response) => {
              setAllSubCat(response.data);
            })
        : setAllSubCat([]);
      setShowList(true).then(() => {
        setShowList(true);
      });
    } catch (e) {
      console.log(e);
    }
  };

const preparationToSend= async() =>{
  
   await axios
    .post("http://localhost:4545/guest/getIds", {
      subCategoryName: add.subCategory,
    })
    .then((response) => {
       console.log(response);
       setSubmitValues({
        ...add,
        subCategory: response.data[0]._id,
        category: response.data[0].parentId,
        userId: memberConnected.userId,
        userName:memberConnected.userName
      });
      
    });

}
  const [submitValues,setSubmitValues]=useState();
  const [isInitialRender, setIsInitialRender] = useState(true);

useEffect(()=>{
  if (!isInitialRender) {
    console.log(submitValues);
   axios.post("http://localhost:4545/items/creatItem",{ 
    item: submitValues,
    headers: {
      Authorization: "Bearer " + Cookies.get("auth"),
    },
   })}
   else{
     setIsInitialRender(false);
   }

  },[submitValues])
 

  const onSubmit = async () =>  {
    console.log(memberConnected);
     
   
      
      preparationToSend()
      
  //     axios
  //      .post("http://localhost:4545/items/creatItem", {
  //        item: add,
  //       })})
  //      .then((response) => {
  //        console.log(response);
  //      });
  //  } catch (error) {
  //   console.log(error);
  //  }
 };
      console.log(add);

  const handleDescriptionChange = (e) => {
    const newValue = e.target.value;
    setAdd({ ...add, description: newValue });
    setCharCount(newValue.length);
  };
  console.log(add);
  return (
    <div>
      <div className="publish">
        <div className="product">
          <br />
          <br />

          <span className="headerPublish">
            <p className="numIcon">1</p>
            <h3 className="title">The product I want to give</h3>
          </span>

          <br />
          <br />
          <br />

          <h2>category</h2>
          <div className="inputWithIcon">
            <input
              className="inputPublish"
              type="text"
              onChange={getAllCat}
              value={add.category}
            />
            <img src={search} alt="Search" width={20} />
          </div>
          <div className={`listAllCat ${showList ? "show" : ""}`}>
            {allCat.map((cat, index) => (
              <p
                onClick={() =>
                  setAdd({ ...add, category: cat.category }) &
                  setAllCat([]) &
                  setShowList(false)
                }
                key={index}
              >
                {cat.category}
              </p>
            ))}
          </div>

          <br />
          <br />
          <br />

          <h2>subCategory</h2>
          <div className="inputWithIcon">
            <input
              className="inputPublish"
              type="text"
              onChange={getAllSubCat}
              value={add.subCategory}
            ></input>
            <img src={search} alt="Search" width={20} />
          </div>
          <div className={`listAllCat ${showList ? "show" : ""}`}>
            {allSubCat.map((sub, index) => (
              <p
                onClick={() =>
                  setAdd({ ...add, subCategory: sub.category }) &
                  setAllSubCat([]) &
                  setShowList(false)
                }
                key={index}
              >
                {sub.category}
              </p>
            ))}
          </div>

          <br />
          <br />
          <br />

          <h2>product status</h2>
         
          <div className="inputWithIcon">
            <select
              className="inputPublish inputDescription"
              type="text"
              required='true'
             
              onClick={(e) => setAdd({ ...add, productStatus: e.target.value })}
            >
            <option value="">cush product status</option>
            <option value="prefect">New</option>
            <option value="good">Good</option>
            <option value="used">Used</option>
            <option value="defective">Defective</option>
            </select>
          </div>
          <br />
          <br />
          <br />

          <h2>description</h2>
          <p className="LimitedDescription ">Limited to 200 characters only</p>
          <p className="maxLengthChar">{charCount}/400</p>
          <div className="inputWithIcon">
            <textarea
              className="inputPublish inputDescription"
              type="text"
              onChange={(e) => handleDescriptionChange(e)}
              value={add.description}
              placeholder="Free Text"
              maxLength={400}
            ></textarea>
          </div>
          <p className="LimitedDescription ">
            Note! There is no need to add a phone number as part of the
            description
          </p>

          <br />
          <br />
          <br />
        </div>

        <div className="AddingPictures">
          <span className="headerPublish">
            <p className="numIcon">2</p>
            <h3 className="title">Adding pictures</h3>
          </span>
          <br />
          <div>
            <UploadImage Add={add} setadd={setAdd} />
          </div>
        </div>

        <div className="ContactInformation">
          <span className="headerPublish">
            <p className="numIcon">3</p>
            <h3 className="title">Contact information</h3>
          </span>
          <form>
            <br /> <br /> <br />
            <input
              className="inputPublish inputContactInformation"
              type="text"
              placeholder="Name"
              onChange={(e) => setAdd({ ...add, name: e.target.value })}
            />
            <br />  <br /> <br />
            <input
              className="inputPublish inputContactInformation"
              type="text"
              placeholder="City"
              onChange={(e) => setAdd({ ...add, city: e.target.value })}
            />
            <br /> <br /> <br />
            <input
              className="inputPublish inputContactInformation"
              type="number"
              placeholder="Phone"
              onChange={(e) => setAdd({ ...add, phone: e.target.value })}
            />
            <br /><br /> <br />
          </form>
        </div>
      </div>
      <input
        type="submit"
        value="Published"
        class="submitBtn"
        onClick={onSubmit}
      />
    </div>
  );
}
