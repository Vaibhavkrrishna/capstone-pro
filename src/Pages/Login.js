import React from 'react'
import {useState} from 'react'

export default function Login() {
  let [show,setShow] = useState(true);
  return (
    <div>
      <button onClick={()=>{
        setShow(!show)
      }}>Login</button>
    </div>
  )
}
