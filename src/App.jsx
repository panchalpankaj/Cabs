import "./App.css";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Home from "./Component/Comon/Home";
import About from "./Component/Comon/About"
import Contact from "./Component/Comon/Contact"
import Login from "./Component/Comon/Userlogin";
import Signin from "./Component/Comon/Venderlogin";
import URegister from './Component/Comon/Userregistration';
import VRegistration from './Component/Comon/Venderregistration'
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Signup" element={<Signin/>}></Route>
      <Route path="/UserRegistration" element={<URegister/>}></Route>
      <Route path="/VenderRegistration" element={<VRegistration/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
