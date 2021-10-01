import React from "react";
import Loupe from "image/loupe.svg";

const SearchBar = () => {
  return (
    <div className="px-80 py-10">
      <div className="bg-gray-50 flex items-center rounded-full shadow-xl">
        <input
          className="rounded-l-full w-full py-4 px-6 bg-gray-50 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
        />
        <div className="p-4">
          <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            <img src={Loupe} alt="Loupe" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
