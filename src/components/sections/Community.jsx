// src/components/sections/Community.jsx
import { useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import { Award, Users, Heart, Calendar } from 'lucide-react';

const InvolvementCard = ({ title, organization, period, description, achievements }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="text-primary font-medium">{organization}</p>
    <p className="text-gray-500 dark:text-gray-400">{period}</p>
    
    {description && (
      <p className="text-gray-600 dark:text-gray-300 mt-4">{description}</p>
    )}
    
    <div className="mt-4">
      <ul className="space-y-3">
        {achievements.map((achievement, i) => (
          <li key={i} className="flex items-start">
            <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></span>
            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const OrganizationCard = ({ name, period, achievements }) => (
  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{period}</p>
    <ul className="space-y-2">
      {achievements.map((achievement, i) => (
        <li key={i} className="flex items-start">
          <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></span>
          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Extracurricular & Community Involvement</SectionTitle>
        
        <div className="mt-8 mb-4 text-center">
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Beyond my technical work, I'm actively involved in the broader tech community and volunteer initiatives,
            continuously seeking opportunities to give back and grow both professionally and personally.
          </p>
        </div>
        
        {/* Current Volunteer Experience */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Heart className="w-5 h-5 mr-2 text-primary" />
            Current Volunteer Experience
          </h3>
          
          <InvolvementCard 
            title="Software Engineer Volunteer"
            organization="Bright Mind Enrichment and Schooling (BMEAS)"
            period="January 2025 - Present"
            description="Contributing technical expertise to support BMEAS's educational mission as a 501(c)(3) non-profit organization."
            achievements={[
              "Collaborating with cross-functional teams to design and develop new application features",
              "Analyzing user requirements and aligning web design with organization's business goals",
              "Writing well-designed, testable, and efficient code following best development practices",
              "Integrating data from various back-end services and databases"
            ]}
          />
        </div>
        
        {/* Professional Organizations */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Users className="w-5 h-5 mr-2 text-primary" />
            Professional Organizations & Communities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <OrganizationCard 
              name="AnitaB.org Member"
              period="2024 - Present"
              achievements={[
                "Active member of global community supporting women in technology",
                "Attended Grace Hopper Celebration 2024 (Virtual)",
                "Participate in networking events and professional development opportunities"
              ]}
            />
            
            <OrganizationCard 
              name="Rewriting the Code Member"
              period="2024 - Present"
              achievements={[
                "Engaged with community of women and non-binary individuals in tech",
                "Participate in mentorship opportunities and skill-building workshops",
                "Connect with industry professionals through networking events"
              ]}
            />
          </div>
        </div>
        
        {/* Previous Volunteer Experience */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-primary" />
            Previous Volunteer Experience
          </h3>
          
          <InvolvementCard 
            title="Street Cause Volunteer"
            organization="Orphanages and Old Age Homes Division"
            period="2020 - 2021"
            achievements={[
              "Managed fundraising initiatives to support local orphanages and old age homes",
              "Collaborated with team members to optimize fund management across the university",
              "Organized and executed fundraising events to increase community support",
              "Developed project management and teamwork skills while contributing to social causes"
            ]}
          />
        </div>
        
        {/* Campus Involvement */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Award className="w-5 h-5 mr-2 text-primary" />
            Campus Involvement
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <OrganizationCard 
              name="George Mason University"
              period="2023 - 2024"
              achievements={[
                "Member of the Computer Science Club",
                "Completed Active Leader Series certification",
                "Participated in technical workshops and hackathons"
              ]}
            />
            
            <OrganizationCard 
              name="KMIT, JNTUH"
              period="2018 - 2022"
              achievements={[
                "Active member of the technical events committee",
                "Participated in coding competitions and hackathons",
                "Collaborated on cross-disciplinary projects"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;