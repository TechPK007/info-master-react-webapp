import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/Users/AddUser";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/users/add" exact element={<AddUser />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
