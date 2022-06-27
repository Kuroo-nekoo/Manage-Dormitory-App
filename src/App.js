import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
