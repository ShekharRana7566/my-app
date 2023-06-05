import React, {useState} from 'react';


export default function Form(props) {
    const [text,setText]= useState('');

    const handleUpClick =()=>{
// console.log("uppercase clicked");
let newText= text.toUpperCase();
setText(newText);
props.showAlert('Converted to UpperCase', 'success');
    }
    const handleLowClick =()=>{

let newText= text.toLowerCase();
setText(newText);
props.showAlert('Converted to LowerCase', 'success');
    }   

    const handleOnChange =(event)=>{

setText(event.target.value)

    } 
    const handleClear =()=>{

setText('');
props.showAlert('Text Area cleared', 'success');

    } 
    const handleCopy =()=>{
let text=document.getElementById("Box");
navigator.clipboard.writeText(text.value);
props.showAlert('Copied to Clipboard', 'success');
    } 
    const handleExtraSpaces =()=>{
let newText=text.split(/[ ]+/);
setText(newText.join(" "));
props.showAlert('Extra Spaces Removed', 'success');
    } 



  return (
    <div className='mx-5'>
    <div className='container' style={{color:props.mode==='light'?'#03062e':'white'}} >


        <h2>{props.heading}</h2>

     <div className="mb-3">
  <textarea className="form-control" value={text} style={{ backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'grey':'white'}} onChange={handleOnChange} rows="8" id="Box"></textarea>
  
</div>

 <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
 <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
 <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
 <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
 <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'#03062e':'white'}}>
    <h2>Your Text Summary</h2>
<p> {text.split(" ").length} words and {text.length} characters</p>
<p> Time to read {0.008*text.split(" ").length} minutes</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in text area above to preview it here"}</p>
    </div>
    </div>
  )
}
