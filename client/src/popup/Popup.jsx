import { useState , useEffect ,SyntheticEvent, useContext } from 'react';

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { CardContext } from "./Layout";
import axios from 'axios';
import { Link,  useNavigate} from 'react-router-dom';


function EditEmployee() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
//   const { cartItem, setCartItem } = useContext(CardContext);
  const [item,setItem] = useState({});
  const navigate = useNavigate();



// useEffect (() => {setShow(true),
//   axios.get(`https://jbh-mockserver.onrender.com/items/${idItem}`)
//   .then((response) =>setItem(response.data))
// },[])


//   const handelPlus = () => {
//     try {
//       if (cartItem==undefined||cartItem[idItem]==undefined) {
//         setCartItem({ ...cartItem, [idItem]: { ...item, amount: 1 } });
//       } else {
//         setCartItem({
//           ...cartItem,
//           [idItem]: { ...item, amount: cartItem[idItem].amount + 1 },
//         });
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleMinus = () => {
//     if (cartItem && cartItem[idItem].amount > 0) {
//         setCartItem({
//           ...cartItem,
//           [idItem]: { ...item, amount: cartItem[idItem].amount - 1 },
//         });
//         return
//     } else {
//       setCartItem({ ...cartItem, [idItem]: { ...item, amount: 0 } });
      
//     }
//     if(cartItem[idItem].amount = 1){
//       deleteCartItem()  
//   }  
//   };
//   const deleteCartItem =() => {
//     let updatedCartItem  = {...cartItem}
//     delete updatedCartItem [idItem]
//     return  setCartItem(updatedCartItem ) ;
//   }

  return (
    <div>
      {/* <Button variant='warning'  className='btn btn-outline-secondary btn-sm '  onClick={handleShow}>
        click my 
      </Button> */}

      {/* <Modal
       
        show={show}
        onHide={handleClose}
         backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header className='text-center'  >
          <Modal.Title>descreption</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
        <img class="img_ULj" src="https://images.quik.co.il/general-assets/imgs/product/nutrients/sugar.svg"
         title="סוכר בכמות גבוהה" alt="סוכר בכמות גבוהה" width="20%"></img>

           <h1>{item.name}</h1>
          <h3>{item.price}</h3> 
        
         <p>
         הנתונים המדויקים מופיעים על גבי המוצר, 
         אין להסתמך על הפירוט המופיע באתר, 
         יתכנו טעויות או אי התאמות, יש לקרוא את המופיע על גבי אריזת המוצר לפני השימוש.
          התמונות והתאריכים המופיעים הינם להמחשה בלבד ואין להסתמך עליהם.
         </p>
        <img src={item.image}width="100%" ></img>

<br></br>
        <img class="img_ULj imgKosher_Vmc" 
        src="https://images.quik.co.il/general-assets/imgs/product/kashrut/הרבנות הראשית לישראל.png" 
        title="הרבנות הראשית לישראל" alt="הרבנות הראשית לישראל"></img>
       
        <span>כשרות</span>



        </Modal.Body>
       <Modal.Footer className='text-center'>
<Link to='..' relative='path' style={{ fontSize:'xx-large', textDecoration:'none', marginRight:'50%'}}>↪</Link>
       <button
          className=" btn btn-outline-secondary btn-sm "
          onClick={handelPlus}
        >
          ➕
        </button>
        <span>
          {cartItem && cartItem[idItem]
            ? cartItem[idItem].amount
            : "הוסף לעגלה"}
        </span>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={handleMinus}
          >
          ➖
        </button>
       </Modal.Footer >
       
      </Modal> */}
    </div>
  );
}

export default EditEmployee;