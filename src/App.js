import {
  BrowserRouter as Router,
   Route,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.js'
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Service from "./components/Service.js";
import Home from "./components/Home.js";
function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home name="venky"/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
  );
}

export default App;
