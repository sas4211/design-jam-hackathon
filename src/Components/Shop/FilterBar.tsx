"use client"
import { useState } from "react";
import { FaFilter, FaListUl } from "react-icons/fa";

const FilterBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Default");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-[#faf4fa] p-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Filter Button */}
          <button className="flex items-center gap-2 text-black font-semibold hover:text-gray-600">
            <FaFilter />
            <span>Filter</span>
          </button>

          {/* List View Icon */}
          <FaListUl className="text-black text-lg hover:text-gray-600 cursor-pointer" />

          {/* Showing Results */}
          <p className="text-gray-600 text-sm">
            Showing 1–16 of 32 results
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 relative">
          {/* Short Button */}
          <button className="text-black font-semibold hover:text-gray-600">
            Short
          </button>

          {/* Custom Dropdown */}
          <div>
            <button
              className="text-gray-600 text-sm bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              {selectedOption}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-md shadow-md w-40 z-10">
                <ul className="text-sm text-gray-600">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectOption("Default")}
                  >
                    Default
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectOption("Price: Low to High")}
                  >
                    Price: Low to High
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectOption("Price: High to Low")}
                  >
                    Price: High to Low
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectOption("Newest")}
                  >
                    Newest
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
