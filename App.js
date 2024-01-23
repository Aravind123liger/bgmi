import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homes from "./Components/Homes";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignupForm from "./routes/SignupForm";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<SignupForm/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/homes" element={<Homes/>}/>
      </Routes>
    </div>
  );
}

export default App;
