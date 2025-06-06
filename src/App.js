import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from './pages/About.js';
import Plans from './pages/Plans.js';
import Home from './pages/Home.js';
import Terms from './pages/Terms.js';
import Privacy from './pages/Privacy.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/plans" Component={Plans} />
        <Route path="/terms" Component={Terms} />
        <Route path="/privacy" Component={Privacy} />
      </Routes>
    </Router>
  );
}

export default App;
