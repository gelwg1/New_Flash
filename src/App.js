import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateCard from "./pages/CreateCard";
import Library from "./pages/Library";
import Practice from "./pages/Practice";
function App() {
  return (
    
    <Router>
      <Nav />
      <div class="container">
      <Routes>
        <Route exact path="/New_Flash" element={<Homepage />} />
        <Route path="/New_Flash/createcard" element={<CreateCard />} />
        <Route path="/New_Flash/library" element={<Library />} />
        <Route path="/New_Flash/practice" element={<Practice />} />
        <Route exact path="/" element={<Navigate replace to="/New_Flash" />} />
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
