// src/components/sections/Education.jsx
import SectionTitle from '../shared/SectionTitle';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Education</SectionTitle>

        <div className="mt-8 space-y-8">
          {/* GMU */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-40 flex-shrink-0">
                <img
                  src="/assets/images/GMU logo.png"
                  alt="George Mason University"
                  className="w-full h-auto object-contain dark:bg-white dark:rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Master of Science in Computer Science</h3>
                <p className="text-primary">George Mason University</p>
                <p className="text-gray-500 dark:text-gray-400">Jan 2023 - Dec 2024</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">GPA: 3.97/4.0</p>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Key Coursework</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Analysis of Algorithms', 'Software Engineering for WWW', 'Component-Based Software Development',
                      'Advanced NLP', 'Theory/Application Data Mining'].map((course) => (
                        <span key={course} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                          {course}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* JNTUH/KMIT */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex flex-row gap-4 w-40 flex-shrink-0">
                <div className="flex-1">
                  <img
                    src="/assets/images/JNTUH logo.jpg"
                    alt="JNTU Hyderabad"
                    className="w-20 h-20 object-contain dark:bg-white dark:rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src="/assets/images/KMIT logo.jpg"
                    alt="KMIT"
                    className="w-20 h-20 object-contain dark:bg-white dark:rounded-lg"
                  />
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Technology in Computer Science</h3>
                <p className="text-primary">Jawaharlal Nehru Technological University</p>
                <p className="text-gray-500 dark:text-gray-400">Aug 2018 - Jul 2022</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">GPA: 3.09/4.0</p>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Key Coursework</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks',
                      'Database Management Systems', 'Machine Learning'].map((course) => (
                        <span key={course} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                          {course}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;