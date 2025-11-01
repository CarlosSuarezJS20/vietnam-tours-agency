'use client';

import { useState, useRef } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { DesktopNavBar, MobileNavBar, DropdownMenu } from '.';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { Button } from '../ui';



const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (linkName: string) => {
    setActiveDropdown(activeDropdown === linkName ? null : linkName);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Close dropdowns when clicking outside
  useOutsideClick({ refs: dropdownRef, callback: () => setActiveDropdown(null), enabled: !!activeDropdown });
  useOutsideClick({ refs: mobileMenuRef, callback: () => setIsMenuOpen(false), enabled: isMenuOpen });
  useOutsideClick({ refs: cartRef, callback: () => setIsCartOpen(false), enabled: isCartOpen });

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className={'fixed top-0 z-50 w-full bg-white border-b transition-colors border-gray-100 shadow-sm'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              {/* Logo Graphic */}
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 via-teal-500 to-teal-400 rounded-md flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 rounded-sm"></div>
                <div className="absolute top-1 right-1 w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>

              {/* Logo Text */}
              <div>
                <h1 className="text-xl font-bold text-blue-900">Travel | Vietnam</h1>
                <p className="text-xs text-blue-600 -mt-1">by VIETNAMIA</p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <DesktopNavBar
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              dropdownRef={dropdownRef}
            />

            {/* Desktop Cart Icon */}
            <div className="hidden md:flex items-center relative" ref={cartRef}>
              <Button onClick={toggleCart} variant="ghost" size="icon">
                <ShoppingCart className="w-6 h-6 stroke-current" />
              </Button>

              {/* Cart Dropdown */}
              {isCartOpen && (
                <DropdownMenu position="right">
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Shopping Cart</h3>
                    <div className="space-y-3">
                      {/* Empty cart state */}
                      <div className="text-center py-8">
                        <ShoppingCart className="w-12 h-12 mx-auto text-blue-900 mb-2" />
                        <p className="text-sm text-gray-600">Your cart is empty</p>
                      </div>

                      {/* Cart items will go here */}
                      {/* Example item structure:
                      <div className="flex items-center space-x-3 border-b pb-3">
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900">Tour Name</h4>
                          <p className="text-xs text-gray-600">$199</p>
                        </div>
                        <button className="text-red-500 text-xs">Remove</button>
                      </div>
                      */}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors duration-200">
                        Checkout
                      </button>
                    </div>
                  </div>
                </DropdownMenu>
              )}
            </div>

            {/* Mobile Cart Icon and Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <div className="relative" ref={cartRef}>
                <Button onClick={toggleCart} variant="ghost" size="icon">
                  <ShoppingCart className="w-6 h-6 stroke-current" />
                </Button>

                {/* Mobile Cart Dropdown */}
                {isCartOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Shopping Cart</h3>
                      <div className="space-y-3">
                        {/* Empty cart state */}
                        <div className="text-center py-8">
                          <ShoppingCart className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                          <p className="text-sm text-gray-600">Your cart is empty</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors duration-200">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button onClick={toggleMenu} variant="ghost" size="icon">
                {isMenuOpen ? <X className="w-6 h-6 stroke-current" /> : <Menu className="w-6 h-6 stroke-current" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <MobileNavBar activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} mobileMenuRef={mobileMenuRef as React.RefObject<HTMLDivElement>} />
        )}
      </nav>
    </div>
  );
}


export default NavBar;