# Best Service Trucking LLC - Landing Page

## Project Overview
A professional, multi-page landing website for Best Service Trucking LLC, built with React, TypeScript, Tailwind CSS, and FontAwesome icons.

## Technology Stack
- **Framework**: React 19 with TypeScript
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4
- **Icons**: FontAwesome (solid icons)
- **Font**: Inter (via @fontsource/inter)
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Main navigation header with mobile menu
│   └── Footer.tsx          # Footer with contact info and service areas
├── layouts/
│   └── MainLayout.tsx      # Main layout wrapper (Header + Content + Footer)
├── pages/
│   ├── Home.tsx            # Landing page with hero, about, services, fleet sections
│   ├── About.tsx           # Detailed company information and values
│   └── Services.tsx        # Comprehensive service offerings and coverage
├── App.tsx                 # Main app with routing configuration
├── main.tsx                # Application entry point
├── index.css               # Global styles and font imports
└── App.css                 # App-specific styles
```

## Pages

### 1. Home Page (`/`)
- **Hero Section**: Company tagline with call-to-action buttons
- **Key Features**: Safety, on-time delivery, regional coverage, expert team
- **About Section**: Company story and mission
- **Services Overview**: Port services and flexible pickup/delivery
- **Fleet & Team**: Equipment, drivers, and tracking technology
- **Partners**: Trusted Korean company partnerships
- **Contact Section**: Full contact information

### 2. About Page (`/about`)
- Company story and establishment details
- Mission, vision, and values
- Core differentiators (safety, reliability, partnership)
- Experience and expertise metrics
- Call to action

### 3. Services Page (`/services`)
- Detailed port container services
- Flexible pickup and delivery options
- Container types handled (containers, dry vans, tanks)
- Service coverage map
- Primary and extended service areas
- Call to action with quote request

## Design Features

### Color Scheme
- **Primary**: Blue-900 to Blue-800 gradient (professional, trustworthy)
- **Accent**: Yellow-400/500 (visibility, energy)
- **Background**: White and Gray-50 (clean, readable)

### Typography
- **Font Family**: Inter (modern, professional, highly readable)
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### UI Components
- Responsive navigation with mobile hamburger menu
- Smooth scroll behavior for same-page navigation
- Hover effects and transitions
- Card-based content sections
- Icon integration throughout
- Shadow and gradient effects

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg (Tailwind defaults)
- Collapsible mobile menu
- Responsive grid layouts
- Touch-friendly button sizes

## Key Features

1. **Multi-Page Navigation**
   - React Router for seamless page transitions
   - Active link highlighting
   - Smooth scrolling for in-page sections

2. **Professional Branding**
   - Consistent color scheme matching trucking industry standards
   - Clear hierarchy and typography
   - Professional imagery suggestions via FontAwesome icons

3. **Information Architecture**
   - Clear separation of content (Home, About, Services)
   - Easy-to-find contact information
   - Prominent call-to-action buttons

4. **Performance**
   - Vite for fast development and builds
   - Optimized font loading
   - Minimal CSS framework overhead

## Contact Information
- **Phone**: (770) 668-3771 / (770) 626-9777
- **Email**: bstrucking25@gmail.com
- **Address**: 106 Valambrosia Rd., Dublin, GA 31021

## Service Areas
- **Primary**: Georgia, Alabama, South Carolina, Florida
- **Extended**: Tennessee, Louisiana, Texas
- **Hub**: Port of Savannah

## Running the Project

### Development
```bash
npm run dev
```
Starts development server at `http://localhost:5173` (or next available port)

### Build
```bash
npm run build
```
Creates production build in `dist/` folder

### Preview
```bash
npm run preview
```
Preview production build locally

## Future Enhancements
- Add image gallery for fleet and operations
- Integrate contact form with email service
- Add customer testimonials section
- Implement tracking portal
- Add blog/news section
- SEO optimization
- Analytics integration
