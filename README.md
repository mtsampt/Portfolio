# Portfolio Website

A modern, dynamic portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases my skills as a Frontend/Fullstack Engineer with a beautiful, responsive design and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Ready**: Meta tags and structured data for better search visibility
- **Contact Form**: Interactive contact form for potential clients
- **Project Showcase**: Beautiful project cards with filtering capabilities
- **Skills Display**: Interactive skills section with progress bars

## 🛠️ Technologies Used

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   └── Contact.tsx         # Contact form
└── types/                  # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Your name, title, and description
- `src/components/About.tsx` - Personal details and experience
- `src/components/Contact.tsx` - Contact information and social links
- `src/components/Projects.tsx` - Your project portfolio
- `src/components/Skills.tsx` - Your technical skills

### Styling
- Colors: Modify the color palette in `tailwind.config.js`
- Fonts: Update font imports in `src/app/globals.css`
- Animations: Customize Framer Motion animations in components

### Content
- Update project descriptions and links
- Modify skill levels and categories
- Add/remove sections as needed
- Update meta tags in `src/app/layout.tsx`

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with mobile menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactions
- Optimized typography scaling

## 🌙 Dark Mode

Features a built-in dark mode toggle with:
- Smooth theme transitions
- Persistent theme preference
- Optimized color schemes for both themes
- Accessible contrast ratios

## 🚀 Performance Features

- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Built-in image optimization
- **Lazy Loading**: Components load as they come into view
- **Minimal Bundle**: Optimized bundle sizes
- **SEO Optimization**: Meta tags and structured data

## 📧 Contact Form

The contact form includes:
- Form validation
- Responsive design
- Accessible form controls
- Ready for backend integration

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to reach out!

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**