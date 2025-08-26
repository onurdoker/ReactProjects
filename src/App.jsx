import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./assets/pages/Home.jsx";
import Project1 from "./assets/pages/Project1.jsx";
import Project2 from "./assets/pages/Project2.jsx";

// import Project2 from "./pages/Project2";

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
          </Routes>
        </div>
      </Router>
  );
}

export default App;