'use client';
import { useState } from "react";

export default function LoginStatus(){
  const[isLoggedIn, setIsLoggedIn] = useState(false)

  let message
  let button

  if (isLoggedIn){
    message = <p>Welcome back user </p>
    button  = <button onClick={() =>setIsLoggedIn(true)}Logout></button>
  }else{
    message = <p>please log into continue</p>
    button =<button onClick={()=>setIsLoggedIn(true)}>Login</button>
  }

  return(
     <div style={{ padding: '30px', textAlign: 'center' }}>
      <h2>Login Demo</h2>
      {message} 
      {button}
     </div>
  )
}