
//import React from "react";

const Header = () => {
  return (
    <div className="flex item-end justify-between">
      <h1 className="text-2xl font-medium ">
        Hello <br /> <span className="text-3xl font-semibold">Shantanu</span>{" "}
      </h1>
      <button className="h-12 py-2 px-5 bg-red-600 text-lg font-medium text-white  rounded">
        Login
      </button>
    </div>
  );
};

export default Header;
