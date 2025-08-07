# Overview

This is a personal portfolio website for Gaurav Dubey, a Computer Science Engineering student and full-stack developer. The application showcases skills, projects, experience, and provides a contact form for potential opportunities. It's built as a modern single-page application with a React frontend and Express.js backend, featuring sections for about, skills, projects, experience, and contact information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: Radix UI primitives with shadcn/ui components for accessible, customizable interfaces
- **Styling**: Tailwind CSS with CSS variables for consistent theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL for scalable cloud database
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Session Management**: Currently using memory storage with plans for database sessions via connect-pg-simple

## Data Storage
- **Primary Database**: PostgreSQL with two main tables:
  - `users` table for potential authentication (currently unused)
  - `contacts` table for storing contact form submissions
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database queries
- **Migrations**: Drizzle Kit for database schema migrations and management

## Authentication & Authorization
- **Current State**: Basic user schema exists but no active authentication
- **Planned**: Session-based authentication with PostgreSQL session storage
- **Contact Form**: Public endpoint with validation but no authentication required

## Build & Deployment
- **Development**: Vite dev server with Express API proxy
- **Production**: Static React build served by Express with API routes
- **Environment**: Replit-optimized with development banner and error overlay
- **Database Config**: Environment-based DATABASE_URL for different deployment stages

## Code Organization
- **Monorepo Structure**: Shared schema between client and server in `/shared` directory
- **Component Library**: Comprehensive UI component system based on Radix UI
- **Type Safety**: Full TypeScript implementation with shared types and validation schemas
- **Path Aliases**: Configured imports for clean code organization (@/, @shared/, etc.)

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting for primary data storage
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL operations

## UI & Styling
- **Radix UI**: Comprehensive primitive components for accessible interfaces
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide Icons**: Icon library for consistent visual elements
- **Font Awesome**: Additional icon library for specialized icons
- **Google Fonts**: Inter font family for typography

## Development Tools
- **Vite**: Build tool with React plugin for fast development
- **TypeScript**: Static typing for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Plugins**: Development environment integration and error handling

## Form & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library shared across client and server
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

## Server & API
- **Express.js**: Web framework for API endpoints and static file serving
- **CORS Support**: Cross-origin resource sharing for API access
- **Body Parsing**: JSON and URL-encoded request parsing middleware