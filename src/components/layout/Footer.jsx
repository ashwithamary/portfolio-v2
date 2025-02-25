// src/components/layout/Footer.jsx
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <div className="space-y-2">
            <p className="text-gray-500 dark:text-gray-400">
              Built with React & Tailwind CSS
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © {currentYear} Mary Ashwitha Gopu. All rights reserved.
            </p>
          </div> */}
          
          <div className="mt-8">
            <a 
              href="#"
              className="inline-block text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;