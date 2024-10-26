// const Input = ({placeholder, name, handleChange}) =>{
//     return (
//         <div>
//             <h2>Enter your name:</h2>
//             <input type="text" 
//                 placeholder={placeholder}
//                 value={name}
//                 onChange={(e) => handleChange(e.target.value)}
//             />
//         </div>
//     )
// }
import { useState, memo } from "react";

const Input = memo(({ name, handleChange}) =>{
    return (
        <div>
            <h2>Enter your name:</h2>
            <input type="text" 
                placeholder="Enter name"
                value={name}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
})
export default Input;