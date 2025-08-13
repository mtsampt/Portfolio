'use client'

import { motion } from 'framer-motion'
import { User, Code, Globe, Award } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '25+' },
    { icon: Globe, label: 'Years Experience', value: '3+' },
    { icon: Award, label: 'Technologies', value: '15+' },
    { icon: User, label: 'Happy Clients', value: '20+' },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            A passionate developer who loves turning ideas into reality through code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white">
              Who I Am
            </h3>
            
            <div className="space-y-4 text-dark-600 dark:text-dark-400 leading-relaxed">
              <p>
                I'm a passionate Frontend and Fullstack Engineer with a love for creating 
                beautiful, functional, and user-centered digital experiences. With over 3 years 
                of experience in web development, I am always looking for new and innovative 
                ways to bring my clients' visions to life.
              </p>
              
              <p>
                I believe that design is about more than just making things look pretty – 
                it's about solving problems and creating intuitive, enjoyable experiences 
                for users. Whether I'm working on a website, mobile app, or any other 
                digital product, I bring my commitment to design excellence and user 
                centered thinking to every project I work on.
              </p>
              
              <p>
                I'm excited to make a difference. I'm always open to discussing new 
                opportunities, interesting projects, or creative partnerships.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <p className="text-sm text-dark-500 dark:text-dark-400">Name:</p>
                <p className="font-medium text-dark-900 dark:text-white">Your Name</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-dark-500 dark:text-dark-400">Email:</p>
                <p className="font-medium text-dark-900 dark:text-white">your.email@example.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-dark-500 dark:text-dark-400">From:</p>
                <p className="font-medium text-dark-900 dark:text-white">Your City, Country</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-dark-500 dark:text-dark-400">Freelance:</p>
                <p className="font-medium text-dark-900 dark:text-white">Available</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-dark-600 dark:text-dark-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <User className="w-24 h-24 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white dark:bg-dark-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-dark-800">
                <Code className="w-10 h-10 text-primary-600" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
