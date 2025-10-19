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
      { href: '#', label: 'Soon' },
    ],
  },
  {
    id: 'daily-activities',
    label: 'Daily Activities',
    links: [
      { href: '#', label: 'soon' },
    ],
  },
  {
    id: 'build-tour',
    label: 'Build Your Own Tour',
    href: '/build-tour',
  },
];