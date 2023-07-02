import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React , { useState } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  const [mode , setMode] = useState('light');
 
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      showAlert("Dark Mode has been Enabled" , "Success") 
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
      document.title='Dark -Mode'
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      document.title = 'Light -Mode'
      showAlert("Light mode has been enabled" , "success")

    }
  }
 
  const [alert , setAlert] = useState(null)
  const showAlert=(message , type)=>{
      setAlert({
        msg:message,
        type:type

      })
      setTimeout(()=>{
        setAlert(null);
      }, 1500)
  }
  return (
    <>

<BrowserRouter>
<Navbar title="TextUtils" about="about text" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>

<Routes>
                 <Route exact path='/' element={ <Textform heading="Enter your text to analyze" showAlert={showAlert}/>}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                
          </Routes>
</BrowserRouter>

    </>
  );
}

export default App;
