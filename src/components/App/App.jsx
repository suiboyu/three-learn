import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";
import ScrollRoom from '../ScrollRoom/ScrollRoom';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scroll-room" element={<ScrollRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
