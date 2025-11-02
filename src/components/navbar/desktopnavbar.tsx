'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DropdownMenu } from '.';
import { navItems } from './navitems';

interface DesktopNavBarProps {
  activeDropdown: string | null;
  toggleDropdown: (linkName: string) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  closeDropdown: () => void;
}

const DesktopNavBar: React.FC<DesktopNavBarProps> = ({ activeDropdown, toggleDropdown, dropdownRef, closeDropdown }) => {
  const pathname = usePathname();

  return (
    <div ref={dropdownRef} className="hidden md:flex items-center space-x-8 h-full">
      {navItems.map((item) =>
        item.links ? (
          // Dropdown item
          <div key={item.id} className="relative h-full flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(item.id);
                console.log('activeDropdown', activeDropdown);
              }}
              className={`flex items-center h-full text-gray-700 hover:text-gray-900 hover:font-bold font-medium transition-all duration-200 border-b-2 ${activeDropdown === item.id
                ? 'font-bold text-gray-900 border-teal-500'
                : 'border-transparent hover:border-teal-300'
                }`}
            >
              {item.label}
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {/* Dropdown Menu */}
            {activeDropdown === item.id && (
              <DropdownMenu position="left">
                <div className="p-4">
                  <ul className="space-y-2">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeDropdown}
                          className="block text-sm text-gray-700 hover:text-teal-600 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </DropdownMenu>
            )}
          </div>
        ) : (
          // Regular link item
          <div key={item.id} className="relative h-full flex items-center">
            <Link
              href={item.href!}
              className={`flex items-center h-full text-gray-700 hover:text-gray-900 hover:font-bold font-medium transition-all duration-200 border-b-2 ${pathname === item.href
                ? 'font-bold text-gray-900 border-teal-500'
                : 'border-transparent hover:border-teal-300'
                }`}
            >
              {item.label}
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default DesktopNavBar;
