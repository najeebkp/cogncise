import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Auth from "./components/Auth";
import MainView from "./components/MainView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<MainView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
