# Georgian Point Restaurant Website

## Overview

Georgian Point is a React-based restaurant website that showcases authentic Georgian cuisine in Baku, Azerbaijan. The application provides a complete digital presence with multi-language support, responsive design, and modern web technologies. Built as a full-stack application with Express.js backend and React frontend, it features a sophisticated UI using Tailwind CSS and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Menu, Gallery, and Contact
- **State Management**: TanStack React Query for server state management and data fetching
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design system featuring golden color scheme and serif typography (Playfair Display)
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: Hot module replacement and development middleware through Vite integration
- **API Structure**: RESTful endpoints with `/api` prefix for clean separation

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless database provider
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: User management system with username/password authentication structure
- **Storage Interface**: Abstracted storage layer supporting both memory storage (development) and database persistence

### Authentication & Session Management
- **Session Store**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with unique usernames and secure password storage
- **Validation**: Zod schemas for runtime type checking and data validation

### Internationalization
- **Multi-language Support**: English, Russian, and Azerbaijani languages
- **Translation System**: Custom hook-based translation system with localStorage persistence
- **Content**: Restaurant-specific translations for menu items, descriptions, and UI elements

### Development & Deployment
- **Development**: Hot reloading with Vite dev server and Express middleware integration
- **Build Process**: Separate client and server builds with esbuild for server bundling
- **Environment**: Environment-based configuration with development/production modes
- **Asset Handling**: Static asset serving with proper caching and optimization
- **Netlify Deployment**: Ready for static deployment with netlify.toml configuration, SPA routing redirects, and optimized production build

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod resolvers
- **Routing**: Wouter for lightweight client-side navigation
- **State Management**: TanStack React Query for server state and caching

### UI Component Libraries
- **Design System**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Font Awesome icons for consistent iconography
- **Typography**: Google Fonts integration (Playfair Display, Inter)

### Database & Backend Services
- **Database Provider**: Neon Database (PostgreSQL serverless)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Server Framework**: Express.js with TypeScript support

### Development Tools
- **Build Tools**: Vite for frontend, esbuild for backend bundling
- **Development**: tsx for TypeScript execution, runtime error overlay
- **Code Quality**: TypeScript with strict configuration
- **Replit Integration**: Cartographer plugin and development banner for Replit environment

### Utility Libraries
- **Validation**: Zod for schema validation and type inference
- **Styling Utilities**: clsx and class-variance-authority for conditional styling
- **Date Handling**: date-fns for date manipulation and formatting
- **UI Enhancements**: Embla Carousel for image galleries, cmdk for command interfaces