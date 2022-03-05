import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateCard from "./pages/CreateCard";
import Library from "./pages/Library";
import Practice from "./pages/Practice";
function App() {
  return (
    
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/createcard" element={<CreateCard />} />
        <Route path="/library" element={<Library />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </Router>
    
  );
}

export default App;
