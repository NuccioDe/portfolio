import { Badge } from "../ui/Badge";
import { BaseCard } from "../ui/BaseCard";

export const SkillCard = ({ title, skills, icon: Icon, variant = 'default' }) => (
  <BaseCard className="text-center" hover={false}>
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
      variant === 'databases' ? 'bg-blue-100' :
      variant === 'frontend' ? 'bg-purple-100' :
      variant === 'backend' ? 'bg-green-100' :
      'bg-orange-100'
    }`}>
      <Icon className={`h-8 w-8 ${
        variant === 'databases' ? 'text-blue-600' :
        variant === 'frontend' ? 'text-purple-600' :
        variant === 'backend' ? 'text-green-600' :
        'text-orange-600'
      }`} />
    </div>
    <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {skills.map(skill => (
        <Badge key={skill} variant={variant}>{skill}</Badge>
      ))}
    </div>
  </BaseCard>
);
