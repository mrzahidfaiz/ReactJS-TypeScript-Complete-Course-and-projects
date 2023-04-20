import React, { useState } from "react";

import Axios from 'axios';
const Contact=() =>{
const url = "http://localhost:4000/contacts/add"
const [data, setData]= useState({
  name: "",
  email: "",
  message: "",
})
function submit(e){
e.preventDefault();
Axios.post(url,{
  name: data.name,
  email: data.email,
  message: data.message
})
.then(res=>{
  console.log(res.data)
})

}

function handle(e){
  const newData = {...data}
  newData[e.target.id] = e.target.value
  setData(newData)
  console.log(newData)

}
    return(
    <div> <h1> Contact us</h1>
      <form onSubmit={(e)=> submit(e)}>
        <input onChange={(e)=> handle(e)} id="name" value={data.name} placeholder="Name" type="text"></input> <br></br>
        <input onChange={(e)=> handle(e)} id="email" value={data.email} placeholder="Email" type="email"></input><br></br>
        <input onChange={(e)=> handle(e)} id="message" value={data.message}  placeholder="Message" type="text"></input><br></br>
        <button className="formButton"> Submit</button>
      </form>
    </div>
    )
}
export default Contact;