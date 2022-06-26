import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
