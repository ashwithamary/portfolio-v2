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
        'Architected enterprise user management platform serving Fortune 500 telecommunications clients, transforming role assignment workflows and reducing operational complexity by 50%',
        'Built scalable bulk user onboarding system processing CSV/Excel uploads, streamlining client onboarding processes by 90% through automated validation and notification workflows',
        'Designed secure document management infrastructure across microservices, enhancing communication efficiency and ensuring audit compliance for enterprise clients',
        'Developed intelligent warehouse filtering and order tracking systems, accelerating fulfillment processes by 60% and improving operational visibility',
        'Engineered automated device inventory management platform with real-time synchronization, reducing movement processing time by 70% through intelligent workflow automation',
        'Integrated telecommunications API services for automated phone number porting, achieving high reliability standards and eliminating manual processing bottlenecks',
        'Created centralized device configuration management system, reducing duplicate configurations by 95% and standardizing operations across multiple client environments'
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
        'Engineered enterprise logging and monitoring infrastructure with real-time failure detection, ensuring system reliability across 15+ microservices for Fortune 500 clients',
        'Transformed deployment operations by redesigning CI/CD pipelines, reducing deployment time by 50% and saving 8+ hours weekly through automation and parallel processing',
        'Optimized cloud resource management across AWS and GCP environments, cutting infrastructure costs by 35% while maintaining high availability across 10+ production environments',
        'Developed AI-powered customer interaction platform, achieving first place recognition among 12 internal projects and increasing user adoption by 40% through innovative prompt engineering'
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
        'Built comprehensive survey management platform processing 5000+ records, delivering real-time analytics and reporting capabilities for university operations',
        'Designed scalable application architecture with responsive user interfaces, ensuring efficient data management and seamless user experience across multiple endpoints',
        'Implemented cloud deployment strategy using containerization and orchestration, achieving 40% faster deployments and 99.9% uptime through automated CI/CD processes'
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
        'Developed robust API infrastructure for core business operations including inventory, billing, and reporting systems with comprehensive error handling and logging',
        'Built real-time business intelligence dashboard providing operational insights and ensuring 99.5% system uptime while supporting concurrent data processing across multiple services'
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