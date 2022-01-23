import React,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to uppercase!","success");
        
    } 
    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted to lowercase!","success");
    }
    const handleCopy= ()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard","success");
        
    }
    const handleClearText= ()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text cleared!","success")
       
    }

    function handleCapitalizeClick() {
        let CapitalizeWords = text[0].toUpperCase();
        for (let i = 1; i <= text.length - 1; i++) {
            let currentCharacter, previousCharacter = text[i - 1];
            if (previousCharacter && previousCharacter === ' ') {
                currentCharacter = text[i].toUpperCase();
            } else {
                currentCharacter = text[i];
            }
            CapitalizeWords = CapitalizeWords + currentCharacter;
        }
        setText(CapitalizeWords);
        props.showAlert("First letter capitalized!","success")

    } 
    const handleOnChange= (event)=>{
        setText(event.target.value);
    } 
    const [text,setText]= useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#343a40',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCapitalizeClick}>Capitalize First letter</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="conatiner my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your text Summary </h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
       
        
        
    )
}
