import {Link} from "react-router-dom";

function Home() {
  return (
      <div className="main">
        <h1>Main Page</h1>
        <ul>
          <li>
            <Link to="/project1">Project 1. Changing Font Size</Link>
          </li>
          <li>
            <Link to="/project2">Project 2. Changing Text Color</Link>
          </li>
          <li>
            <Link to="/project3">Project 3.</Link>
          </li>
          <li>
            <Link to="/project4">Project 4. Slider</Link>
          </li>
          <li>
            <Link to="/project5">Project 5. Rock, Paper, Scissors</Link>
          </li>
          <li>
            <Link to="/project6">Project 6. Dice Game </Link>
          </li>


        </ul>
      </div>
  );
}

export default Home;
