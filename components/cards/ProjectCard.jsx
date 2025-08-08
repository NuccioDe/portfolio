import { Code, ExternalLink, GitFork, Github, Star } from "lucide-react";
import { Badge } from "../ui/Badge";
import { BaseCard } from "../ui/BaseCard";

export const ProjectCard = ({ repo, showStats = true, showTopics = true }) => {
  const profile = {
    github: "nucciode"
  };
  
  return (
    <BaseCard>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Code className="h-5 w-5 text-blue-600" />
          {repo.name}
        </h3>
        {showStats && (
          <div className="flex gap-2">
            {repo.stargazers_count > 0 && (
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <Star className="h-4 w-4" />
                {repo.stargazers_count}
              </span>
            )}
            {repo.forks_count > 0 && (
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <GitFork className="h-4 w-4" />
                {repo.forks_count}
              </span>
            )}
          </div>
        )}
      </div>
      
      <p className="text-gray-700 mb-4 line-clamp-3">
        {repo.description || "Nessuna descrizione disponibile"}
      </p>
      
      {showTopics && (
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.language && (
            <Badge variant="default">{repo.language}</Badge>
          )}
        </div>
      )}
      
      <div className="flex gap-3">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          <Github className="h-4 w-4" />
          Codice
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        )}
      </div>
    </BaseCard>
  );
};