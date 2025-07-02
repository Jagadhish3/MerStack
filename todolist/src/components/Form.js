import React,{useState} from "react";

function Form(){
    const [name,setName]=useState("");
    console.log("Form Component Rendered!");
    const handleChange =(e) =>{
        console.log(e);
        setName(e.target.value);
    };
    return (
        <main>
            <h1>Student Form</h1>
            <label htmlFor='Name'>Name: </label>
            <input value={name} placeholder="Name" type="text" onChange={handleChange}></input>
        </main>
    );
}

export default Form;