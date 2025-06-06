import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from './pages/About.js';
import Plans from './pages/Plans.js';
import Home from './pages/Home.js';

function App() {
  return (
<Router>
      <Routes>
        <Route exact path = "/" Component={Home}/>
        <Route path = "/About" Component={About}/>
        <Route path = "/Plans" Component={Plans}/>
      </Routes>
    </Router>

    
  );
}

export default App;
