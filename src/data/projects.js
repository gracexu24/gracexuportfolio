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
      image: '/magicleap.jpg',
      video: 'https://www.youtube.com/embed/IWt7Vkgpcjg',
      links: [
        { label: 'NASA SUITS Challenge', url: 'https://www.nasa.gov/learning-resources/spacesuit-user-interface-technologies-for-students/'}
      ],
      goal: 'Compete in the NASA SUITS Challenge. Propose and develop software tools and an intuitive AR interface for astronaut spacesuits that enhance mission capabilities and astronaut safety during space operations.',
      solution: 'I have participated in this challenge for two years. SUITS is one of the missions that is part of Columbia Space Initiative, Columbia’s largest engineering club, that competes in NASA’s design challenge. In the 24-25 school year, I helped design and create the map feature that allowed functionality such as dropping location pins, tracking locations of moving objects like other astronauts and rovers, and navigating to points of interest on the best paths. I programmed in C# and python to get data from a simulated telemetry source and display accurate location readings and map these locations on the interface. The video shows a quick demo of the basic layout and usage of our design. At the end of the school year, our team traveled to the NASA space center to test our project in a simulated moon environment and present it to NASA engineers and the community. \n\nIn the 25-26 school year, I am currently serving as the Project (Mission) Lead for a 30 person team of engineers and designers. This year, we have completed and submitted a 20 page technical proposal outlining our plan to solve this year’s challenge. We are currently working on developing our interface completely from scratch on a Magic Leap 2 (pivoting from Hololens which we used in the year prior). I’ve been working to teach Unity and scripting basics to our many new members and create a collaborative engineering environment amongst the team. Our new design will include intuitive menu and navigation tools, introducing sound and motion gestures to reduce complexity and make the experience faster for astronauts. We are also implementing a new AI voice assistant and incorporating computer vision technologies to better identify surrounding objects. \n\nThis is one of my favorite projects to be a part of and I’m excited to share the new developments we make soon! '
    },
    {
      id: 'software-2',
      title: 'AWS Deepracer Project - DitecT Lab at Columbia University',
      description: 'Programed and tested control scripts for an AWS Deepracer autonomous driving project.',
      tech: ['Python', 'IMU Sensor', 'Raspberry Pi', 'AWS Deepracer', 'Matplotlib'],
      category: 'software',
      image: '/autonomous driving/car.png',
      goal: 'Develop and test control scripts for a robotic car to analyze autonomous driving algorithms in a scaled-down model urban environment.',
      solution: 'My team’s task was to use IMU feedback to control the car’s speed and direction. I used the car’s recorded acceleration to estimate velocity and write PID control scripts that kept the velocity of the car constant. I recorded and graphed the data after testing and found that filtering of noise from the IMU sensor was needed to prevent the loss of control in the vehicle. We found that this was still not as accurate as we would’ve hoped and proposed the use of wheel encoders in the next iteration. We also tested used IMU readings for localization purposes. I tested the accuracy of our script\'s ability to estimate the distance traveled from start to finish. '
    }
  ],
  robotics: [
    {
      id: 'robotics-1',
      title: 'Autonomous Driving Claw Robot',
      description: 'Designed, prototyped, and built a driving robotic claw that searched for, picked up and stored objects autonomously.',
      tech: ['Python', 'Computer Vision', 'CAD', 'Raspberry Pi','Circuit Board Design'],
      category: 'robotics',
      image: '/autonomousclaw.png',
      imageRotation: 90,
      imageSize: 'large',
      video: '/IMG_6401.mov',
      goal: 'Build a robotic vehicle that can navigate, find objects, and manipulate objects with a claw mechanism, and store them. Named “Phoney Bot”, I wanted this vehicle to find and pick up phones and prevent people from taking the phone out.',
      solution: 'I designed this project in CAD and built it with a Raspberry Pi and hardware components (motors, cameras, servos, lights, laser cut parts, etc). I used Python to take in camera input, detect objects, and control the vehicle to adjust and drive towards the object. I used servos to control the claws and phone carrying ramp. I used ultrasonic sensors for obstacle detection and to detect when the robot was being approached, which would cause a blaring alarm. This project was a great experience for me to get hands-on experience with the hardware, electronics, and software and combine a lot of different features and components. '
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
      goal: 'For Columbia’s Art of Engineering course, teams of 4 were challenged to create electronic games from scratch. We chose to create a fully functioning pinball machine. ',
      solution: 'We custom designed the game from scratch and manufactured the box and obstacles. I was in charge of designing the point counting mechanism and displaying it for the player to see. With only an Arduino and limited budget to buy additional components, I had to decide on the best way to track when balls passed by specific places to count points. Initially I had tried to use pressure sensors, however the ball was unable to trigger it reliably. I then came up with a design that used an LED and a photoresistor, mounted on opposite walls of an opening. When a ball passed in front, the light would momentarily be blocked and the point count would increase. To display the points, we used a 7-segment display, however this required more pins to the Arduino than we had available. I used a shift register to increase the Arduino’s capabilities and properly display the score. To tie it all together, I designed and assembled a circuit board with all of the electronic components. I ran into a lot of trouble with faulty connections and did a lot of debugging and experimentation. This was the most fun project I have done for a course so far!'
    },
    {
      id: 'web-3',
      title: 'Sachi Health Mobile App',
      description: 'Building MVP of a PCOS women\'s health app for a startup, focusing on backend, data integration, and scheduling features.',
      tech: ['React Native', 'Typescript', 'Expo', 'SQLite', 'AWS RDS', 'Apple HealthKit', 'Figma', 'Mobile Notifications'],
      category: 'webApp',
      image: '/sachihealth/IMG_7735.PNG',
      imageCrop: 'top',
      images: ['/sachihealth/IMG_7735.PNG', '/sachihealth/IMG_7737.PNG', '/sachihealth/IMG_7739.PNG', '/sachihealth/IMG_7740.PNG'],
      videos: ['/sachihealth/RPReplay_Final1767988976.mov', '/sachihealth/RPReplay_Final1762448307.mov'],
      goal: 'As a full stack intern at Sachi Health, a startup working to provide better health data and support to women with PCOS, I was in charge of integrating Apple Health metrics, building scheduling features, and enabling a variety of notification functionality. ',
      solution: `I got the amazing opportunity to work as a founding engineer on Sachi Health’s startup team, where I spent six months building the MVP of a PCOS support mobile app.
My first major task was integrating Apple Health data into a React Native app. I ran into challenges incorporating iOS-specific queries into the React Native codebase, but after extensive research and experimentation, I identified and implemented a library that bridged the Apple HealthKit framework with our mobile app. I then parsed and structured the data according to our product requirements, user data preferences, and Apple HealthKit constraints. I designed the database schema and built the functions needed to store data locally and sync it to the server through daily updates.
Next, I developed the medication scheduling and editing pages based on Figma mockups. This involved building the frontend, formatting and inserting user data into existing databases, and ensuring smooth interaction flows. One challenge I faced was designing an intuitive scheduling interface that balanced flexibility with simplicity for handling prescription routines.
For my final project, I took ownership of designing the UI, tech stack, and integration for in-app notifications. I used the expo-notifications API to configure local notifications, implemented scheduling logic, and built customization controls. I proposed a local storage based notification system to minimize server usage while supporting features such as customizable messages, default templates, scheduling, privacy settings, and persistent preferences. I also designed the system to scale across future notification use cases and integrated it with other app features such as medication creation. Throughout development, I tested across Apple beta TestFlight releases, gathered feedback from users and teammates, and rigorously validated edge cases.
Overall, this experience allowed me to work closely with the founders, contribute to product decisions, and set technical goals in a fast moving startup environment. It challenged me to navigate large codebases, consider real-world constraints like time, scalability, and server costs, and write production quality code that was peer-reviewed and tested. It also gave me hands-on experience understanding both the strengths and limitations of AI coding assistants in real development workflows.
`
    },
    {
      id: 'web-4',
      title: 'DivHacks Hackathon Website',
      description: 'Columbia Women in Computer Science\'s Annual Hackathon Technical Development Lead. Launched DivHack\'s hackathon website for the 2026 MLH season.',
      tech: ['React', 'HTML', 'CSS', 'GitHub', 'Vercel'],
      category: 'webApp',
      image: '/divhacks/divhacksimage.png',
      video: '/divhacks/divhacks.mov',
      links: [
        { label: 'Website', url: 'https://columbiadivhacks.com' }
      ],
      goal: 'As Technical Development Lead, I led the creation of the DivHacks hackathon website and helped organize the event for 300+ hackers and sponsors.',
      solution: `I led the redevelopment of the DivHacks hackathon (diversity hackathon hosted by Columbia Women in CS) website, rebuilding a legacy HTML/CSS site into a modern, scalable React-based platform to support the MLH 2026 season. The original site had become difficult to maintain and slow to iterate on, so I designed and executed a full migration to a component-based architecture, improving code maintainability, performance, and team development speed.

I established collaborative workflows by introducing branch-based development and structured code reviews in GitHub, enabling parallel feature development across multiple contributors. I also configured automated deployments with Vercel, allowing instant preview environments and reliable production releases.

On the product side, I built mobile-responsive layouts, live-updating schedule and announcement components, and a beginner resources hub to improve accessibility for first-time hackers. I worked closely with design and outreach teams to align technical implementation with user experience goals, and led weekly sprint planning and check-ins to keep development on track for the team.

The final platform launched successfully for the MLH 2026 season, serving 300+ hackers and sponsors with improved usability, accessibility, and real-time event updates. This project strengthened my experience in modern web architecture, cross-functional team leadership, and building reliable production systems for real users.`
    },
    {
      id: 'web-1',
      title: 'Cafe List Website',
      description: 'Built a full stack website for coffee shop lovers that allows users to sign in, view and like nearby cafes and interact with other users\' cafe preferences.',
      tech: [ 'Backend', 'Google Maps API', 'MySQL', 'Node.js', 'Express', 'Railway', 'Render', 'GitHub Pages'],
      category: 'webApp',
      image: '/cafelist/IMG_3CA4D8AFCBBC-1.jpeg',
      goal: 'Create a social platform where coffee enthusiasts can discover, save, and share their favorite cafes and interact with other users.',
      solution: `I built this full-stack web application with a friend, with my focus primarily on backend system design and infrastructure. One of my primary challenges was designing and implementing a MySQL database schema to manage user accounts, cafe data, user interactions, and preferences. I structured relational tables to support efficient queries for likes and recommendations.

I developed a Node.js and Express backend to serve RESTful APIs connecting the frontend to the database. This included implementing user sign in, building endpoints for searching cafes, storing user activity, and retrieving real-time interaction data. I also integrated the Google Maps API on the backend to support location-based recommendations.

To deploy the system, I hosted the backend server on Railway, the MySQL database on Render, and the frontend on GitHub Pages. I configured CORS policies, environment variables, and API routing to ensure seamless communication across services hosted on different platforms.

The final application delivers a dynamic user experience where users can discover cafes, save favorites, and view community activity.`
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
      goal: ' I create handmade jewelry and needed a place to showcase my work. The goal was to create a professional website to share my work and drive more online customers.',
      solution: 'Throughout high school I created and sold handmade jewelry on etsy, at in-person art markets, and at local handmade stores. I created this website to feature my work and experiences. This project was mainly front-end focused and showcases work that I am very proud of.'
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
