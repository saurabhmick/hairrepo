import logo from './logo.svg';
import './Components/style.css';
import './App.css';
import Header from './Components/Header';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Error from './Components/Error';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>

    <Route exact path='/' element={<Header/>}></Route>
    <Route exact path='/signup' element={<Signup/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='*' element={<Error/>}></Route>
    
   </Routes>
   
   
   
   </BrowserRouter>
  
   </>
  );
}

export default App;
