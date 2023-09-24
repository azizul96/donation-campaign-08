import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 mt-10">
        <div>
            <img className="h-16" src="/Logo.png" alt="" />
        </div>
      <nav>
        <ul  className="font-bold flex gap-5">
            <li>
                <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                isActive ? "text-[#FF444A] underline " : isPending ? "pending" : ""
                }> Home 
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                isActive ? "text-[#FF444A] underline " : isPending ? "pending" : ""
                }
                > Donation </NavLink>
            </li>
            <li>
                <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                isActive ? "text-[#FF444A] underline " : isPending ? "pending" : ""
                }
                > Statistics </NavLink>
            </li>
        </ul>
      </nav>
      
      
      
    </div>
  );
};

export default Navbar;
