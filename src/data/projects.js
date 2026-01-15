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
      tech: ['Python', 'Raspberry Pi', 'AWS Deepracer', 'Matplotlib'],
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
      videos: ['/sachihealth/RPReplay_Final1762448307.mov', '/sachihealth/RPReplay_Final1767988976.mov'],
      goal: 'As a full stack intern at Sachi Health, a startup working to provide better health data and support to women with PCOS, I was in charge of integrating Apple Health metrics, building scheduling features, and enabling a variety of notification functionality. ',
      solution: '[Sorry! This part of my portfolio is in progress.]'
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
      solution: '[Sorry! This part of my portfolio is in progress.] '
    },
    {
      id: 'web-1',
      title: 'Cafe List Website',
      description: 'Built a full stack website for coffee shop lovers that allows users to sign in, view and like nearby cafes and interact with other users\' cafe preferences.',
      tech: [ 'Backend', 'Google Maps API', 'MySQL', 'Node.js', 'Express', 'Railway', 'Render', 'GitHub Pages'],
      category: 'webApp',
      image: '/cafelist/IMG_3CA4D8AFCBBC-1.jpeg',
      goal: 'Create a social platform where coffee enthusiasts can discover, save, and share their favorite cafes and interact with other users.',
      solution: '[Sorry! This part of my portfolio is in progress.] '
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
      solution: '[Sorry! This part of my portfolio is in progress.]'
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
