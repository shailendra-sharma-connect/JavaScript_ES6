import React,{ useState, useEffect } from "react";

function SearchBox(){
const [inputValue, setInputValue] = useState("");
const [debouncedValue, setDebouncedValue] = useState("");

useEffect(()=>{
    const timer = setTimeout(()=>{
        setDebouncedValue(inputValue);
    },1000);
},[inputValue]);

useEffect(()=>{
    if(debouncedValue){
        console.log("API Call with:", debouncedValue);
        //API Calls
    };
},[debouncedValue]);

return(
    <div>
        <input type="text" 
        placeholder="Search..." 
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        />
        <p>Typing: {inputValue}</p>
        <p>debouncing: {debouncedValue}</p>
    </div>
);
}
export default SearchBox;