# Luciane Rodrigues Engineering & Architecture Website

## Overview

This is a modern, bilingual (Portuguese/English) website for Luciane Rodrigues Engineering & Architecture, a company specializing in engineering and architecture solutions with a focus on franchise projects, particularly as official Burger King partners. The application is built using a full-stack TypeScript architecture with React frontend and Express backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations
- **Session Management**: PostgreSQL sessions with connect-pg-simple
- **API Design**: RESTful endpoints with validation using Zod

### Development Stack
- **Language**: TypeScript throughout the entire stack
- **Package Manager**: npm
- **Development Server**: Custom Vite integration with Express
- **Hot Reload**: Vite HMR for frontend, tsx for backend development

## Key Components

### Database Schema
The application uses two main database tables:
- **users**: Basic user management (id, username, password)
- **contact_messages**: Contact form submissions with multilingual support

### API Endpoints
- `POST /api/contact`: Submit contact form messages
- `GET /api/contact/messages`: Retrieve all contact messages (admin)
- `PATCH /api/contact/messages/:id/processed`: Mark messages as processed

### Frontend Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Internationalization**: Portuguese and English language support
- **Contact Form**: Validated form with real-time feedback
- **Smooth Animations**: Framer Motion integration for enhanced UX
- **SEO Optimization**: Meta tags, structured data, and semantic HTML

### UI Components
- Complete design system using shadcn/ui
- Consistent styling with CSS custom properties
- Accessibility-compliant components using Radix UI
- Dark mode support (configured but not actively used)

## Data Flow

1. **User Interaction**: Users interact with the React frontend
2. **Form Submission**: Contact forms are validated client-side using Zod schemas
3. **API Communication**: Frontend communicates with Express backend via REST API
4. **Database Operations**: Backend uses Drizzle ORM to interact with PostgreSQL
5. **Response Handling**: Success/error responses are displayed using toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm & drizzle-zod**: Database ORM and validation
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **framer-motion**: Animation library
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast bundler for production builds

## Deployment Strategy

### Production Build
1. Frontend built using Vite to `dist/public`
2. Backend bundled using esbuild to `dist/index.js`
3. Static assets served from the built frontend

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: Uses NODE_ENV=development for dev features
- **Production**: Optimized builds with minification

### Database Migration
- Uses Drizzle Kit for schema management
- Migrations stored in `./migrations` directory
- Schema defined in `./shared/schema.ts`

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```