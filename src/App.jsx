import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Island from "./pages/Island";
import ScrollRoom from "./pages/ScrollRoom";
import Halloween from "./pages/Halloween";
import TableConfigurator from "./pages/TableConfigurator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/island" element={<Island />} />
        <Route path="/scroll-room" element={<ScrollRoom />} />
        <Route path="/halloween" element={<Halloween />} />
        <Route path="/table-configurator" element={<TableConfigurator />} />
      </Routes>
    </Router>
  );
}

export default App;
