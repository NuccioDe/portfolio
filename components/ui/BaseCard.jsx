export const BaseCard = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'p-6',
  background = 'bg-white',
  as = 'div',
  ...props
}) => {
  const hoverEffect = hover ? 'hover:shadow-xl hover:-translate-y-2' : '';
  const Component = as;
  
  return (
    <Component className={`${background} rounded-xl shadow-lg transition-all duration-300 ${hoverEffect} ${padding} ${className}`} {...props}>
      {children}
    </Component>
  );
};