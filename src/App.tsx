import "./App.css";
import ManageMessage from "./components/messages/ManageMessage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/register/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<ManageMessage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
