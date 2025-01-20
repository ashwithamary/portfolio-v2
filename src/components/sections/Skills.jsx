import { useState } from 'react';
import SectionTitle from '../shared/SectionTitle';

const SkillCard = ({ name, items }) => (
  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{name}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      name: "Core Languages",  
      items: ["Java", "Python", "JavaScript", "TypeScript", "C/C++"]
    },
    {
      name: "Web Technologies", 
      items: ["React", "Angular", "Spring Boot", "Node.js", "HTML/CSS", "RESTful APIs"]
    },
    {
      name: "Cloud & DevOps",  
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Ansible", "Terraform"]
    },
    {
      name: "Databases & Storage",
      items: ["MySQL", "MongoDB", "PostgreSQL", "Redis"]
    },
    {
      name: "Developer Tools",  
      items: ["Git", "Linux", "JUnit", "Maven", "IntelliJ IDEA", "VS Code"]
    },
    {
      name: "Methodologies & Practices", 
      items: ["Agile/Scrum", "Test-Driven Development", "System Design", "Microservices Architecture"]
    }
];

  const [showAll, setShowAll] = useState(false);
  const displayedCategories = showAll ? skillCategories : skillCategories.slice(0, 6);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Technical Skills</SectionTitle>
        
        <div className="mt-8 mb-4 text-center">
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise, constantly expanding through hands-on experience and continuous learning.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, index) => (
            <SkillCard key={index} name={category.name} items={category.items} />
          ))}
        </div>

        {skillCategories.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
            >
              {showAll ? 'Show Less' : 'Show More Skills'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;