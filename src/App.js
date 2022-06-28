import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import UserControlPanel from "./pages/UserControlPanel/UserControlPanel";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="user/control-panel"
          element={<UserControlPanel></UserControlPanel>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
