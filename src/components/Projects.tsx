'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Globe, Smartphone } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing with Stripe, and an admin dashboard.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://project-demo.com',
      githubUrl: 'https://github.com/username/project',
      features: ['User Authentication', 'Payment Processing', 'Admin Dashboard', 'Responsive Design', 'SEO Optimized']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://task-app-demo.com',
      githubUrl: 'https://github.com/username/task-app',
      features: ['Real-time Updates', 'Drag & Drop', 'Team Collaboration', 'Dark Mode', 'Mobile Responsive']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather application that displays current weather conditions, forecasts, and interactive maps using OpenWeatherMap API.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['React', 'JavaScript', 'OpenWeatherMap API', 'CSS3', 'Chart.js'],
      liveUrl: 'https://weather-demo.com',
      githubUrl: 'https://github.com/username/weather-app',
      features: ['Current Weather', '5-Day Forecast', 'Interactive Maps', 'Location Search', 'Responsive Design']
    },
    {
      id: 4,
      title: 'Blog CMS',
      description: 'A content management system for blogs with markdown support, image optimization, and a clean admin interface.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Markdown', 'Cloudinary'],
      liveUrl: 'https://blog-cms-demo.com',
      githubUrl: 'https://github.com/username/blog-cms',
      features: ['Markdown Editor', 'Image Optimization', 'SEO Tools', 'Admin Panel', 'API Endpoints']
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Framer Motion, featuring smooth animations and dark mode.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Responsive Design'],
      liveUrl: 'https://portfolio-demo.com',
      githubUrl: 'https://github.com/username/portfolio',
      features: ['Smooth Animations', 'Dark Mode', 'Responsive Design', 'Performance Optimized', 'SEO Ready']
    },
    {
      id: 6,
      title: 'API Gateway Service',
      description: 'A microservices API gateway built with Node.js and Express, featuring rate limiting, authentication, and request routing.',
      image: '/api/placeholder/400/250',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
      liveUrl: 'https://api-gateway-demo.com',
      githubUrl: 'https://github.com/username/api-gateway',
      features: ['Rate Limiting', 'Authentication', 'Request Routing', 'Load Balancing', 'Monitoring']
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            A showcase of my recent work and development projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-700 text-dark-700 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-900/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary-400 to-blue-600 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-dark-900 hover:bg-primary-100 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-dark-900 hover:bg-primary-100 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300">Key Features:</h4>
                  <ul className="text-xs text-dark-600 dark:text-dark-400 space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
