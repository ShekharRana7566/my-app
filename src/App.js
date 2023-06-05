
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);

}


  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#03062e';
      showAlert("Dark Mode enabled",'success');
      document.title='TextUtils - Dark Mode';
  }
    else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode enabled",'success');
    document.title='TextUtils - Home';
  }
  }
  return (
    <>
     <Router>
  <Navbar title="TextApp" mode={mode} toggleMode= { toggleMode } />
  <Alert alert={alert}/>
  
  <div className="container my-3">
  <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Form heading= "Enter Text to Analyse" mode={mode} showAlert={showAlert}/>}/>
           
        </Routes>
  </div>
  </Router>
  </>
  );
}

export default App;
