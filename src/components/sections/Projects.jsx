// src/components/sections/Projects.jsx
import { useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import ProjectCard from '../shared/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="mt-8">
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Here are some of my featured projects showcasing my expertise in full-stack development,
            machine learning, and system design. Each project demonstrates my approach to solving
            complex technical challenges.
          </p>

          <div className="flex justify-center space-x-4 flex-wrap gap-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;