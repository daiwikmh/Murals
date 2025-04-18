import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-6 bg-transparent z-50">
      <div className="text-[rgba(21,217,137,1)] text-xl font-bold">
        MURALS
      </div>
      <div className="flex gap-10 text-sm text-[#C1CCC7] font-normal">
        <a href="#" className="hover:text-white transition-colors">
          HOME
        </a>
        <a href="#" className="hover:text-white transition-colors">
          GALLERY
        </a>
        <a href="#" className="hover:text-white transition-colors">
          BLOG
        </a>
        <a href="#" className="hover:text-white transition-colors">
          KNET
        </a>
      </div>
    </nav>
  );
};

export default Header;