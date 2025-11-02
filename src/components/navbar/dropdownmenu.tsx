'use client';


interface DropdownProps {
  children: React.ReactNode,
  position: 'left' | 'right'
}

const DropdownMenu: React.FC<DropdownProps> = ({ children, position }) => {

  return <div className={`absolute top-full ${position === 'left' ? 'left-0' : 'right-0'} w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50`}>
    {children}
  </div>

}

export default DropdownMenu;





