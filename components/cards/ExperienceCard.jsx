import { BaseCard } from "../ui/BaseCard";

export const ExperienceCard = ({ 
  title, 
  subtitle, 
  period, 
  description, 
  icon: Icon, 
  iconColor = 'text-blue-600' 
}) => (
  <BaseCard className="mb-6" background="bg-gray-50" hover={false}>
    <div className="flex items-start gap-4">
      {Icon && <Icon className={`h-6 w-6 ${iconColor} mt-1 flex-shrink-0`} />}
      <div className="flex-1">
        <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
        <p className="text-blue-600 font-medium">{subtitle}</p>
        <p className="text-gray-600 mb-2">{period}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  </BaseCard>
);