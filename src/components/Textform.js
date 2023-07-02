import React , {useState} from 'react'

export default function Textform(props) {
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    const handleUpClick=()=>{
       
        setText(text.toUpperCase())
        props.showAlert("converted to uppercase" , "success")
    }
    const handleLoClick=()=>{
       
        setText(text.toLowerCase())
        props.showAlert("converted to lowercase" , "success")
    }
    const handleClearClick=()=>{
      setText("");
      props.showAlert("text has been cleared" , "success")
    }
    const [text , setText] = useState("Enter your text");
  return (
    <>
    <div className='container'>
      
  <div className="mb-3">
    <h1>{props.heading}</h1>
    
    <textarea className='form-control' value={text} onChange={handleOnChange} id = "myBox" rows="8" ></textarea>
    
  </div>
  <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to upper case</button>
  <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to lower case</button>
  <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
  

    </div>
    <div className="container my-4">
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} total words</p>
      <p>{text.length} total characters</p>
      <p>{text.split(" ").length/125} Minutes to read </p>
      <h3>Preview:-</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
