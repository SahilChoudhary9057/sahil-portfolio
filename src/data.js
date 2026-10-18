
export const profile = {
  name: "Sahil Choudhary",

  roles: [
    "Data Science Enthusiast",
    "Python Developer",
    "Full-Stack Developer",
    "Machine Learning Learner",
    "CSE Student"
  ],

  intro:
    "I build practical applications using Python, Flask, databases, and machine learning. I enjoy solving problems and turning ideas into working projects.",

  location: "Jaipur, Rajasthan, India",

  college: "Poornima College of Engineering, Jaipur",
  degree: "B.Tech in Computer Science and Engineering",
  session: "2025 – Present",

  email: "Sahilchoudhary7477@gmail.com",
  github: "https://github.com/SahilChoudhary9057",
  linkedin: "https://www.linkedin.com/in/sahil-choudhary-b952063b2/",

  // Add these PDF files inside the public folder.
  resume: "/Sahil-Choudhary-Resume.pdf",

  // Contact form key from https://web3forms.com (free). Paste your access key here.
  // Messages are sent to the email you register there.
  formKey: "PASTE_YOUR_WEB3FORMS_KEY_HERE",

  about: [
    "I am a Computer Science Engineering student at Poornima College of Engineering, Jaipur. I have a background in Computer Science Engineering through my diploma and am interested in Python development, Data Science, and Machine Learning.",

    "I have worked on full-stack web applications, medical inventory management, disease prediction, and e-commerce development. I have also gained practical industry exposure through internships in Python programming and Data Science.",

    "Currently, I am improving my Java and Data Structures and Algorithms skills, exploring machine learning, and building projects to strengthen my software development skills."
  ],

  stats: [
    { value: "9.9", label: "Diploma CGPA" },
    { value: "9.7", label: "B.Tech 4th Semester CGPA" },
    { value: "3+", label: "Internship / Training Experiences" }
  ]
};


// ===== EDUCATION =====

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    college: "Poornima College of Engineering, Jaipur",
    duration: "2025 – Present",
    result: "4th Semester CGPA: 9.7"
  },
  {
    degree: "Diploma in Computer Science Engineering",
    college: "Govt. Ramchandra Khaitan Polytechnic College, Jaipur",
    duration: "Completed in 2025",
    result: "CGPA: 9.9"
  }
];


// ===== INTERNSHIPS & TRAINING =====

export const internships = [
  {
    role: "Software Developer Intern – Data Science",
    company: "Fulminous Software Private Limited",
    location: "Jaipur, Rajasthan",
    duration: "3 June 2026 – 18 July 2026",
    description:
      "Worked on data collection, preprocessing, exploratory data analysis (EDA), data visualization, statistical analysis, and machine learning model development.",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Data Visualization"
    ],
    certificate: "/Fulminous-Internship-Certificate.pdf"
  },
  {
    role: "Python Programming Intern",
    company: "Grras Solutions Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    duration: "45 Days",
    description:
      "Gained practical exposure to Python programming, data handling, problem-solving, and developing scripts for practical use cases.",
    skills: ["Python", "Programming", "Problem Solving"]
  },
  {
    role: "Communication Skills Training",
    company: "MNIT Incubation Center",
    location: "Jaipur, Rajasthan",
    duration: "30 Days",
    description:
      "Developed professional communication, teamwork, and presentation skills in a startup and industry-oriented environment.",
    skills: ["Communication", "Teamwork", "Presentation"]
  }
];


// ===== TECHNICAL SKILLS =====
// Level is a visual representation from 0 to 100.

export const skills = {
  Languages: [
    { name: "Python", level: 65 },
    { name: "Java", level: 50 },
    { name: "C", level: 50 },
    { name: "SQL", level: 65 }
  ],

  "Web & Database": [
    { name: "Flask", level: 65 },
    { name: "MySQL", level: 65 },
    { name: "HTML / CSS / JavaScript", level: 60 },
    { name: "REST API Development", level: 55 }
  ],

  "Data Science & ML": [
    { name: "Pandas", level: 55 },
    { name: "NumPy", level: 55 },
    { name: "Matplotlib", level: 55 },
    { name: "Scikit-learn", level: 50 },
    { name: "Data Preprocessing & EDA", level: 55 },
    { name: "Web Scraping", level: 50 }
  ],

  "Tools & Platforms": [
    { name: "Git", level: 50 },
    { name: "GitHub", level: 50 },
    { name: "VS Code", level: 65 },
    { name: "Jupyter Notebook", level: 60 }
  ]
};


// ===== PROJECTS =====
// Status: "Live", "Working", or "In progress"

export const projects = [
  {
    title: "E-Commerce Website – Mixpotli",
    type: "Web app",
    status: "Live",
    desc:
      "Developed a full-stack e-commerce application with product listings, product management, cart functionality, and database integration using Flask. The application was prepared for deployment on Render.",
    tags: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "HTML", "CSS"],
    live: "https://mixpotli.onrender.com",
    repo: ""
  },
  {
    title: "Disease Prediction System",
    type: "AI / ML",
    status: "Working",
    desc:
      "Developed a machine learning classification model using the Decision Tree algorithm to predict diseases from symptom-based data. Worked on data preprocessing, feature selection, label encoding, and model evaluation.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    live: "",
    repo: ""
  },
  {
    title: "Medical Inventory Management System",
    type: "Web app",
    status: "Working",
    desc:
      "Developed a database-driven web application to manage medicine inventory and doctor records, with CRUD operations and backend logic using Flask and MySQL.",
    tags: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    live: "",
    repo: ""
  },
  {
    title: "Face Recognition Attendance System",
    type: "AI / Vision",
    status: "In progress",
    desc:
      "Working on a computer vision application that uses face recognition from a camera feed to support attendance tracking. Developing and debugging the application components.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    live: "",
    repo: ""
  },
  {
    title: "Virtual Try-On",
    type: "AI / Vision",
    status: "In progress",
    desc:
      "Developing a Python-based application to explore virtual clothing previews using camera input and computer vision techniques.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    live: "",
    repo: ""
  }
];


// ===== JOURNEY =====

export const journey = [
  {
    when: "2025",
    title: "Completed Diploma & Started B.Tech",
    where: "Jaipur, Rajasthan",
    note:
      "Completed a Diploma in Computer Science Engineering with a CGPA of 9.9 and started B.Tech in Computer Science and Engineering."
  },
  {
    when: "2025",
    title: "Python Programming Internship",
    where: "Grras Solutions Pvt. Ltd.",
    note:
      "Gained practical experience in Python programming, data handling, and problem-solving."
  },
  {
    when: "2026",
    title: "Data Science Internship",
    where: "Fulminous Software Private Limited",
    note:
      "Worked on data preprocessing, EDA, visualization, statistical analysis, and machine learning."
  },
  {
    when: "Now",
    title: "Building Projects & Improving DSA",
    where: "Learning and Development",
    note:
      "Working on web applications, machine learning projects, Java DSA practice, and technical skills."
  }
];


// ===== CERTIFICATES =====
// file    = full certificate (opens in a new tab)
// preview = small image shown on the card

export const certificates = [
  {
    title: "Introduction to Operating Systems",
    issuer: "NPTEL · IIT Madras",
    date: "Jul – Sep 2026",
    detail: "8-week course. Score 52% (Assignments 19.58/25, Proctored Exam 31.5/75).",
    badge: "NPTEL",
    file: "/certificates/nptel-operating-systems.jpg",
    preview: "/certificates/previews/nptel-operating-systems.jpg"
  },
  {
    title: "Data Science Internship",
    issuer: "Fulminous Software Private Limited",
    date: "3 June – 18 July 2026",
    detail: "Software Developer Intern – Data Science.",
    badge: "Internship",
    file: "/Fulminous-Internship-Certificate.pdf",
    preview: "/certificates/previews/fulminous-internship.jpg"
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL · IIT Madras",
    date: "Jan – Apr 2026",
    detail: "12-week course. Score 52% (Assignments 21.94/25, Proctored Exam 30/75).",
    badge: "NPTEL",
    file: "/certificates/nptel-machine-learning.pdf",
    preview: "/certificates/previews/nptel-machine-learning.jpg"
  },
  {
    title: "Google Cloud Career Launchpad – Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "25 Oct 2025",
    detail: "Completed all courses and labs in the Cloud Digital Leader track.",
    badge: "Google Cloud",
    file: "/certificates/google-cloud-digital-leader.jpg",
    preview: "/certificates/previews/google-cloud-digital-leader.jpg"
  },
  {
    title: "Problem Solving through Programming in C",
    issuer: "NPTEL · IIT Kharagpur",
    date: "Jul – Oct 2025",
    detail: "12-week course. Elite certificate, score 60% (Assignments 24.81/25, Proctored Exam 35.25/75).",
    badge: "NPTEL Elite",
    file: "/certificates/nptel-c-programming.pdf",
    preview: "/certificates/previews/nptel-c-programming.jpg"
  },
  {
    title: "Certificate of Appreciation – Academic Achievement",
    issuer: "Govt. Ram Chandra Khaitan Polytechnic College, Jaipur",
    date: "15 Aug 2025",
    detail: "Awarded for outstanding academic achievements in the 2024-25 academic year (Diploma CSE, VI semester).",
    badge: "Award",
    file: "/certificates/academic-achievement-award.jpg",
    preview: "/certificates/previews/academic-achievement-award.jpg"
  }
];
