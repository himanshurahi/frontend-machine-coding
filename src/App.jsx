import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pagination } from "./pages/Pagination/index";
import { MemoryGame } from "./pages/MemoryGame";
import { PollWidget } from "./pages/PollWidget";
import { GridLights } from "./pages/GridLights";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/memory-game" element={<MemoryGame />} />
        <Route path="/poll-widget" element={<PollWidget />} />
        <Route path="/grid-lights" element={<GridLights />} />
      </Routes>
    </Router>
  );
}

export default App;
