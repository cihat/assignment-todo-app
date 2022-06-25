import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Home />} />
          <Route exact path="/*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
