import React from 'react';

const Nav: React.FC = () => {
  return (
    <header className="bg-transparent sticky top-0 z-50 text-white h-0">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <img src="/logo/logo.png" alt="" className='w-[200px]' />
        <nav>
          <ul className="flex space-x-6 text-xl">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="/login" className="hover:underline bg-gray-400 border-2 border-white shadow-md p-2 rounded-xl px-4 ml-2">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
