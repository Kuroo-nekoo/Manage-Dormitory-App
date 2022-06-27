import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
