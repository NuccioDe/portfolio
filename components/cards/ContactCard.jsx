import { BaseCard } from "../ui/BaseCard";

export const ContactCard = ({ 
  icon: Icon, 
  title, 
  value, 
  href, 
  iconColor = 'text-blue-600',
  isExternal = false 
}) => (
  <BaseCard
    className="text-center" 
    as={href ? 'a' : 'div'}
    {...(href && {
      href,
      ...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })
    })}
  >
    <Icon className={`h-8 w-8 ${iconColor} mb-4 mx-auto`} />
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{value}</p>
  </BaseCard>
);