// src/data/projects.js
export const projects = [
  {
    id: 'ai-mock-interview',
    title: 'AI Mock Interview Platform',
    category: 'Full Stack',
    period: 'Mar 2025 - Present',
    description: 'AI-driven mock interview platform that simulates technical interviews with dynamic questions, speech-to-text analysis, and real-time feedback.',
    image: '/assets/images/AI_Interview Prep.png',
    demoLink: 'https://ai-interview-prep-theta.vercel.app/',
    githubLink: 'https://github.com/ashwithamary/ai-mock-interview',
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'Drizzle ORM',
      'PostgreSQL',
      'Google Gemini AI',
      'Clerk Auth',
      'Stripe'
    ],
    highlights: [
      'Created a full-stack AI platform that simulates technical interviews with 5 dynamically generated AI questions',
      'Incorporated speech-to-text analysis for real-time evaluation of responses',
      'Designed a responsive user interface with detailed feedback using a 5-point rating system',
      'Implemented a secure 2-tier subscription model using Stripe payment integration'
    ],
    keyFeatures: [
      'Dynamic AI question generation',
      'Speech-to-text analysis',
      'Personalized feedback system',
      'Stripe-powered subscription tiers',
      'Secure authentication with Clerk'
    ]
  },
  {
    id: 'coursematrix',
    title: 'CourseMatrix - Online Learning Platform',
    category: 'Full Stack',
    period: 'Feb 2025 - Mar 2025',
    description: 'Scalable MERN-based e-learning platform that supports course creation, secure payments, and role-based access control.',
    image: '/assets/images/CourseMatrix.png',
    demoLink: 'https://course-matrix-frontend.vercel.app/',
    githubLink: 'https://github.com/ashwithamary/coursematrix',
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Stripe',
      'Clerk Auth',
      'Cloudinary',
      'JWT'
    ],
    highlights: [
      'Built a scalable platform supporting 50+ courses with secure Clerk authentication',
      'Integrated Stripe payment processing with a 99.8% transaction success rate',
      'Established role-based access control with JWT authentication for educators and students',
      'Implemented secure content delivery for course materials via Cloudinary'
    ],
    keyFeatures: [
      'Role-based access control',
      'Secure payment processing',
      'Content management system',
      'Media optimization',
      'Interactive learning interface'
    ]
  },
  {
    id: 'hospital-inventory-system',
    title: 'Hospital Inventory Management System',
    category: 'Full Stack',
    period: 'Jan 2025 - Feb 2025',
    description: 'Real-time inventory management system for tracking and managing medical inventory records across multiple hospital locations.',
    image: '/assets/images/hospital.jpg',
    demoLink: 'https://hospital-inventory-management.vercel.app/',
    githubLink: 'https://github.com/ashwithamary/hospital-inventory-system',
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'Recharts',
      'REST API'
    ],
    highlights: [
      'Launched a real-time inventory system tracking 5000+ medical records across 50 hospital locations',
      'Integrated Socket.io for real-time updates, improving emergency response times by 15%',
      'Generated visualization dashboards with Recharts for inventory analytics processing 1000+ daily transactions',
      'Implemented secure multi-factor authentication for sensitive medical data'
    ],
    keyFeatures: [
      'Real-time inventory tracking',
      'Multi-location management',
      'Data visualization dashboard',
      'Secure authentication',
      'Emergency response optimization'
    ]
  },
  {
    id: 'keyphrase-extraction',
    title: 'AI-Powered Keyphrase Extraction System',
    category: 'Machine Learning',
    period: 'Jan 2024 - May 2024',
    description: 'Advanced NLP system for automated keyphrase extraction using state-of-the-art transformer models with multilingual support.',
    image: '/assets/images/keyphrase.jpg', 
    demoLink: '', 
    githubLink: 'https://github.com/ashwithamary/Gentopia-Mason', 
    techStack: [
      'Python',
      'BERT',
      'GPT-2',
      'RoBERTa',
      'mBERT',
      'PyTorch',
      'NLP'
    ],
    highlights: [
      'Implemented multiple transformer models (BERT, GPT-2, RoBERTa) achieving competitive F1 scores',
      'Enhanced model accuracy through data perturbation and preprocessing techniques',
      'Added multilingual support for 3 additional languages using mBERT',
      'Developed custom evaluation metrics for model performance analysis'
    ],
    keyFeatures: [
      'Multi-model ensemble approach',
      'Advanced preprocessing pipeline',
      'Multilingual support',
      'Custom evaluation framework'
    ]
  },
  {
    id: 'survey-system',
    title: 'University Survey System',
    category: 'Full Stack',
    period: 'Aug 2023 - Nov 2023',
    description: 'Distributed survey management system built with Spring Boot and Angular, supporting real-time data processing for large-scale university surveys.',
    image: '/assets/images/survey.jpg', 
    demoLink: '', 
    githubLink: 'https://github.com/ashwithamary/StackConnect', 
    techStack: [
      'Angular',
      'Spring Boot',
      'JDBC',
      'MySQL',
      'Docker',
      'RESTful APIs'
    ],
    highlights: [
      'Built scalable architecture handling 3000+ concurrent users',
      'Improved deployment efficiency by 15% through Docker containerization',
      'Optimized database queries for 5000+ records with efficient caching',
      'Implemented real-time data processing and analytics'
    ],
    keyFeatures: [
      'Real-time data processing',
      'Containerized deployment',
      'Advanced caching system',
      'Concurrent request handling'
    ]
  },
  {
    id: 'webcam-security',
    title: 'Webcam Security System',
    category: 'Embedded Systems',
    period: 'Aug 2023 - Nov 2023',
    description: 'Real-time camera-based intrusion detection system with instant notifications, built using low-level C programming.',
    image: '/assets/images/security.jpg', 
    demoLink: '', 
    githubLink: 'https://github.com/ashwithamary/Webcam_security_system', 
    techStack: [
      'C',
      'OpenCV',
      'Signal Processing',
      'Email Integration'
    ],
    highlights: [
      'Reduced incident response time by 20% through real-time monitoring',
      'Implemented 5+ signal analysis algorithms for motion detection',
      'Integrated instant email notification system',
      'Optimized system performance for resource efficiency'
    ],
    keyFeatures: [
      'Real-time motion detection',
      'Instant notifications',
      'Low-level optimization',
      'Signal processing algorithms'
    ]
  },
  {
    id: 'flight-delay-prediction',
    title: 'Flight Delay Prediction System',
    category: 'Machine Learning',
    period: 'Apr 2022 - Jul 2022',
    description: 'Advanced machine learning system leveraging time-series analysis and feature engineering to predict flight delays, providing actionable insights for airline operations optimization.',
    image: '/assets/images/flight.jpg', 
    demoLink: '',
    githubLink: 'https://github.com/ashwithamary/Flight_Delay_Major-Project', 
    techStack: [
      'Python',
      'scikit-learn',
      'pandas',
      'matplotlib',
      'seaborn',
      'XGBoost',
      'Random Forest'
    ],
    highlights: [
      'Achieved 82% prediction accuracy through implementation of Random Forest and XGBoost models',
      'Improved model performance by 15% using advanced time-series feature engineering techniques',
      'Analyzed 25-feature dataset and identified 3 critical correlations, improving prediction accuracy by 10%',
      'Demonstrated potential annual savings of $100,000 for airlines through optimized scheduling'
    ],
    keyFeatures: [
      'Time-series analysis and modeling',
      'Advanced feature engineering',
      'Comprehensive data visualization',
      'Cross-validation and hyperparameter tuning',
      'Real-time prediction capabilities'
    ]
  }
].sort((a, b) => new Date(b.period.split(' - ')[0]) - new Date(a.period.split(' - ')[0]));