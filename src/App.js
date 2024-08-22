import {
  BrowserRouter as Router,
   Route,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.js'
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Service from "./components/Project.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import Resume from "./components/Resume.js";
function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home name="venky"/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/resume' element={<Resume/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
