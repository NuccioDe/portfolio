export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    databases: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    frontend: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    backend: 'bg-green-100 text-green-800 hover:bg-green-200',
    tools: 'bg-orange-100 text-orange-800 hover:bg-orange-200',
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};