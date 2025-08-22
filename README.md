🚀 Modern React Portfolio


A stunning, responsive portfolio website built with cutting-edge technologies to showcase projects, skills, and professional experience.

✨ Features
Modern Tech Stack: React 18 + TypeScript + Vite for blazing-fast development and optimal performance

Beautiful UI Components: Powered by Radix UI primitives with custom styling using Tailwind CSS

Smooth Animations: Engaging user experience with Framer Motion animations

Responsive Design: Mobile-first approach ensuring perfect display across all devices

Form Handling: Robust contact forms with React Hook Form and Zod validation

Component Architecture: Modular, reusable components for maintainability

Cloud Ready: Optimized for modern deployment platforms

Developer Experience: Hot reload, TypeScript support, and modern tooling

🛠️ Tech Stack
Core Technologies
React - Frontend library for building user interfaces

TypeScript - Type-safe JavaScript development

Vite - Next-generation frontend tooling

UI & Styling
Tailwind CSS - Utility-first CSS framework

Radix UI - Low-level UI primitives for accessibility

Framer Motion - Production-ready motion library

Lucide React - Beautiful & consistent icon toolkit

Form Management
React Hook Form - Performant forms with easy validation

Zod - TypeScript-first schema validation

Development Tools
Vite - Fast build tool and development server

TypeScript - Type checking and enhanced IDE support

📁 Project Structure
text
├── client/
│   ├── public/
│   │   └── attached_assets/       # Static assets
│   └── src/
│       ├── components/            # React components
│       │   ├── ui/               # Reusable UI components
│       │   ├── about.tsx         # About section
│       │   ├── contact.tsx       # Contact form
│       │   ├── experience.tsx    # Work experience
│       │   ├── footer.tsx        # Footer component
│       │   ├── hero.tsx          # Hero/landing section
│       │   ├── navigation.tsx    # Navigation bar
│       │   ├── projects.tsx      # Projects showcase
│       │   └── skills.tsx        # Skills display
│       ├── hooks/                # Custom React hooks
│       ├── lib/                  # Utility functions
│       ├── pages/                # Page components
│       └── index.html            # Entry point
├── attached_assets/              # Project assets
├── components.json               # Radix UI configuration
├── package.json                  # Dependencies and scripts
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite configuration
🚀 Quick Start
Prerequisites
Node.js (v18 or higher)

npm or yarn

Installation
Clone the repository

bash
git clone https://github.com/Gauravdub-git/Portfolio.git
cd Portfolio
Install dependencies

bash
npm install
# or
yarn install
Start development server

bash
npm run dev
# or
yarn dev
Open your browser
Navigate to http://localhost:5173 to view the portfolio

Available Scripts
npm run dev - Start development server with hot reload

npm run build - Build for production

npm run preview - Preview production build locally

npm run check - Type-check TypeScript files

🎨 Customization
Personal Information
Update content in the component files:

client/src/components/hero.tsx - Your name, title, and introduction

client/src/components/about.tsx - About section content

client/src/components/experience.tsx - Work experience and achievements

client/src/components/skills.tsx - Technical skills and competencies

client/src/components/projects.tsx - Project portfolio

Replace assets:

Add your images to attached_assets/ or client/public/attached_assets/

Update image references in components

Styling & Theme
Colors & Design:

Modify tailwind.config.ts for custom colors and themes

Adjust component styles in individual .tsx files

Animations:

Customize Framer Motion animations in component files

Add new animations using the Framer Motion API

Components
Add new sections by:

Creating a new component in client/src/components/

Importing and using it in client/src/pages/home.tsx

Adding corresponding navigation links

🚀 Deployment
Build for Production
bash
npm run build
The build output will be in the dist folder, ready for deployment to any static hosting service.

Deployment Options
Deploy the dist folder to your preferred hosting platform:

Vercel - Optimized for React applications

Netlify - Easy drag-and-drop deployment

AWS S3 - Scalable cloud storage

Firebase Hosting - Google's hosting platform

Surge.sh - Simple static web publishing

🤝 Contributing
Contributions, issues, and feature requests are welcome!

Fork the repository

Create your feature branch: git checkout -b feature/amazing-feature

Commit your changes: git commit -m 'Add some amazing feature'

Push to the branch: git push origin feature/amazing-feature

Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

📧 Contact
Gaurav Dubey

GitHub: @Gauravdub-git

LinkedIn: www.linkedin.com/in/dubey-gauravv

Email: dubey.gauravv@gmail.com

Portfolio: = (https://portfolio-rose-omega-qh9kxa2gi0.vercel.app/)


