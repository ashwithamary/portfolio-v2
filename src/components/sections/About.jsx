// src/components/sections/About.jsx
import { useReveal } from '../../hooks/useReveal';
import SectionTitle from '../shared/SectionTitle';
import { Code, Server, Brain, Users } from 'lucide-react';

const About = () => {
  const titleRef = useReveal();
  const introRef = useReveal({ threshold: 0.2 });
  const cardsRef = useReveal({ threshold: 0.1 });
  const journeyRef = useReveal({ threshold: 0.2 });

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Experienced in building scalable applications using React, Node.js, Spring Boot, and modern frameworks.'
    },
    {
      icon: Server,
      title: 'DevOps & Cloud',
      description: 'Proficient in AWS, Docker, Kubernetes, and CI/CD pipelines for efficient deployment and infrastructure optimization.'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Implemented AI solutions with modern NLP techniques, including prompt engineering and integration of AI services.'
    },
    {
      icon: Users,
      title: 'Problem Solving',
      description: 'Skilled in optimizing workflows, enhancing system reliability, and reducing operational costs through technical innovation.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="reveal">
          <SectionTitle>About Me</SectionTitle>
        </div>
        
        <div className="mt-12">
          <div ref={introRef} className="max-w-3xl mx-auto text-center reveal">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a Full-Stack Software Engineer passionate about crafting scalable, high-impact applications that boost efficiency and engagement. With expertise in React, Node.js, Spring Boot, and cloud technologies, I've engineered solutions that streamline workflows, enhance automation, and optimize infrastructure.
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              A graduate from George Mason University with a 3.97 GPA in Computer Science, I've led impactful projects at Verint Systems where I reduced deployment times by 50% and cut cloud costs by 35%. I'm actively involved in technology communities and volunteer my expertise to support educational non-profits like Bright Mind Enrichment and Schooling (BMEAS).
            </p>
          </div>

          <div ref={cardsRef} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className={`reveal reveal-scale delay-${index * 200} flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary transform hover:rotate-12 transition-transform duration-300">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-center text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div ref={journeyRef} className="mt-16 prose max-w-4xl mx-auto reveal reveal-scale">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What I Bring</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>✓ Optimized CI/CD pipelines at Verint, slashing deployment times by 50% and saving 8+ hours weekly</li>
                <li>✓ Built scalable AI apps like an Interaction Wrap-Up Bot, ranking 1st among 12 projects and boosting adoption by 40%</li>
                <li>✓ Reduced cloud costs by 35% across 10+ environments with AWS, Kubernetes, and Ansible</li>
                <li>✓ Delivered StackConnect, a survey platform with 99.9% uptime, processing 5000+ records</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">My Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I excel at solving problems with AI, automation, and cloud technologies, driving efficiency while collaborating with teams to deliver innovative, high-performance solutions. I'm currently seeking full-time software engineering opportunities where I can make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;