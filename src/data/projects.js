export const projects = {
  software: [
    // Trash Detection Model - commented out for now, keeping code for later
    // {
    //   id: 'software-1',
    //   title: 'Trash Detection Model',
    //   description: 'Trained a YOLO-based object detection model on a Kaggle waste dataset to classify and count trash items in real time.',
    //   tech: ['Python', 'OpenCV', 'YOLO', 'NumPy', 'Kaggle', 'PyTorch', 'Supervision', 'FastAPI'],
    //   category: 'software',
    //   image: 'https://via.placeholder.com/600x400/0d2842/ffffff?text=Trash+Detection+Model',
    //   goal: 'Develop a real-time object detection system that can identify and classify different types of trash items from camera feeds, enabling automated waste management and recycling.',
    //   challenges: [
    //     'Training a YOLO model on a diverse waste dataset with varying lighting and object conditions',
    //     'Optimizing model performance for real-time inference on edge devices',
    //     'Deploying the model as a FastAPI service for streaming video processing',
    //     'Integrating with AR headset cameras for live detection and visual feedback'
    //   ],
    //   solution: 'Trained a YOLO-based object detection model using PyTorch on a comprehensive Kaggle waste dataset. Implemented preprocessing pipelines with OpenCV and NumPy for image augmentation and normalization. Deployed the model as a FastAPI service that can process video streams in real-time, enabling integration with AR headset cameras for live detection and visual feedback. Used Supervision library for post-processing and visualization of detection results.'
    // },
    {
      id: 'software-3',
      title: 'Augmented Reality Spacesuit Interface on Magic Leap',
      description: 'Columbia Space Initiative SUITS Mission Lead, participating in NASA Spacesuit User Interface Technologies design challenge. Building an intuitive AR interface for astronaut spacesuits. ',
      tech: ['Unity','C#', 'Magic Leap 2', 'AR Development','GitHub', 'Python', 'UI/UX', 'Navigation', 'AI'],
      category: 'software',
      image: 'https://via.placeholder.com/600x400/0d2842/ffffff?text=NASA+Spacesuit+UI',
      video: 'https://www.youtube.com/embed/IWt7Vkgpcjg',
      links: [
        { label: 'NASA SUITS Challenge', url: 'https://www.nasa.gov/learning-resources/spacesuit-user-interface-technologies-for-students/'}
      ],
      goal: 'Compete in NASA SUITS Challenge. Propose and develop comprehensive software tools and an intuitive AR interface for astronaut spacesuits that enhance mission capabilities and astronaut safety during space operations.',
      challenges: [
        'Leading a team of 30+ students with varying skill levels and coordinating their contributions',
        'Engineering multiple software components: object detection, telemetry display, navigation algorithms, and AI assistant',
        'Designing an intuitive AR interface for use in space environments with Magic Leap headset',
        'Coordinating with club leadership, administration, faculty, and NASA advisors to secure funding and meet deadlines',
        'Managing Agile development sprints and tracking progress across multiple workstreams',
        'Creating accessible technical documentation to onboard new team members',
        'Ensuring implementation feasibility according to NASA project specifications', 
        'Desiging full-stack software tools (telemetry display, navigation asisstance, AI assistant, etc).'
      ],
      solution: 'As Project Lead, delegated technical proposal writing tasks and brainstormed software solutions that aligned with NASA specifications, resulting in top 10 NASA selected proposals. Coordinated with multiple stakeholders including club leadership, administration, faculty, and NASA advisors to secure funding and meet critical deadlines. Defined project milestones and timeline, managing Agile development sprints and tracking progress with Jira and GitHub. Doubled team size by creating comprehensive technical documentation that made the project accessible to more students, fostering an inclusive environment. Successfully tested and presented the final project at NASA Johnson Space Center, culminating in a final paper documenting findings and development process. The project delivered object detection capabilities, telemetry display systems, navigation algorithms, and an AI assistant, all integrated into an intuitive AR interface using Unity C# and Magic Leap technology.'
    },
    {
      id: 'software-2',
      title: 'AWS Deepracer Project - DitecT Lab at Columbia University',
      description: 'Programed and tested control scripts for an AWS Deepracer autonomous driving project.',
      tech: ['Python', 'Raspberry Pi', 'AWS Deepracer'],
      category: 'software',
      image: '/autonomous driving/car.png',
      goal: 'Develop and test autonomous driving algorithms using PID control and sensor fusion techniques to regulate vehicle speed and trajectory in urban environments.',
      
      challenges: [
        'Integrating IMU feedback with Kalman filtering for accurate state estimation',
        'Implementing PID control algorithms for precise speed and trajectory regulation',
        'Testing algorithms on scaled-down models of urban intersections',
        'Optimizing control parameters for different driving scenarios'
      ],
      solution: 'Implemented PID control scripts in Python for both Raspberry Pi and AWS Deepracer platforms. Integrated IMU sensor feedback with Kalman filtering algorithms to achieve accurate state estimation and localization. Developed comprehensive testing procedures using scaled-down models of urban intersections to evaluate algorithm performance. Created data logging and visualization tools to analyze control system behavior and optimize PID parameters for different driving conditions.'
    }
  ],
  robotics: [
    {
      id: 'robotics-1',
      title: 'Autonomous Driving Claw Robot',
      description: 'Designed, prototyped, and built a driving robotic claw that searched for, picked up and stored objects autonomously.',
      tech: ['Python', 'Computer Vision', 'CAD', 'Raspberry Pi','PCB Design'],
      category: 'robotics',
      image: 'https://via.placeholder.com/600x400/0d2842/ffffff?text=Autonomous+Claw+Robot',
      video: '/IMG_6401.mov',
      goal: 'Designed and built an autonomous robotic vehicle that can navigate, detect objects using computer vision, and manipulate objects with a claw mechanism, all while operating independently.',
      challenges: [
        'Integrating multiple hardware components (motors, cameras, servos, sensors) into a cohesive system',
        'Implementing real-time computer vision for object detection and tracking',
        'Designing and fabricating custom PCB for component connectivity',
        'Developing PID control algorithms for precise autonomous movement',
        'Creating a robust mechanical design with laser-cut elements'
      ],
      solution: 'Designed and prototyped a complete robotic system from scratch, including custom PCB design for component integration. Implemented computer vision algorithms using CV2 and NumPy for real-time object detection and tracking. Coded the robot\'s autonomous movement using PID control algorithms with GPIO control on Raspberry Pi. Integrated ultrasonic distance sensors for obstacle avoidance and navigation. Built a mechanical claw system with servo control for object manipulation. Created CAD designs and laser-cut custom elements for the robot chassis and components.'
    }
  ],
  webApp: [
    {
      id: 'web-6',
      title: 'Pinball Machine Game',
      description: 'Built a working pinball machine game from scratch using Arduino, a custom circuit board, and a 3D printed and laser-cut components.',
      tech: ['Circuit Board Design', 'CAD', '3D Printing', 'Arduino', 'Soldering'],
      category: 'webApp',
      image: '/pinball/IMG_9886.JPG',
      images: ['/pinball/IMG_9886.JPG', '/pinball/IMG_9874.JPG', '/pinball/IMG_9795.JPG'],
      goal: 'Create an engaging and interactive pinball game that provides an authentic arcade experience with smooth physics, responsive controls, and entertaining gameplay.',
      challenges: [
        'Implementing realistic ball physics and collision detection',
        'Creating responsive controls that feel natural and intuitive',
        'Designing an engaging game layout with multiple bumpers and targets',
        'Building a scoring system that rewards skillful play',
        'Optimizing performance for smooth 60fps gameplay'
      ],
      solution: 'Developed a fully interactive pinball game using HTML5 Canvas for rendering and JavaScript for game logic. Implemented a custom physics engine to handle ball movement, collisions with bumpers, flippers, and walls. Created responsive flipper controls using keyboard and mouse inputs. Designed an engaging game layout with multiple scoring targets, bumpers, and special features. Built a comprehensive scoring system that tracks points, multipliers, and bonus rounds. Optimized rendering and physics calculations to maintain smooth 60fps gameplay across different devices.'
    },
    {
      id: 'web-3',
      title: 'Sachi Health Mobile App',
      description: 'Building MVP of a PCOS women\'s health app for a startup, focusing on backend, data integration, and scheduling features.',
      tech: ['React Native', 'Typescript', 'Expo', 'SQLite', 'AWS RDS', 'Apple HealthKit', 'Figma', 'Mobile Notifications'],
      category: 'webApp',
      image: '/sachihealth/IMG_7735.PNG',
      images: ['/sachihealth/IMG_7735.PNG', '/sachihealth/IMG_7737.PNG', '/sachihealth/IMG_7739.PNG', '/sachihealth/IMG_7740.PNG'],
      videos: ['/sachihealth/RPReplay_Final1762448307.mov', '/sachihealth/RPReplay_Final1767988976.mov'],
      goal: 'Develop a comprehensive women\'s health mobile application that integrates with wearables and health data to provide personalized health insights and medication management.',
      challenges: [
        'Translating Figma designs into a fully functional React Native application',
        'Implementing Apple HealthKit data pipelines for seamless health data integration',
        'Developing medication scheduling with notifications and reminders',
        'Building data storage solutions using both SQLite (local) and AWS RDS (cloud)',
        'Creating data visualization for health metrics and wearables data',
        'Collaborating effectively with a startup team of 5 in an agile environment'
      ],
      solution: 'Owned the development of key features including the medication scheduling page, app notifications and settings, and Apple HealthKit data pipelines. Implemented dual storage architecture using SQLite for local data persistence and AWS Relational Database for cloud synchronization. Built comprehensive data visualization components to display user health metrics and wearables data. Created feature and library documentation to facilitate successful collaboration with the startup team. Presented progress at weekly standups and contributed to the overall product strategy. Successfully deployed the MVP to Apple Testflight for beta testing.'
    },
    {
      id: 'web-4',
      title: 'DivHacks Hackathon Website',
      description: 'Columbia Women in Computer Science\'s Annual Hackathon Technical Development Lead. Launched DivHack\'s hackathon website for the 2026 MLH season.',
      tech: ['React', 'HTML', 'CSS', 'GitHub', 'Vercel'],
      category: 'webApp',
      image: 'https://via.placeholder.com/600x400/0d2842/ffffff?text=DivHacks+Website',
      video: '/divhacks/divhacks.mov',
      links: [
        { label: 'Website', url: 'https://columbiadivhacks.com' }
      ],
      goal: 'Migrate and modernize the DivHacks hackathon website to improve usability, accessibility, and functionality for 300+ hackers and sponsors.',
      challenges: [
        'Migrating legacy HTML/CSS site to modern React architecture',
        'Coordinating across multiple teams (web development, outreach, design)',
        'Implementing branch-based workflows in GitHub for collaborative development',
        'Configuring deployments with Vercel for seamless CI/CD',
        'Building mobile-responsive layouts and live-updating features',
        'Creating accessible features for diverse user needs'
      ],
      solution: 'Led a team of web developers by defining clear objectives, delegating tasks, and driving weekly check-ins to ensure timely delivery. Successfully migrated the legacy HTML/CSS site to React, improving code maintainability and performance. Implemented branch-based workflows in GitHub to enable parallel development and code review processes. Configured automated deployments with Vercel for continuous integration. Built intuitive features including mobile-responsive layouts, live-updating schedules, and a beginner resources page. Improved site usability and accessibility, resulting in a better experience for 300+ hackers and sponsors during the MLH 2026 season launch.'
    },
    {
      id: 'web-1',
      title: 'Cafe List Website',
      description: 'Built a full stack website for coffee shop lovers that allows users to sign in, view and like nearby cafes and interact with other users\' cafe preferences.',
      tech: [ 'Backend', 'Google Maps API', 'MySQL', 'Node.js', 'Express', 'Railway', 'Render', 'GitHub Pages'],
      category: 'webApp',
      image: '/cafelist/IMG_3CA4D8AFCBBC-1.jpeg',
      goal: 'Create a social platform where coffee enthusiasts can discover, save, and share their favorite cafes with a community of like-minded users.',
      challenges: [
        'Designing a scalable MySQL database schema for users, cafes, and interactions',
        'Implementing Google Maps API for location-based services and map visualization',
        'Building a full-stack application with separate frontend and backend deployments',
        'Creating a dynamic and shareable user experience with real-time interactions',
        'Hosting frontend, backend, and database across multiple platforms (Railway, Render, GitHub Pages)'
      ],
      solution: 'Developed a full-stack web application with React frontend and Node.js/Express backend. Designed and implemented a comprehensive MySQL database schema to store user accounts, cafe information, likes, and user preferences. Integrated Google Maps API to display cafe locations, enable location-based searches, and provide interactive map features. Implemented user authentication and authorization for secure sign-in functionality. Deployed the frontend on GitHub Pages, backend on Railway, and database on Render, ensuring proper CORS configuration and API connectivity across platforms. Created an intuitive UI that allows users to discover cafes, like their favorites, and see what other users are enjoying.'
    },
    {
      id: 'web-5',
      title: 'Studio April Showers Website',
      description: 'Personal portfolio to showcase my handmade jewelry business Studio April Showers.',
      tech: ['UI', 'HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      category: 'webApp',
      image: '/april showers website/studio.png',
      links: [
        { label: 'Website', url: 'https://studioaprilshowers.com' }
      ],
      goal: 'Create a professional website to showcase creative work and portfolio pieces.',
      challenges: [
        'Designing an intuitive and visually appealing user interface',
        'Ensuring fast load times and optimal performance',
        'Creating a responsive design that works across all devices'
      ],
      solution: 'Developed a clean and modern website to showcase creative work. Focused on user experience with intuitive navigation and fast loading times. Implemented responsive design principles to ensure optimal viewing across desktop, tablet, and mobile devices. The site is live at studioaprilshowers.com.'
    },
    // LookBook App - commented out for now, keeping code for later
    // {
    //   id: 'web-2',
    //   title: 'LookBook App - DevFest 2025 Hackathon',
    //   description: 'Developed backend features including photo upload/posting and account management for a fashion social media platform.',
    //   tech: ['MySQL', 'Node.js', 'XCode', 'Render', 'Railway'],
    //   category: 'webApp',
    //   image: '/lookbook.png',
    //   goal: 'Build a fashion social media platform that allows users to share outfit photos and manage their fashion profiles, developed under hackathon time constraints.',
    //   challenges: [
    //     'Developing robust backend APIs for photo upload and storage under time pressure',
    //     'Implementing secure account management and user authentication',
    //     'Collaborating effectively in a team of 4 with clear communication and task delegation',
    //     'Managing time effectively to deliver a working product within hackathon deadlines',
    //     'Integrating backend services with mobile app development in XCode'
    //   ],
    //   solution: 'Collaborated in a team of 4 to develop the backend infrastructure for a fashion social media platform. Built RESTful APIs using Node.js and Express for photo upload, posting, and account management. Designed MySQL database schema for users, posts, and social interactions. Implemented secure authentication and authorization systems. Deployed backend services on Railway and Render for reliability. Worked closely with frontend developers using XCode to ensure seamless API integration. Enhanced team communication, problem-solving, and time management skills while delivering a functional product within hackathon constraints.'
    // }
  ]
};
