import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center mr-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-semibold text-gray-900">The Searchers Podcast Network</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </a>
            <a href="#success-stories" className="text-gray-700 hover:text-orange-600 transition-colors">
              Success Stories
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-orange-600 transition-colors">
              Pricing
            </a>
            <a href="#book-now" className="text-gray-700 hover:text-orange-600 transition-colors">
              Book Now
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
              Contact
            </a>
            <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-orange-600 transition-colors">
                Services
              </a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </a>
              <a href="#success-stories" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-orange-600 transition-colors">
                Success Stories
              </a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-orange-600 transition-colors">
                Pricing
              </a>
              <a href="#book-now" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-orange-600 transition-colors">
                Book Now
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </a>
              <Button onClick={() => setIsMenuOpen(false)} className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}