import {Link} from "react-router-dom";

function Home() {
  return (
      <div>
        <h1>Main Page</h1>
        <ul>
          <li><Link to="/project1">Changing Font Size</Link></li>
          <li><Link to="/project2">Changing Background Color</Link></li>
          <li><Link to="/project2">Project 2</Link></li>
        </ul>
      </div>
  );
}

export default Home;