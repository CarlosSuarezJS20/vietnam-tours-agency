import Link from "next/link";
import { DropdownMenuItem } from '.';
import { navItems } from './navitems';
import { usePathname } from "next/navigation";

interface MobileNavBarProps {
  activeDropdown: string | null;
  toggleDropdown: (linkName: string) => void;
  mobileMenuRef: React.RefObject<HTMLDivElement>;
}


const MobileNavBar: React.FC<MobileNavBarProps> = ({ activeDropdown, toggleDropdown, mobileMenuRef }) => {

  const pathname = usePathname();

  return (
    <div ref={mobileMenuRef} className="md:hidden bg-white border-t border-gray-100">
      <div className="px-4 py-2 space-y-1">
        {navItems.map((item) =>
          item.links ? (
            <DropdownMenuItem
              key={item.id}
              id={item.id}
              label={item.label}
              links={item.links}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
            />
          ) : (
            <Link
              key={item.id}
              href={item.href!}
              className={`flex items-center justify-between w-full text-left py-2 border-b-2 transition-all duration-200 hover:font-bold ${pathname === item.href
                ? 'text-gray-900 font-bold border-teal-500'
                : 'text-gray-700 border-transparent hover:border-teal-300 hover:text-gray-900'
                }`}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </div>
  )
}

export default MobileNavBar;