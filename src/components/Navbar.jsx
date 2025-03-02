import reactLogo from "../assets/react.svg";
import { NavLink } from "react-router";

function Navbar() {
  const NavLinks = [
    {
      id: "ig",
      path: "/",
      label: "Image Generate",
    },
    {
      id: "coh",
      path: "chat",
      label: "Chat or Help",
    },
    {
      id: "hic",
      path: "hd-image",
      label: "HD Image Converter",
    },
  ];
  return (
    <div className="navbar bg-slate-700 shadow-sm">
      <div className="flex-1">
        <a className=" text-xl flex gap-2 items-center">
          {" "}
          <img src={reactLogo} alt="React logo" /> React Image Generator{" "}
        </a>
      </div>
      <div className="flex-none">
        <ul className="flex gap-5 ">
          {NavLinks.map((link) => (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `${isActive ? "text-[#00D8FF] font-bold" : " "}`
              }
              key={link.id}
            >
              {link.label}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
