import { React, useContext , } from "react";
import { memberContext} from "../layout/Layout"


export default function Details() {
  const {memberConnected,setMemberConnected}=useContext(memberContext);

  


  
  return (
  <>

  
  <h3>details</h3>
  <p>Hello {memberConnected}</p>


      
  </>
  )
}
