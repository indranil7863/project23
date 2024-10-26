import React from "react"
import { useState } from "react"
import Input from "./component/Input";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Question from "./component/Questions";
import Result from "./component/Result";

function App() {
  const [name, changeName] = useState(" ");
  let [count, changeCount] = useState(0);
  let handleCount = () =>{
    changeCount(count+1);
  }
  console.log("name is: ", name);
  return (
    <>
      <Routes>
        <Route path={'/home'} element={<Home/>}
        />
        <Route path={'/questions'} element={<Question/>} />
        <Route path={'/result'} element={<Result/>} />
      </Routes>
   
    </>
  )
}

export default App


{/* <div>hello world
      <h2>enter your name:</h2>
      <input type="text" 
        placeholder="Enter your name"
        value={name}
        onChange={(e) => changeName(e.target.value)}
      /> */}

      // <Input placeholder="Enter your name" name={name} handleChange={changeName}/>
      // <button onClick={handleCount}>
      //   <h2>count: {count}</h2>
      // </button>