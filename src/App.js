import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Components; 
import {Header, Footer} from "./components";

// import Pages; 
import {Home, Contact, Login, Register, Reset} from "./pages";

// 2:19 mins
 
function App() {
  return (
    <>
    <BrowserRouter>  
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={ <Contact/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/reset" element={<Reset/>}/>
        </Routes>
      <Footer/>

    </BrowserRouter>
    </>
  );
} 

export default App;
