import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-between p-4">
        <li>
          <NavLink to="/news" className="px-4 py-2 hover:underline">
            Newsfeed
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className="px-4 py-2 hover:underline">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/opinion" className="px-4 py-2 hover:underline">
            Opinion
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="px-4 py-2 hover:underline">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
