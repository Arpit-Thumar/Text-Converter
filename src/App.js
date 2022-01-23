import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';




function App() {
    const [mode,setMode]=useState('light');
    const [alert,setAlert]=useState('null');

    const showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
            setAlert('null')
            
        }, 1500);

    }
   
    const toggleMode =()=>{
        if(mode==='light'){
            setMode('dark');
            document.body.style.backgroundColor='#343a40'
            showAlert("Dark mode enabled","success");
            //showAlert("Dark mode has been enabled","success")
        }
        else{
            setMode('light');
            document.body.style.backgroundColor='White'
            showAlert("Light mode enabled","success");
        }
    }
    return (
        <div>
            <>
            <Navbar title="TextUtils" home="Home" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className ="container my-3">
             <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>  
            </div>
            </>

        </div>
    )
    
}

export default App;

