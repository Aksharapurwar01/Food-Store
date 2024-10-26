import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/slices/SearchSlice";
import { logout } from "../store/slices/Login";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-3 mx-6 mb-10">
      <div className="mb-4 lg:mb-0 text-center lg:text-left w-full lg:w-auto">
        <h1 className="text-2xl font-bold">Aksh Foods</h1>
      </div>
      <div className="mb-4 lg:mb-0 w-full lg:w-[25vw]">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full"
        />
      </div>
      <button
        onClick={handleLogout}
         className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 w-32 lg:w-auto"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
