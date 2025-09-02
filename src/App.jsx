import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import Project1 from "./components/Project1/Project1.jsx";
import Project2 from "./components/Project2/Project2.jsx";
import Project3 from "./components/Project3/Project3.jsx";
import Project4 from "./components/Project4/Project4.jsx";
import Project5 from "./components/Project5/Project5.jsx";
import Project6 from "./components/Project6/Project6.jsx";

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/"
                   element={<Home/>}/>
            <Route path="/project1"
                   element={<Project1/>}/>
            <Route path="/project2"
                   element={<Project2/>}/>
            <Route path="/project3"
                   element={<Project3/>}/>
            <Route path="/project4"
                   element={<Project4/>}/>
            <Route path="/project5"
                   element={<Project5/>}/>
            <Route path="/project6"
                   element={<Project6/>}/>
          </Routes>


        </div>
      </Router>
  );
}

export default App;
