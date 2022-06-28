import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserControlPanel from "./pages/UserControlPanel";
import Test from "./pages/Test";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/user/control-panel" element={<UserControlPanel></UserControlPanel>}></Route>
        <Route path="/user/room-registation" element={<Register></Register>}></Route>
        <Route path="/test" element={<Test></Test>}></Route>
      </Routes>
    </div>
  );
}

export default App;
