import { React, useContext , useState} from "react";
import { memberContext} from "../layout/Layout"


export default function Details() {
  const {memberConnected,setMemberConnected}=useContext(memberContext);
  const [newdata,setNewdata] = useState({
    Username: memberConnected,
    Email: memberConnected,
    Password: memberConnected
  })
console.log(memberConnected);
  
  const onSubmit=(e)=>{
console.log("submited");

  }

  
  return (
  <>

  
  <h3>details</h3>
  <p>Hello {memberConnected}</p>



      
  </>
  )
}
