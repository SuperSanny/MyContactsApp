import { Link } from "react-router-dom";
import contactLogo from "../assets/img/contacts-book.png";
import userPhoto from "../assets/img/11602236_21004063.jpg";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <ul className="flex justify-between">
        <li className="mr-3">
          <Link to={"/home"} className="  cursor-pointer">
            <img src={contactLogo} alt="img" className="h-8 w-8" />
          </Link>
        </li>
        <li className="mr-3">
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full p-4 h-10 text-sm border rounded-lg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-indigo-900 rounded-r-lg border border-gray-300 placeholder-gray-500 hover:bg-indigo-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </li>
        <li className="mr-3">
          <button
            className="h-10 p-2 text-sm font-medium text-white bg-indigo-900 rounded-lg border hover:bg-indigo-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
            id="add-contacts"
            name="add-contacts"
            type="submit"
          >
            + New Contact
          </button>
        </li>
        <li className="mr-3">
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex text-sm rounded-full md:mr-0 focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-600"
              aria-controls="navbar-user"
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
            >
              <img className="w-8 h-8 rounded-full" src={userPhoto} alt="" />
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              className={` ${
                isDropdownOpen ? "" : "hidden"
              } ml-10 relative md:absolute text-base list-none divide-y divide-gray-100 rounded-lg shadow dark:bg-indigo-900`}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
