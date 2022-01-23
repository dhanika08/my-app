import React, {useState} from 'react';

export default function TextForm(props) {
    const handleClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("On changed");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    return (
      <>
        <div className="container">
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-10 mx-10" onClick={handleClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-10 my-10" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        
        <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
</>
);
  
}
