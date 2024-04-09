import "./App.css";
import "react-toastify/ReactToastify.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route exact path="/card" element={<Card />} />
          <Route path="/not-found" element={<PageNotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
