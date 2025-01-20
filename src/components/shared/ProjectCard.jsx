// src/components/shared/ProjectCard.jsx
import { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      {project.image && (
        <div className="relative h-48 rounded-t-xl overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {project.period}
            </p>
          </div>
          <div className="flex gap-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm text-primary bg-primary/10 dark:bg-primary/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show More
              </>
            )}
          </button>

          {isExpanded && (
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Features</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Highlights</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;