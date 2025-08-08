import { Code } from "lucide-react";
import { Badge } from "../ui/Badge";
import { BaseCard } from "../ui/BaseCard";

export const CustomProjectCard = ({ 
  title, 
  description, 
  technologies = [], 
  links = [], 
  image,
  icon: Icon = Code,
  isCollaborative = false,
  collaborators = []
}) => (
  <BaseCard>
    {image && (
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
    )}
    
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <Icon className="h-5 w-5 text-blue-600" />
        {title}
        {isCollaborative && (
          <Badge variant="secondary" className="text-xs">
            Collaborativo
          </Badge>
        )}
      </h3>
    </div>
    
    <p className="text-gray-700 mb-4">{description}</p>
    
    {collaborators.length > 0 && (
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Sviluppato con:</p>
        <div className="flex flex-wrap gap-2">
          {collaborators.map(collaborator => (
            <Badge key={collaborator} variant="tools" className="text-xs">
              {collaborator}
            </Badge>
          ))}
        </div>
      </div>
    )}
    
    {technologies.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map(tech => (
          <Badge key={tech} variant="databases">{tech}</Badge>
        ))}
      </div>
    )}
    
    {links.length > 0 && (
      <div className="flex gap-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
              link.primary 
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {link.icon && <link.icon className="h-4 w-4" />}
            {link.label}
          </a>
        ))}
      </div>
    )}
  </BaseCard>
);
