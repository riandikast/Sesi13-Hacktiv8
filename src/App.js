import { Routes, Route } from "react-router-dom";
import "./App.css";
import Post from "./pages/PostPages";


import NavBar from "./component/Navbar";

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Post></Post>} />

      </Routes>
    </div>
  );
}

export default App;
