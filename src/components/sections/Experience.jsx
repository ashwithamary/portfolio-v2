// src/components/sections/Experience.jsx
import SectionTitle from '../shared/SectionTitle';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Verint Systems',
      logo: '/assets/images/Verint logo.png',
      location: 'Remote',
      period: 'May 2024 – Dec 2024',
      achievements: [
        'Enhanced system reliability by implementing comprehensive JUnit test coverage and real-time monitoring with DataDog, enabling instant failure detection and automated OpsGenie alerts.',
        'Built and optimized a CI/CD pipeline using Harness, reducing deployment time by 50% through parallel executions and custom YAML configurations.',
        'Improved cloud infrastructure efficiency by developing smart Ansible scripts that perform pre-deployment environment validation, preventing unnecessary AWS and GCP resource utilization.',
        'Led the development of an AI-powered Interaction Wrap-Up Bot that achieved 40% user adoption through intelligent prompt engineering and user-centric customization features.'
      ],
      technologies: ['Java', 'JUnit', 'DataDog', 'Harness', 'AWS', 'GCP', 'Ansible', 'YAML', 'AI/ML']
    },
    {
      title: 'Graduate Teaching Assistant',
      company: 'George Mason University',
      logo: '/assets/images/GMU logo.png',
      location: 'Fairfax, VA',
      period: 'Aug 2023 – Dec 2024',
      achievements: [
        'Guided 200+ students through modern web development practices, focusing on practical implementation of React, Node.js, Express, and Firebase.',
        'Established an Agile development environment for student projects, implementing code reviews and industry-standard practices that resulted in consistently higher quality deliverables.',
        'Created comprehensive learning materials covering advanced JavaScript concepts, DevOps practices, and full-stack development patterns.',
      ],
      technologies: ['React', 'Node.js', 'Express', 'Firebase', 'JavaScript', 'DevOps']
    },
    {
      title: 'Software Developer',
      company: 'Jade Global',
      logo: '/assets/images/Jade logo.png',
      location: 'Hyderabad, India',
      period: 'Sep 2022 – Nov 2022',
      achievements: [
        'Architected and developed RESTful APIs using the MEAN stack, implementing robust error handling and logging mechanisms for business-critical operations.',
        'Engineered a real-time metrics dashboard that processes concurrent data streams, providing instant visibility into key business performance indicators.',
        'Implemented scalable data processing solutions that handle multiple service integrations efficiently.',
      ],
      technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'RESTful APIs']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Experience</SectionTitle>
        
        <div className="mt-12 space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex items-start gap-4 flex-grow">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-contain rounded-lg dark:bg-white dark:p-1"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {experience.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {experience.location}
                    </p>
                  </div>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  {experience.period}
                </span>
              </div>
              
              <div className="mt-6">
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-primary/10 dark:bg-primary/20 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;