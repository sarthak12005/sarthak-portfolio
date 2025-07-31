const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');

// Load environment variables
dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sarthak-portfolio';
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const seedProjects = async () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React.js and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration with Stripe.",
      shortDescription: "Full-stack e-commerce application with React and Node.js",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API", "Tailwind CSS"],
      githubUrl: "https://github.com/sarthak/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.netlify.app",
      featured: true,
      category: "web",
      status: "active",
      order: 1
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features using Socket.io.",
      shortDescription: "Real-time collaborative task management application",
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/sarthak/task-manager",
      liveUrl: "https://task-manager-demo.netlify.app",
      featured: true,
      category: "web",
      status: "active",
      order: 2
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather conditions and forecasts using external weather APIs with beautiful UI.",
      shortDescription: "Responsive weather application with forecasts",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather API", "Chart.js"],
      githubUrl: "https://github.com/sarthak/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.netlify.app",
      featured: false,
      category: "web",
      status: "active",
      order: 3
    }
  ];

  await Project.deleteMany({});
  await Project.insertMany(projects);
  console.log('Projects seeded successfully');
};

const seedSkills = async () => {
  const skills = [
    // Frontend
    { name: "React.js", category: "frontend", proficiency: 9, yearsOfExperience: 3, order: 1 },
    { name: "JavaScript", category: "frontend", proficiency: 9, yearsOfExperience: 4, order: 2 },
    { name: "HTML5", category: "frontend", proficiency: 10, yearsOfExperience: 5, order: 3 },
    { name: "CSS3", category: "frontend", proficiency: 9, yearsOfExperience: 5, order: 4 },
    { name: "Tailwind CSS", category: "frontend", proficiency: 8, yearsOfExperience: 2, order: 5 },
    { name: "Bootstrap", category: "frontend", proficiency: 8, yearsOfExperience: 3, order: 6 },
    
    // Backend
    { name: "Node.js", category: "backend", proficiency: 8, yearsOfExperience: 3, order: 1 },
    { name: "Express.js", category: "backend", proficiency: 8, yearsOfExperience: 3, order: 2 },
    { name: "REST APIs", category: "backend", proficiency: 9, yearsOfExperience: 3, order: 3 },
    { name: "GraphQL", category: "backend", proficiency: 6, yearsOfExperience: 1, order: 4 },
    
    // Database
    { name: "MongoDB", category: "database", proficiency: 8, yearsOfExperience: 3, order: 1 },
    { name: "MySQL", category: "database", proficiency: 7, yearsOfExperience: 2, order: 2 },
    { name: "PostgreSQL", category: "database", proficiency: 6, yearsOfExperience: 1, order: 3 },
    
    // Tools
    { name: "Git", category: "tools", proficiency: 9, yearsOfExperience: 4, order: 1 },
    { name: "VS Code", category: "tools", proficiency: 10, yearsOfExperience: 5, order: 2 },
    { name: "Postman", category: "tools", proficiency: 8, yearsOfExperience: 3, order: 3 },
    { name: "Figma", category: "tools", proficiency: 7, yearsOfExperience: 2, order: 4 },
    
    // Languages
    { name: "Python", category: "languages", proficiency: 7, yearsOfExperience: 2, order: 1 },
    { name: "Java", category: "languages", proficiency: 6, yearsOfExperience: 1, order: 2 },
    { name: "TypeScript", category: "languages", proficiency: 7, yearsOfExperience: 2, order: 3 }
  ];

  await Skill.deleteMany({});
  await Skill.insertMany(skills);
  console.log('Skills seeded successfully');
};

const seedExperience = async () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      startDate: new Date('2023-01-01'),
      endDate: null,
      description: [
        "Developed and maintained web applications using React.js and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive designs and optimized application performance",
        "Worked with MongoDB and Express.js to build robust backend systems"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      employmentType: "full-time",
      isCurrentJob: true,
      order: 1
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      startDate: new Date('2022-01-01'),
      endDate: new Date('2022-12-31'),
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Collaborated with designers to implement pixel-perfect UI/UX designs",
        "Optimized website performance and improved user experience",
        "Maintained and updated existing client websites"
      ],
      technologies: ["JavaScript", "React.js", "CSS3", "HTML5", "Bootstrap"],
      employmentType: "full-time",
      isCurrentJob: false,
      order: 2
    },
    {
      title: "Web Developer Intern",
      company: "StartUp Innovations",
      location: "San Francisco, CA",
      startDate: new Date('2021-06-01'),
      endDate: new Date('2021-12-31'),
      description: [
        "Assisted in developing company website and internal tools",
        "Learned modern web development practices and technologies",
        "Participated in code reviews and team meetings",
        "Contributed to open-source projects and documentation"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Git", "WordPress"],
      employmentType: "internship",
      isCurrentJob: false,
      order: 3
    }
  ];

  await Experience.deleteMany({});
  await Experience.insertMany(experiences);
  console.log('Experience seeded successfully');
};

const seedData = async () => {
  try {
    await connectDB();
    
    console.log('Starting data seeding...');
    await seedProjects();
    await seedSkills();
    await seedExperience();
    
    console.log('Data seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
