// pages/projects.tsx
import React from 'react';
import Layout from '../components/layout';

const projects = [
  { title: 'Static resume builder', description: "Static Resume: A clean, single-page HTML and CSS resume for showcasing professional details with simplicity and elegance."},
  { title: 'Dynamic resume builder', description: 
    "Dynamic Resume: An interactive, customizable resume built with React and TypeScript, featuring real-time updates and seamless user experience." },
  { title: 'Editable resume builder', description: 
    "Editable Resume: A user-friendly, customizable resume template with an intuitive interface for live content editing and instant updates."},
  { title: 'Sharable resume builder', description: "Sharable Resume: A web-based resume with a unique link for easy sharing and seamless accessibility across devices." }, 
  { title: 'My portfolio', description: "Portfolio Website: A sleek, responsive platform built with Next.js, React, and custom CSS to professionally showcase projects, skills, and achievements." },
 



];

const Projects = () => {
  return (
    <Layout>
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
