import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className="sidebar-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;