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
      description: 'Experienced in building scalable applications using modern frameworks and technologies.'
    },
    {
      icon: Server,
      title: 'DevOps & Cloud',
      description: 'Proficient in AWS, Docker, and CI/CD pipelines for efficient deployment and scaling.'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Implemented AI solutions using modern NLP techniques and deep learning frameworks.'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Led technical sessions and mentored 200+ students as a Graduate Teaching Assistant.'
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
              I'm a recent graduate from George Mason University where I studied Computer Science, 
              passionate about creating impactful software solutions. I recently interned at Verint as a Software Engineer where I helped 
              improve system reliability and reduce deployment times.
              I also served as a Graduate Teaching Assistant at George Mason University where I mentored students in modern web development for the past year and a half.
            </p>
          </div>

          <div ref={cardsRef} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className={`reveal reveal-scale delay-${index * 200} flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300`}
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Professional Journey</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Starting with a "Hello World" program, my journey in Computer Science has evolved into 
                creating enterprise-level solutions. At Verint Systems, I've enhanced system reliability 
                through improved logging methods and reduced deployment times by 50%. As a Graduate 
                Teaching Assistant, I've guided hundreds of students through modern web development, 
                combining my technical expertise with a passion for education.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Technical Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                My technical toolkit spans Java, Python, and JavaScript, with expertise in cloud 
                technologies and DevOps practices. I've successfully implemented AI solutions, 
                developed full-stack applications, and optimized cloud infrastructure. I'm particularly 
                interested in creating scalable solutions that make a real-world impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;