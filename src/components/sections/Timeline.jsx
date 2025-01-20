// // src/components/sections/Timeline.jsx
// import React from 'react';
// import { Briefcase, GraduationCap, Code } from 'lucide-react';

// const Timeline = () => {
//   // Combined events array with both education and experience
//   const events = [
//     {
//       date: "Jan 2023 - Dec 2024",
//       type: "education",
//       title: "Master of Science in Computer Science",
//       organization: "George Mason University",
//       icon: <GraduationCap className="w-6 h-6" />,
//       gpa: "4.0/4.0",
//       details: {
//         achievements: [
//           "Software Engineering Graduate Certificate",
//           "Outstanding Academic Achievement",
//           "Teaching Assistant for Web Development"
//         ],
//         courses: [
//           "Advanced NLP",
//           "Data Mining",
//           "Analysis of Algorithms",
//           "Software Engineering",
//           "Component-Based Development"
//         ]
//       }
//     },
//     {
//       date: "May 2024 - Dec 2024",
//       type: "experience",
//       title: "Software Engineer",
//       organization: "Verint Systems",
//       icon: <Briefcase className="w-6 h-6" />,
//       details: {
//         achievements: [
//           "Enhanced system reliability with 100% test coverage",
//           "Reduced deployment time by 50%",
//           "Secured first place in intern projects"
//         ],
//         technologies: ["Java", "AWS", "Docker", "Ansible", "DataDog"]
//       }
//     },
//     {
//       date: "Aug 2023 - Dec 2024",
//       type: "experience",
//       title: "Graduate Teaching Assistant",
//       organization: "George Mason University",
//       icon: <Briefcase className="w-6 h-6" />,
//       details: {
//         achievements: [
//           "Led technical sessions for 200+ students",
//           "Mentored 8 Agile student teams",
//           "Improved average grades by 15%"
//         ],
//         technologies: ["React", "Angular", "Node.js", "Web Development"]
//       }
//     },
//     {
//       date: "Sep 2022 - Nov 2022",
//       type: "experience",
//       title: "Software Developer",
//       organization: "Jade Global",
//       icon: <Code className="w-6 h-6" />,
//       details: {
//         achievements: [
//           "Developed RESTful APIs with MEAN stack",
//           "Built real-time monitoring dashboard",
//           "Automated business processes"
//         ],
//         technologies: ["MongoDB", "Express", "Angular", "Node.js"]
//       }
//     },
//     {
//       date: "Aug 2018 - Jul 2022",
//       type: "education",
//       title: "Bachelor of Technology in Computer Science",
//       organization: "Jawaharlal Nehru Technological University",
//       icon: <GraduationCap className="w-6 h-6" />,
//       gpa: "3.09/4.0",
//       details: {
//         achievements: [
//           "Completed major project in Flight Delay Prediction",
//           "Published research paper on ML applications",
//           "Technical event coordinator"
//         ],
//         courses: [
//           "Data Structures",
//           "Algorithms",
//           "Operating Systems",
//           "Computer Networks",
//           "Machine Learning"
//         ]
//       }
//     }
//   ];

//   // Sort events by date (most recent first)
//   const sortedEvents = [...events].sort((a, b) => {
//     const dateA = new Date(a.date.split(' - ')[0]);
//     const dateB = new Date(b.date.split(' - ')[0]);
//     return dateB - dateA;
//   });

//   return (
//     <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">Professional Journey</h2>
        
//         <div className="relative max-w-6xl mx-auto">
//           {/* Center line */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800 transform -translate-x-1/2"></div>
          
//           {sortedEvents.map((event, index) => (
//             <div key={index} className={`flex flex-col md:flex-row gap-8 mb-8 ${
//               event.type === 'education' ? 'md:flex-row-reverse' : ''
//             }`}>
//               {/* Content */}
//               <div className={`w-full md:w-5/12 ${
//                 event.type === 'education' ? 'md:text-right' : ''
//               }`}>
//                 <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative">
//                   {/* Timeline dot */}
//                   <div className="hidden md:block absolute top-8 w-4 h-4 rounded-full bg-purple-500 dark:bg-purple-400 border-4 border-white dark:border-gray-900 
//                     ${event.type === 'education' ? 'left-full ml-6' : 'right-full mr-6'} transform -translate-y-1/2"></div>
                  
//                   <div className="flex items-center mb-4 ${event.type === 'education' ? 'md:flex-row-reverse' : ''}">
//                     <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 
//                       ${event.type === 'education' ? 'md:ml-4' : 'mr-4'}">
//                       {event.icon}
//                     </div>
//                     <span className="text-sm text-gray-600 dark:text-gray-400">{event.date}</span>
//                   </div>
                  
//                   <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h4>
//                   <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">{event.organization}</p>
//                   {event.gpa && <p className="text-gray-700 dark:text-gray-300 mb-4">GPA: {event.gpa}</p>}
                  
//                   <div className="space-y-4">
//                     <div>
//                       <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
//                         {event.type === 'education' ? 'Key Achievements:' : 'Key Achievements:'}
//                       </h5>
//                       <ul className={`list-disc ${event.type === 'education' ? 'md:list-inside' : 'list-inside'} text-gray-700 dark:text-gray-300 space-y-1`}>
//                         {event.details.achievements.map((achievement, i) => (
//                           <li key={i}>{achievement}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div>
//                       <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
//                         {event.type === 'education' ? 'Key Courses:' : 'Technologies:'}
//                       </h5>
//                       <div className="flex flex-wrap gap-2 ${event.type === 'education' ? 'md:justify-end' : ''}">
//                         {(event.type === 'education' ? event.details.courses : event.details.technologies).map((item, i) => (
//                           <span key={i} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">
//                             {item}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Spacer div for alignment */}
//               <div className="hidden md:block w-5/12"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;

// src/components/sections/Timeline.jsx
import React from 'react';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const Timeline = () => {
  // Combined events array with both education and experience
  const events = [
    {
      date: "Jan 2023 - Dec 2024",
      type: "education",
      title: "Master of Science in Computer Science",
      organization: "George Mason University",
      icon: <GraduationCap className="w-6 h-6" />,
      gpa: "4.0/4.0",
      details: {
        achievements: [
          "Software Engineering Graduate Certificate",
          "Outstanding Academic Achievement",
          "Teaching Assistant for Web Development"
        ],
        courses: [
          "Advanced NLP",
          "Data Mining",
          "Analysis of Algorithms",
          "Software Engineering",
          "Component-Based Development"
        ]
      }
    },
    {
      date: "May 2024 - Dec 2024",
      type: "experience",
      title: "Software Engineer",
      organization: "Verint Systems",
      icon: <Briefcase className="w-6 h-6" />,
      details: {
        achievements: [
          "Enhanced system reliability with 100% test coverage",
          "Reduced deployment time by 50%",
          "Secured first place in intern projects"
        ],
        technologies: ["Java", "AWS", "Docker", "Ansible", "DataDog"]
      }
    },
    {
      date: "Aug 2023 - Dec 2024",
      type: "experience",
      title: "Graduate Teaching Assistant",
      organization: "George Mason University",
      icon: <Briefcase className="w-6 h-6" />,
      details: {
        achievements: [
          "Led technical sessions for 200+ students",
          "Mentored 8 Agile student teams",
          "Improved average grades by 15%"
        ],
        technologies: ["React", "Angular", "Node.js", "Web Development"]
      }
    },
    {
      date: "Sep 2022 - Nov 2022",
      type: "experience",
      title: "Software Developer",
      organization: "Jade Global",
      icon: <Code className="w-6 h-6" />,
      details: {
        achievements: [
          "Developed RESTful APIs with MEAN stack",
          "Built real-time monitoring dashboard",
          "Automated business processes"
        ],
        technologies: ["MongoDB", "Express", "Angular", "Node.js"]
      }
    },
    {
      date: "Aug 2018 - Jul 2022",
      type: "education",
      title: "Bachelor of Technology in Computer Science",
      organization: "Jawaharlal Nehru Technological University",
      icon: <GraduationCap className="w-6 h-6" />,
      gpa: "3.09/4.0",
      details: {
        achievements: [
          "Completed major project in Flight Delay Prediction",
          "Published research paper on ML applications",
          "Technical event coordinator"
        ],
        courses: [
          "Data Structures",
          "Algorithms",
          "Operating Systems",
          "Computer Networks",
          "Machine Learning"
        ]
      }
    }
  ];

  // Sort events by date (most recent first)
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.date.split(' - ')[0]);
    const dateB = new Date(b.date.split(' - ')[0]);
    return dateB - dateA;
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">Professional Journey</h2>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800 transform -translate-x-1/2"></div>
          
          {sortedEvents.map((event, index) => (
            <div key={index} className="relative mb-16">
              {/* Center dot */}
              <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-purple-500 dark:bg-purple-400 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10"></div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                {/* Education content - Left side */}
                {event.type === 'education' && (
                  <>
                    <div className="w-full md:w-5/12">
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <TimelineContent event={event} />
                      </div>
                    </div>
                    <div className="hidden md:block w-5/12"></div>
                  </>
                )}

                {/* Experience content - Right side */}
                {event.type === 'experience' && (
                  <>
                    <div className="hidden md:block w-5/12"></div>
                    <div className="w-full md:w-5/12">
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <TimelineContent event={event} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate component for the content to avoid repetition
const TimelineContent = ({ event }) => (
  <>
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400">
        {event.icon}
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">{event.date}</span>
    </div>
    
    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h4>
    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">{event.organization}</p>
    {event.gpa && <p className="text-gray-700 dark:text-gray-300 mb-4">GPA: {event.gpa}</p>}
    
    <div className="space-y-4">
      <div>
        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          {event.details.achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
          {event.type === 'education' ? 'Key Courses:' : 'Technologies:'}
        </h5>
        <div className="flex flex-wrap gap-2">
          {(event.type === 'education' ? event.details.courses : event.details.technologies).map((item, i) => (
            <span key={i} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Timeline;
