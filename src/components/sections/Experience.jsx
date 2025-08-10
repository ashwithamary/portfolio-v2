import SectionTitle from '../shared/SectionTitle';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Engineer',
      company: 'TELCLOUD',
      logo: '/assets/images/telcloud-logo.png',
      location: 'Fairfax, VA (Remote)',
      period: 'Apr 2025 – Present',
      achievements: [
        'Architected scalable microservice infrastructure using NestJS, TypeORM, and PostgreSQL for white-label telecommunications platform serving Fortune 500 clients',
        'Built enterprise user management systems that reduced operational complexity by 50% through automated workflows and real-time data processing',
        'Developed secure document upload systems across microservices using gRPC, improving communication efficiency and audit compliance',
        'Integrated QuestBlue API for automated phone number porting with 5G polling, achieving 99.5% success rate and 90% reduction in manual processes'
      ],
      technologies: ['React', 'NestJS', 'TypeORM', 'PostgreSQL', 'gRPC', 'Docker', 'AWS', 'Microservices', '5G Polling', 'QuestBlue API']
    },
    {
      title: 'Software Engineer',
      company: 'Verint Systems',
      logo: '/assets/images/Verint logo.png',
      location: 'Remote - R&D Department',
      period: 'May 2024 – Dec 2024',
      achievements: [
        'Developed a Java logging system with DataDog and OpsGenie, ensuring JUnit test coverage and real-time failure detection for 15+ microservices',
        'Restructured a Harness CI/CD pipeline that reduced deployment time by 50% through custom YAML scripts, automated checks, and parallel executions, saving 8+ hours weekly',
        'Optimized cloud resource allocation by integrating pre-deployment verification into Ansible scripts, reducing redundant AWS and GCP deployments across 10+ environments and cutting cloud costs by 35%',
        'Engineered an AI-powered Interaction Wrap-Up Bot, ranking 1st among 12 internal projects. Leveraged prompt engineering to boost user adoption by 40%, handling 75+ daily interactions seamlessly'
      ],
      technologies: ['Java', 'JUnit', 'DataDog', 'OpsGenie', 'Harness', 'AWS', 'GCP', 'Ansible', 'YAML', 'CI/CD', 'Prompt Engineering']
    },
    {
      title: 'Full Stack Developer',
      company: 'George Mason University',
      logo: '/assets/images/GMU logo.png',
      location: 'Fairfax, VA',
      period: 'Aug 2023 – Dec 2024',
      achievements: [
        'Engineered StackConnect, a full-stack survey application with Angular frontend and Spring Boot backend, implementing RESTful APIs that processed 5000+ survey records with real-time analytics and reporting capabilities',
        'Designed responsive UI with form validation and implemented server-side data persistence using JPA/Hibernate with MySQL, enabling efficient data storage and retrieval across 12+ endpoints',
        'Deployed on AWS EC2 with Docker & Kubernetes, automating deployment via a Jenkins CI/CD pipeline. Achieved a 40% reduction in deployment time and 99.9% uptime with a scalable 3-pod architecture'
      ],
      technologies: ['Angular', 'Spring Boot', 'JPA/Hibernate', 'MySQL', 'AWS EC2', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'RESTful APIs']
    },
    {
      title: 'Software Developer',
      company: 'Jade Global',
      logo: '/assets/images/Jade logo.png',
      location: 'Hyderabad, India',
      period: 'Sep 2021 – Nov 2022',
      achievements: [
        'Developed RESTful APIs using MEAN stack with error handling & logging for 3 key operations (inventory, billing, reporting)',
        'Built a real-time monitoring dashboard using Node.js and Express.js to track business metrics, ensuring 99.5% uptime while supporting concurrent data processing across 8+ services'
      ],
      technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'RESTful APIs']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Experience</SectionTitle>
        
        <div className="mt-8 space-y-8">
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
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm"
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