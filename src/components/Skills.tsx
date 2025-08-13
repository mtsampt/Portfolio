'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Palette, Smartphone, Globe } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 90 },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'CI/CD', level: 75 },
        { name: 'Linux', level: 80 },
        { name: 'NPM/Yarn', level: 90 },
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'Responsive Design', level: 90 },
        { name: 'UI/UX Principles', level: 80 },
        { name: 'Accessibility', level: 85 },
        { name: 'Performance', level: 80 },
        { name: 'SEO', level: 75 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 70 },
        { name: 'Progressive Web Apps', level: 85 },
        { name: 'Mobile-First Design', level: 90 },
        { name: 'Touch Interactions', level: 80 },
        { name: 'App Store Guidelines', level: 65 },
        { name: 'Cross-Platform', level: 75 },
      ]
    },
    {
      title: 'Other Technologies',
      icon: Globe,
      skills: [
        { name: 'GraphQL', level: 70 },
        { name: 'WebSockets', level: 75 },
        { name: 'Testing (Jest)', level: 80 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Technical Writing', level: 75 },
        { name: 'Problem Solving', level: 90 },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and development capabilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
            Additional Skills & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Redux', 'Zustand', 'React Query', 'Prisma', 'tRPC', 'NextAuth.js',
              'Stripe', 'SendGrid', 'Vercel', 'Netlify', 'Heroku', 'Jest',
              'Cypress', 'Storybook', 'Webpack', 'Vite', 'ESLint', 'Prettier',
              'Husky', 'Lint-staged', 'Commitizen', 'Semantic Release'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-900/40 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
