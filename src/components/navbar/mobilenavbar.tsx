import Link from "next/link";
import { navItems } from './navitems';
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui';

interface MobileNavBarProps {
  mobileMenuRef: React.RefObject<HTMLDivElement>;
  toggleMenu: () => void;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({ mobileMenuRef, toggleMenu }) => {
  const pathname = usePathname();

  return (
    <div ref={mobileMenuRef} className="md:hidden bg-white border-t border-gray-100">
      <Accordion type="single" collapsible className="w-full">
        {navItems.map((item) =>
          item.links ? (
            <AccordionItem 
              key={item.id} 
              value={item.id}
              className="border-gray-100"
            >
              <AccordionTrigger className="text-left font-medium text-gray-700 hover:font-bold hover:text-gray-900 [&[data-state=open]]:text-gray-900 [&[data-state=open]]:font-bold mx-4">
                {item.label}
              </AccordionTrigger>
              <AccordionContent className="pb-2 pt-2 bg-gray-100">
                <ul className="space-y-2 mx-4">
                  {item.links.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                      onClick={()=> {toggleMenu()}}
                        className="block text-sm text-gray-700 hover:text-gray-900 transition-colors py-1"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ) : (
            <Link
              key={item.id}
              href={item.href!}
              onClick={() => {toggleMenu()}}
              className={`flex items-center justify-between w-full text-left py-3 font-medium hover:font-bold border-b border-gray-100 mx-4 ${pathname === item.href
                ? 'text-gray-900 font-bold'
                : 'text-gray-700 hover:text-gray-900'
                }`}
            >
              {item.label}
            </Link>
          )
        )}
      </Accordion>
    </div>
  )
}

export default MobileNavBar;