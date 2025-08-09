// src/components/sections/Contact.jsx
import { useState, useRef, useEffect } from 'react';
import { Mail, Github, Loader2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import emailjs from '@emailjs/browser';
import SectionTitle from '../shared/SectionTitle';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const formRef = useRef();
  const { theme } = useTheme();
  const badgeContainerRef = useRef(null);

  // Reload LinkedIn badge when theme changes
  useEffect(() => {
    // Remove existing badge
    if (badgeContainerRef.current) {
      badgeContainerRef.current.innerHTML = '';
    }

    // Create new badge
    const badge = document.createElement('div');
    badge.className = 'badge-base LI-profile-badge';
    badge.setAttribute('data-locale', 'en_US');
    badge.setAttribute('data-size', 'medium');
    badge.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    badge.setAttribute('data-type', 'VERTICAL');
    badge.setAttribute('data-vanity', 'mary-ashwitha-gopu');
    badge.setAttribute('data-version', 'v1');

    // Append new badge
    if (badgeContainerRef.current) {
      badgeContainerRef.current.appendChild(badge);
    }

    // Reload LinkedIn script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [theme]);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'maryashwithagopu@gmail.com',
      href: 'mailto:maryashwithagopu@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'ashwithamary',
      href: 'https://github.com/ashwithamary'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
  
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="mt-12">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm a Full Stack Engineer passionate about building scalable solutions. Currently at TELCLOUD and 
            open to discussing exciting opportunities in innovative tech companies!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info Section - Left Column */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm h-fit">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h3>
              
              {/* LinkedIn Badge Container */}
              <div ref={badgeContainerRef} className="mb-4 flex justify-center" />
              
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{info.label}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form - Right Column */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm h-fit">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:text-white px-4 py-3"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:text-white px-4 py-3"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:text-white px-4 py-3"
                      placeholder="Your message here..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-colors text-sm font-medium"
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      ) : null}
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                  {status === 'success' && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                      <p className="text-green-600 dark:text-green-400 text-sm text-center">
                        Message sent successfully!
                      </p>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
                      <p className="text-red-600 dark:text-red-400 text-sm text-center">
                        Failed to send message. Please try again.
                      </p>
                    </div>
                  )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
