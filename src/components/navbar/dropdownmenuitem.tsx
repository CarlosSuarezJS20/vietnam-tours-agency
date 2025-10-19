'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface MobileDropdownItemProps {
  id: string;
  label: string;
  links: { href: string; label: string }[];
  activeDropdown: string | null;
  toggleDropdown: (id: string) => void;
}


const DropdownMenuItem: React.FC<MobileDropdownItemProps> = ({ id, label, links, activeDropdown, toggleDropdown }) => {
  const isActive = activeDropdown === id;

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown(id);
        }}
        className={`flex items-center justify-between w-full text-left py-2 border-b-2 transition-all duration-200 hover:font-bold ${activeDropdown === id
          ? 'text-gray-900 font-bold border-teal-500'
          : 'text-gray-700 border-transparent hover:border-teal-300 hover:text-gray-900'
          }`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === id ? 'rotate-180' : ''}`} />
      </button>
      {isActive && (
        <div className="pl-4 pb-2">
          <ul className="space-y-1 py-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-sm text-gray-700 hover:text-teal-600 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}


export default DropdownMenuItem;