// src/components/sections/Certifications.jsx
import { useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import { Award } from 'lucide-react';

const CertificationCard = ({ title, issuer, date, link, featured }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`block p-6 ${
      featured 
        ? 'bg-primary/5 dark:bg-primary/10 border-2 border-primary' 
        : 'bg-gray-50 dark:bg-gray-800'
    } rounded-lg hover:shadow-lg transition-all duration-300`}
  >
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-1">{issuer}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{date}</p>
      </div>
      {featured && (
        <span className="bg-primary text-white text-xs px-2 py-1 rounded">Featured</span>
      )}
    </div>
  </a>
);

const CertificationGroup = ({ title, certifications }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
      <Award className="w-5 h-5 mr-2" />
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certifications.map((cert, index) => (
        <CertificationCard key={index} {...cert} />
      ))}
    </div>
  </div>
);

const Certifications = () => {
  const featuredCertifications = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "Dec 2024",
      link: "https://www.credly.com/badges/5feedd27-b3ea-44e6-8e44-493c9d32554d/public_url",
      featured: true
    },
    {
      title: "GitHub Foundations",
      issuer: "GitHub",
      date: "Mar 2025",
      link: "https://www.credly.com/badges/9017d885-07cf-47c1-8555-1504aa1da8ca/linked_in_profile",
      featured: true
    },
    {
      title: "Java SE 8 Programmer",
      issuer: "Oracle University",
      date: "2020",
      link: "https://drive.google.com/file/d/1XXgTk6kPpEhmqTFIZ-HwNoYeaU-ToiXJ/view?usp=sharing",
      featured: true
    }
  ];

  const certificationGroups = {
    "DevOps & Development": [
      {
        title: "GitHub Foundations",
        issuer: "GitHub",
        date: "Mar 2025 - Expires Mar 2028",
        link: "https://www.credly.com/badges/9017d885-07cf-47c1-8555-1504aa1da8ca/linked_in_profile"
      }
    ],
    "Google Specializations": [
      {
        title: "Google Cybersecurity Specialization",
        issuer: "Google",
        date: "2023",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/KAYMPTSEHEDH"
      },
      {
        title: "Google Data Analytics Specialization",
        issuer: "Google",
        date: "2023",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/PZDX7769PU2M"
      }
    ],
    "Deep Learning & Neural Networks": [
      {
        title: "Deep Learning Specialization",
        issuer: "deeplearning.ai",
        date: "2020",
        link: "https://www.coursera.org/account/accomplishments/specialization/NSDVF7E6K8AK"
      }
    ],
    "Python & Machine Learning": [
      {
        title: "Programming for Everybody",
        issuer: "University of Michigan",
        date: "2020",
        link: "https://www.coursera.org/account/accomplishments/records/BQ4MWB7WUT5J"
      },
      {
        title: "Python Data Structures",
        issuer: "University of Michigan",
        date: "2020",
        link: "https://www.coursera.org/account/accomplishments/records/TCDGVPQJRR84"
      }
    ]
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Certifications</SectionTitle>
        
        <div className="mt-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Featured Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCertifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>

        {Object.entries(certificationGroups).map(([groupTitle, certifications]) => (
          <CertificationGroup 
            key={groupTitle} 
            title={groupTitle} 
            certifications={certifications} 
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;