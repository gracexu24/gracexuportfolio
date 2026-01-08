export const projects = {
  software: [
    {
      id: 'software-1',
      title: 'Distributed Systems Framework',
      description: 'A high-performance distributed computing framework with load balancing and fault tolerance.',
      tech: ['Python', 'Docker', 'Kubernetes', 'Redis'],
      category: 'software',
      image: 'https://via.placeholder.com/600x400/4a90e2/ffffff?text=Distributed+Systems',
      goal: 'Create a scalable distributed systems framework that can handle millions of concurrent requests with minimal latency.',
      challenges: [
        'Implementing efficient load balancing algorithms',
        'Ensuring data consistency across distributed nodes',
        'Handling network partitions and node failures',
        'Optimizing memory usage for large-scale deployments'
      ],
      solution: 'Developed a custom consensus algorithm using Raft protocol, implemented intelligent load balancing with consistent hashing, and created a robust failure detection and recovery system. Used Redis for distributed caching and Kubernetes for container orchestration.'
    },
    {
      id: 'software-2',
      title: 'Machine Learning Pipeline',
      description: 'An end-to-end ML pipeline for automated model training and deployment.',
      tech: ['Python', 'TensorFlow', 'MLflow', 'AWS'],
      category: 'software',
      image: 'https://via.placeholder.com/600x400/4a90e2/ffffff?text=ML+Pipeline',
      goal: 'Build an automated machine learning pipeline that can train, evaluate, and deploy models with minimal human intervention.',
      challenges: [
        'Managing large datasets efficiently',
        'Automating hyperparameter tuning',
        'Version controlling models and experiments',
        'Deploying models to production with zero downtime'
      ],
      solution: 'Created a modular pipeline using TensorFlow for model development, MLflow for experiment tracking, and implemented automated hyperparameter optimization using Bayesian methods. Built CI/CD pipelines for seamless model deployment.'
    }
  ],
  robotics: [
    {
      id: 'robotics-1',
      title: 'Autonomous Navigation System',
      description: 'A ROS-based autonomous navigation system for mobile robots with SLAM capabilities.',
      tech: ['ROS', 'C++', 'Python', 'OpenCV', 'LiDAR'],
      category: 'robotics',
      image: 'https://via.placeholder.com/600x400/4a90e2/ffffff?text=Autonomous+Robot',
      goal: 'Develop an autonomous navigation system that allows robots to map unknown environments and navigate safely to target locations.',
      challenges: [
        'Real-time SLAM processing with limited computational resources',
        'Handling dynamic obstacles and changing environments',
        'Ensuring safety in human-robot interactions',
        'Optimizing path planning algorithms for efficiency'
      ],
      solution: 'Implemented a hybrid SLAM approach combining LiDAR and visual odometry, developed a dynamic obstacle avoidance system using predictive algorithms, and created a safety layer with emergency stop capabilities. Used A* algorithm with dynamic replanning for efficient path finding.'
    },
    {
      id: 'robotics-2',
      title: 'Robotic Arm Control System',
      description: 'Precision control system for a 6-DOF robotic arm with computer vision integration.',
      tech: ['C++', 'OpenCV', 'Arduino', 'Python', 'ROS'],
      category: 'robotics',
      image: 'https://via.placeholder.com/600x400/4a90e2/ffffff?text=Robotic+Arm',
      goal: 'Create a precise control system for a robotic arm that can perform complex manipulation tasks with visual feedback.',
      challenges: [
        'Achieving sub-millimeter precision in positioning',
        'Real-time computer vision processing',
        'Handling inverse kinematics calculations',
        'Compensating for mechanical backlash and vibrations'
      ],
      solution: 'Developed a PID control system with feedforward compensation, implemented real-time object detection using OpenCV, and created a robust inverse kinematics solver. Added Kalman filtering to reduce sensor noise and improve positioning accuracy.'
    }
  ],
  webApp: [
    {
      id: 'web-1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      category: 'webApp',
      image: 'https://via.placeholder.com/600x400/4a90e2/ffffff?text=E-Commerce',
      goal: 'Build a scalable e-commerce platform that can handle thousands of concurrent users with secure payment processing and comprehensive admin tools.',
      challenges: [
        'Implementing secure payment processing',
        'Handling high traffic loads',
        'Managing inventory in real-time',
        'Creating an intuitive user experience'
      ],
      solution: 'Developed a microservices architecture with React frontend, Node.js/Express backend, and MongoDB for data storage. Integrated Stripe for secure payments, implemented Redis caching for performance, and created a comprehensive admin dashboard for inventory and order management.'
    },
    {
      id: 'web-2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      tech: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
      category: 'webApp',
      image: 'https://via.placeholder.com/600x400/4a90e2/ffffff?text=Task+App',
      goal: 'Create a cross-platform task management app that enables teams to collaborate in real-time with seamless synchronization across devices.',
      challenges: [
        'Real-time synchronization across multiple devices',
        'Offline functionality and data persistence',
        'Managing complex state in a mobile app',
        'Ensuring data consistency in collaborative editing'
      ],
      solution: 'Built a React Native app with Firebase for real-time database and authentication. Implemented Redux for state management, added offline support with local storage, and used Firebase Cloud Functions for server-side logic. Created conflict resolution algorithms for collaborative editing.'
    },
    {
      id: 'web-3',
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts.',
      tech: ['React', 'API Integration', 'Chart.js', 'Geolocation API'],
      category: 'webApp',
      image: 'https://via.placeholder.com/600x400/4a90e2/ffffff?text=Weather+Dashboard',
      goal: 'Develop an intuitive weather dashboard that provides accurate forecasts with beautiful visualizations and location-based services.',
      challenges: [
        'Integrating multiple weather APIs',
        'Handling geolocation permissions',
        'Creating responsive and accessible UI',
        'Optimizing API calls and caching data'
      ],
      solution: 'Created a React app that integrates with multiple weather APIs for redundancy. Implemented geolocation with fallback options, used Chart.js for data visualization, and added service workers for offline functionality. Implemented intelligent caching to minimize API calls.'
    }
  ]
};

