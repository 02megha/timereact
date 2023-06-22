
import React from "react";
import { useState } from "react";
import './index.css';

const App = () => {
  
 let  newTime = new Date () .toLocaleTimeString();
 const [ ctime, setCtime ] = useState(newTime);
const UpdateTime = () => {
 let newTime = new Date () .toLocaleTimeString();
  setCtime(newTime);
}
return(
  <>
    <h1> {newTime} </h1>
   <button onClick = { UpdateTime}> GET TIME </button>
  </>
)
};

export default App;
