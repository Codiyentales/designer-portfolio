import Logo from "../../assets/codiyen.png";
import { PiListBold, PiXLight } from "react-icons/pi";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={"flex justify-between h-25 p-4"}>
      <img className={"w-11 h-11 rounded-full"} src={Logo} alt="logo " />

      {/* on smaller screens this nav will be hidden */}
      <nav className={"hidden sm:flex sm:justify-between items-center"}>
        <ul className={"flex gap-x-8 m-2 font-semibold text-md"}>
          <li className={"hover:text-gray-600"}>
            <a href="#about">About</a>
          </li>
          <li className={"hover:text-gray-600"}>
            <a href="#work">Work</a>
          </li>
          <li className={"hover:text-gray-600"}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* on smaller screens responsive nav bar will be shown*/}
      <nav className={"sm:hidden flex flex-col items-end m-2"}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className={"hover:text-gray-600 text-2xl font-bold"}
        >
          {showMenu ? <PiXLight /> : <PiListBold />}
        </button>
        {showMenu && (
          <ul
            className={
              "absolute flex flex-col gap-y-2 m-2 font-semibold mt-8 text-md"
            }
          >
            <li
              onClick={() => setShowMenu(!showMenu)}
              className={"hover:text-gray-600"}
            >
              <a href="#about">About</a>
            </li>
            <li
              onClick={() => setShowMenu(!showMenu)}
              className={"hover:text-gray-600"}
            >
              <a href="#work">Work</a>
            </li>
            <li
              onClick={() => setShowMenu(!showMenu)}
              className={"hover:text-gray-600"}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
