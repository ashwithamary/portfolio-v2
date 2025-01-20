// src/data/projects.js
export const projects = [
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
    id: 'hospital-inventory',
    title: 'Hospital Inventory Management',
    category: 'Full Stack',
    period: 'Oct 2020 - Dec 2020',
    description: 'MERN stack application for managing hospital inventory with real-time ventilator availability tracking across multiple locations.',
    image: '/assets/images/hospital.jpg', 
    demoLink: '', 
    githubLink: 'https://github.com/ashwithamary/hospital_inventory_management', 
    techStack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'REST APIs'
    ],
    highlights: [
      'Developed full-stack solution managing 5000+ inventory records',
      'Created real-time dashboard for ventilator availability',
      'Implemented CRUD operations with REST APIs',
      'Optimized ambulance routing system'
    ],
    keyFeatures: [
      'Real-time tracking',
      'Interactive dashboard',
      'Inventory management',
      'Location-based routing'
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
