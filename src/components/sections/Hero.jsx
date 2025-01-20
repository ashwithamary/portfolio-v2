// src/components/sections/Hero.jsx
import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Typed from 'typed.js';

const Hero = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        'Software Engineer',
        'Full Stack Developer',
        'Cloud & DevOps Specialist',
        'ML/AI Enthusiast'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Mary Ashwitha Gopu</span>
              <span className="block text-primary mt-2">
                <span ref={typeTarget}></span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl">
              I'm currently seeking full-time software engineering opportunities.
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <a
                href="https://github.com/ashwithamary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/mary-ashwitha-gopu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:maryashwithagopu@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8">
              <a
                href="#projects"
                className="inline-block bg-primary text-white px-8 py-3 rounded-md text-base font-medium hover:bg-primary/90 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 mt-8 md:mt-0 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-lg"></div>
              <img
                src="/assets/images/Photograph.jpg"
                alt="Mary Ashwitha Gopu"
                className="w-72 h-72 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;