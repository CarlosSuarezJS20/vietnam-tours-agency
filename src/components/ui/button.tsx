interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  showBadge?: boolean;

}


const Button: React.FC<ButtonProps> = ({ size = "md", children, showBadge, ...props }) => {

  const buttonSizes: Record<string, string> = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  }


  const badge = showBadge ?
    < span className="absolute top-2 right-2 w-2 h-2 bg-teal-500 rounded-full" ></span> : null;


  return <button
    {...props}
    className={`${buttonSizes[size]} text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200 relative`}
  >
    {children}
    {badge}
  </button>
}

export default Button;