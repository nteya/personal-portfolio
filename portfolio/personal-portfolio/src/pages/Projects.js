// src/pages/Projects.js

import React from 'react';
import './Projects.css'; // Importing the CSS file for Projects component

const projectsData = [
  {
    title: "Advanced To-Do List Application",
    description: "A feature-rich to-do list app with real-time updates, user authentication, and task management using React and Firebase. what makes it even more advanced is a clock and alarm it features which is something i came up with as i've never seen any application with these features",
    link: "https://github.com/yourusername/advanced-todo-list",
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio website showcasing projects and skills, built with React and CSS.",
    link: "https://github.com/yourusername/personal-portfolio",
  },
  {
    title: "Simple Blog Platform",
    description: "A minimalistic blog platform with CRUD functionality, using React for the frontend and Node.js for the backend.",
    link: "https://github.com/yourusername/simple-blog-platform",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;



