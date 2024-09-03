import React from "react";

const Header = () => {
  return (
    <nav className="bg-[#ffffff] text-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto w-full max-w-screen-xl ss:p-10 p-4 py-6 lg:py-8 lg:px-8">
        <h1 className="flex justify-center items-center font-semibold text-xl">
          <a href="/">STACKBULD</a>
        </h1>
      </div>
    </nav>
  );
};

export default Header;
