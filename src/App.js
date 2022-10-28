import { Route,Routes,BrowserRouter } from "react-router-dom";
import Events from "./pages/events";
import Landing from "./pages/landing";
import OurTeam from "./pages/team";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/events" element={<Events/>} />
        <Route exact path="/team" element={<OurTeam/>} />
        
        {/* Default path */}
        <Route exact path="/*" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
