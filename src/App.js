
import "./App.css";
import BgComponent from "./Component/BgComponent";
import NavBar from "./Component/NavBar";

import Footer from "./Component/Footer";
import Login from "./Component/Login";
import Register from "./Component/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <BgComponent/>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    </Routes>
<Footer/>

    </>
  );
}

export default App;
