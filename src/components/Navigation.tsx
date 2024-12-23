import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="font-serif text-2xl text-primary">Moving to Spain</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Resources</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">About</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Blog</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Resources</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;