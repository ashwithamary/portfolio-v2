// src/components/sections/Community.jsx
import { Award, Users, Heart, Calendar } from 'lucide-react';
import SectionContainer from '../shared/SectionContainer';
import SectionTitle from '../shared/SectionTitle';

const Community = () => {
  return (
    <SectionContainer id="community">
      <SectionTitle>Extracurricular & Community Involvement</SectionTitle>
      
      {/* Current Volunteering */}
      <div className="mb-10 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <Heart className="mr-2 text-primary" size={24} />
          Current Volunteer Experience
        </h3>
        <div className="mb-6">
          <h4 className="text-xl font-semibold">Software Engineer Volunteer</h4>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Bright Mind Enrichment and Schooling (BMEAS) | January 2025 - Present</p>
          <p className="mb-3">Contributing technical expertise to support BMEAS's educational mission as a 501(c)(3) non-profit organization.</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>Collaborating with cross-functional teams to design and develop new application features</li>
            <li>Analyzing user requirements and aligning web design with organization's business goals</li>
            <li>Writing well-designed, testable, and efficient code following best development practices</li>
            <li>Integrating data from various back-end services and databases</li>
          </ul>
        </div>
      </div>
      
      {/* Professional Organizations */}
      <div className="mb-10 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <Users className="mr-2 text-primary" size={24} />
          Professional Organizations & Communities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
            <h4 className="text-xl font-semibold">AnitaB.org Member</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-2">2024 - Present</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Active member of global community supporting women in technology</li>
              <li>Attended Grace Hopper Celebration 2024 (Virtual)</li>
              <li>Participate in networking events and professional development opportunities</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
            <h4 className="text-xl font-semibold">Rewriting the Code Member</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-2">2023 - Present</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Engaged with community of women and non-binary individuals in tech</li>
              <li>Participate in mentorship opportunities and skill-building workshops</li>
              <li>Connect with industry professionals through networking events</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Previous Volunteering */}
      <div className="mb-10 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <Calendar className="mr-2 text-primary" size={24} />
          Previous Volunteer Experience
        </h3>
        <div className="mb-6">
          <h4 className="text-xl font-semibold">Street Cause Volunteer</h4>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Orphanages and Old Age Homes Division | 2020 - 2021</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>Managed fundraising initiatives to support local orphanages and old age homes</li>
            <li>Collaborated with team members to optimize fund management across the university</li>
            <li>Organized and executed fundraising events to increase community support</li>
            <li>Developed project management and teamwork skills while contributing to social causes</li>
          </ul>
        </div>
      </div>
      
      {/* Campus Involvement */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <Award className="mr-2 text-primary" size={24} />
          Campus Involvement
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
            <h4 className="text-xl font-semibold">George Mason University</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-2">2023 - 2024</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Member of the Computer Science Club</li>
              <li>Completed Active Leader Series certification</li>
              <li>Participated in technical workshops and hackathons</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
            <h4 className="text-xl font-semibold">KMIT, JNTUH</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-2">2018 - 2022</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Active member of the technical events committee</li>
              <li>Participated in coding competitions and hackathons</li>
              <li>Collaborated on cross-disciplinary projects</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Community;