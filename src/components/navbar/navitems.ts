export interface NavItem {
  id: string;
  label: string;
  links?: { href: string; label: string }[];
  href?: string;
}

export const navItems: NavItem[] = [
  {
    id: 'our-tours',
    label: 'Our Tours',
    links: [
      { href: '/tours/north', label: 'Northern Vietnam' },
      { href: '/tours/central', label: 'Central Vietnam' },
      { href: '/tours/south', label: 'Southern Vietnam' },
      { href: '/tours/custom', label: 'Custom Tours' },
      { href: '/tours/discover-vietnam', label: 'All Tours and Activities' }
    ],
  },
  {
    id: 'day-tours',
    label: 'Day Tours',
    links: [
      { href: '/day-tours/hanoi', label: 'From Hanoi' },
      { href: '/day-tours/hoi-an', label: 'From Hoi An' },
      { href: '/day-tours/saigon', label: 'From Saigon' },
    ],
  },
  {
    id: 'build-tour',
    label: 'Build Your Own Tour',
    href: '/build-tour',
  },
];