# CoGig — Cooperative Gig Services Platform

> **SIH Problem Statement 89 — Cooperative Gig Services Platform for Household & Community Services**

CoGig is a community-focused gig services platform designed to connect **customers who need household/community services** with **trusted local workers/service providers**.

The platform follows a **cooperative model**, where local workers can discover jobs, build reputation, earn fairly, and keep a larger share of the value generated through the platform.

This repository currently contains the **frontend MVP**. Backend APIs, database, authentication, real-time communication and payment integration can be added in the next development phase.

---

## 1. Problem Statement

Many households and communities regularly need services such as:

- Home cleaning
- Plumbing
- Electrical work
- Gardening
- Elder care
- Child care
- Moving assistance
- Appliance repair
- Other local household and community services

At the same time, many skilled local workers struggle with:

- Finding reliable customers
- Getting regular work
- Building a professional reputation
- Receiving fair compensation
- Accessing digital tools
- Avoiding excessive platform commissions

### Proposed Solution

CoGig provides a single digital platform where:

**Customers can**
- Discover nearby service providers
- Compare ratings and experience
- Post service requirements
- Select suitable workers
- Track their jobs
- Manage service history

**Workers can**
- Create professional profiles
- Find nearby jobs
- Receive job requests/offers
- Build ratings and reputation
- Track earnings
- Participate in a cooperative service ecosystem

---

# 2. Current Project Status

### Frontend MVP — Completed

The current version focuses on the user experience and frontend architecture.

### Implemented

- Responsive landing page
- Service marketplace
- Service category filtering
- Local workers directory
- Worker profile cards
- Job posting form
- Job posting success flow
- Customer dashboard
- Cooperative impact dashboard
- Sign-in UI
- Responsive navigation
- Mobile-friendly layouts
- Reusable React components
- Client-side routing
- Mock data for services, workers and jobs

### Not Yet Connected

The following are planned for the backend phase:

- Real authentication
- Database
- API integration
- Worker registration
- Customer registration
- Job persistence
- Worker job offers
- Real-time chat
- Notifications
- Payment gateway
- Ratings/reviews persistence
- Location/GPS integration
- Cooperative wallet/earnings system
- Admin panel

---

# 3. Major Features

## 3.1 Landing Page

The homepage introduces the platform and explains its cooperative model.

### Includes

- CoGig branding
- Service search
- Location selector
- Verified worker trust indicators
- Cooperative model messaging
- Popular services
- How CoGig works
- Nearby workers
- Worker recruitment CTA
- Responsive design

---

## 3.2 Service Marketplace

Customers can browse available household and community services.

### Current Categories

- Household
- Repairs
- Care
- Community

### Current Services

- Home Cleaning
- Plumbing
- Electrician
- Gardening
- Elder Care
- Child Care
- Moving Help
- Appliance Repair

Each service displays:

- Service name
- Category
- Starting price
- Community rating
- Navigation to marketplace

---

## 3.3 Worker Directory

The worker directory provides a quick overview of local service providers.

Each worker card contains:

- Worker name
- Initials/avatar
- Skill/service
- Rating
- Completed jobs
- Approximate distance
- Verification indicator
- Chat button
- Profile button

### Future Worker Profile

The backend phase can expand this into:

- Profile photo
- Bio
- Skills
- Experience
- Certifications
- Availability
- Service radius
- Pricing
- Reviews
- Completed jobs
- Earnings
- Cooperative membership

---

# 4. Post a Job

Customers can create a service request using the job posting form.

### Form Fields

- Service category
- Job title
- Work description
- Preferred date
- Estimated budget
- Location

### User Flow

```text
Customer
   ↓
Post a Job
   ↓
Enter Service Details
   ↓
Set Budget & Location
   ↓
Submit
   ↓
Job Successfully Posted
```

The current version uses frontend state only.

In the backend version, the submitted job will be stored in the database and made available to suitable workers.

---

# 5. Customer Dashboard

The dashboard gives customers an overview of their service activity.

### Current Dashboard Sections

#### Statistics

- Active jobs
- Upcoming jobs
- Total amount spent
- Customer rating

#### Recent Jobs

Shows:

- Job name
- Schedule
- Job status
- Service category

#### Cooperative Impact

Displays an example of:

- Money earned by local workers
- Percentage of spending retained in the local network
- Number of workers supported
- Completed jobs

This section is intended to communicate the **social/cooperative impact** of the platform.

---

# 6. Authentication UI

A basic sign-in screen is included.

### Current UI

- Mobile number input
- Continue button
- Google sign-in placeholder
- Terms & Privacy message

### Planned Authentication

```text
Customer
   ├── Mobile OTP
   └── Google Login

Worker
   ├── Mobile OTP
   └── Google Login

Admin
   └── Secure Admin Login
```

Role-based authentication will be implemented during backend development.

---

# 7. User Roles

The complete platform is planned around three primary roles.

## Customer

Customers can:

- Register/login
- Search services
- View workers
- Post jobs
- Receive worker offers
- Select workers
- Chat with workers
- Track jobs
- Make payments
- Rate workers
- View service history

## Worker / Service Provider

Workers can:

- Register/login
- Create worker profile
- Add skills
- Set service area
- Set availability
- Browse suitable jobs
- Send offers
- Accept jobs
- Chat with customers
- Track earnings
- Receive ratings
- Build reputation

## Admin / Cooperative Manager

Admins can:

- Manage users
- Verify workers
- Manage service categories
- Monitor jobs
- Handle disputes
- Monitor payments
- Manage cooperative policies
- View platform analytics
- Monitor worker participation

---

# 8. Cooperative Model

CoGig is not intended to be just another gig marketplace.

The platform is designed around a **cooperative ecosystem**.

### Core Principles

- Fair worker earnings
- Transparent pricing
- Local employment
- Community participation
- Worker reputation
- Reduced dependency on traditional intermediaries
- Community-oriented service delivery

### Example Flow

```text
Customer
   │
   │ Service Request
   ▼
CoGig Platform
   │
   ├── Nearby Workers
   │
   ├── Ratings
   │
   ├── Offers
   │
   └── Matching
   │
   ▼
Selected Worker
   │
   ▼
Service Completed
   │
   ▼
Payment
   │
   ├── Worker Earnings
   └── Cooperative Platform Share
```

The exact commission/revenue-sharing model can be configured during backend implementation.

---

# 9. Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | UI development |
| Vite | Development/build tooling |
| React Router | Client-side routing |
| Lucide React | Icons |
| CSS3 | Responsive UI and styling |
| JavaScript ES Modules | Application logic |

The project uses **ES Modules** throughout.

---

# 10. Project Structure

```text
cooperative-gig-services-frontend/
│
├── index.html
├── package.json
├── README.md
│
└── src/
    │
    ├── main.jsx
    ├── styles.css
    │
    ├── components/
    │
    └── pages/
```

The current MVP keeps the application intentionally lightweight. As the project grows, components/pages can be separated further into feature-specific modules.

Suggested future structure:

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ServiceCard.jsx
│   ├── WorkerCard.jsx
│   ├── JobCard.jsx
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Workers.jsx
│   ├── WorkerProfile.jsx
│   ├── PostJob.jsx
│   ├── JobDetails.jsx
│   ├── Dashboard.jsx
│   └── Login.jsx
│
├── services/
│   ├── api.js
│   ├── auth.js
│   └── socket.js
│
├── context/
│   ├── AuthContext.jsx
│   └── AppContext.jsx
│
└── utils/
```

---

# 11. Application Routes

Current frontend routes:

| Route | Screen |
|---|---|
| `/` | Home |
| `/services` | Service Marketplace |
| `/workers` | Worker Directory |
| `/post-job` | Post a Job |
| `/dashboard` | Customer Dashboard |
| `/login` | Sign In |

---

# 12. UI / UX Design

The interface uses a modern community-service visual language.

### Design Goals

- Clean
- Trustworthy
- Friendly
- Professional
- Mobile responsive
- Easy for non-technical users
- Community-oriented

### Design Elements

- Teal/green primary branding
- Rounded cards
- Clear CTAs
- Service icons
- Worker verification indicators
- Rating indicators
- Responsive layouts
- Accessible form controls
- Consistent spacing and typography

---

# 13. Responsive Design

The frontend supports:

- Desktop
- Laptop
- Tablet
- Mobile

The navigation, grids, forms, dashboard and service cards adapt to smaller screens.

---

# 14. Installation

## Prerequisites

Install:

- Node.js
- npm

Recommended modern Node.js version:

```text
Node.js 18+
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Vite will display a local development URL in the terminal.

## Production Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

# 15. Available NPM Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates the production build.

```bash
npm run preview
```

Runs the production build locally.

---

# 16. Backend Development Roadmap

The next phase should introduce a proper backend architecture.

## Phase 1 — Authentication

- Customer registration
- Worker registration
- Admin login
- Mobile OTP
- JWT/session authentication
- Role-based authorization

## Phase 2 — Database

Potential database:

```text
MongoDB
```

Main collections:

```text
users
workers
services
jobs
offers
bookings
messages
reviews
payments
notifications
cooperative_transactions
```

## Phase 3 — Job Management

Implement:

- Create job
- Edit job
- Cancel job
- View job
- Job status
- Worker offers
- Accept/reject offers
- Booking confirmation

### Job Status

```text
OPEN
 ↓
OFFERS_RECEIVED
 ↓
WORKER_SELECTED
 ↓
ACCEPTED
 ↓
IN_PROGRESS
 ↓
COMPLETED
 ↓
RATED
```

---

# 17. Worker Matching

A future matching engine can consider:

- Service category
- Worker skills
- Distance
- Availability
- Rating
- Previous jobs
- Price
- Customer preference
- Worker workload

Example:

```text
Job Request
     ↓
Service Matching
     ↓
Location Filtering
     ↓
Availability Filtering
     ↓
Rating / Reputation
     ↓
Ranked Workers
     ↓
Customer Selection
```

---

# 18. Real-Time Chat

Future implementation can use WebSockets/Socket.IO.

Features:

- Customer ↔ Worker messaging
- Job-specific chat
- Message timestamps
- Read status
- Online/offline status
- Notification support
- Attachment support

---

# 19. Payment System

The future payment module can support an Indian payment gateway such as:

- Razorpay
- UPI
- Cards
- Net Banking

Potential flow:

```text
Customer
   ↓
Book Worker
   ↓
Payment
   ↓
Payment Verification
   ↓
Job Completion
   ↓
Worker Settlement
   ↓
Cooperative Accounting
```

Payment integration should be implemented securely on the backend; secret API keys must never be exposed in frontend code.

---

# 20. Ratings & Reviews

After completing a service, customers will be able to rate workers.

Potential rating dimensions:

- Service quality
- Professionalism
- Timeliness
- Communication
- Overall experience

Workers may also be able to rate customers to improve trust and safety within the marketplace.

---

# 21. Notifications

Planned notification events:

- New job request
- New worker offer
- Offer accepted
- Job reminder
- Worker arrival
- Job completed
- Payment confirmation
- New review
- New chat message

Possible channels:

```text
In-app
SMS
Email
Push notification
```

---

# 22. Location Features

Future location integration can provide:

- Current location
- Service radius
- Nearby workers
- Distance calculation
- Map view
- Location-based worker matching
- Address selection

Potential technology:

```text
Google Maps API / Mapbox / OpenStreetMap
```

---

# 23. Admin Dashboard

A complete admin panel should provide:

### User Management

- Customers
- Workers
- Verification
- Account status

### Service Management

- Categories
- Services
- Pricing ranges

### Job Management

- Active jobs
- Completed jobs
- Cancelled jobs
- Disputes

### Financial Management

- Transactions
- Worker payouts
- Platform/cooperative share
- Refunds

### Analytics

- Total users
- Active workers
- Jobs completed
- Revenue
- Worker earnings
- Customer retention
- Service demand

---

# 24. Security Considerations

Backend implementation should include:

- Password/OTP security
- JWT/session security
- Role-based authorization
- Input validation
- Rate limiting
- Secure payment verification
- API authentication
- MongoDB query sanitization
- File upload validation
- HTTPS
- Sensitive environment variables
- Protection against unauthorized job/payment manipulation

Never commit:

```text
.env
API keys
JWT secrets
Database passwords
Payment gateway secrets
```

---

# 25. Environment Variables

A future backend/frontend integration may use:

```env
VITE_API_URL=
VITE_SOCKET_URL=
VITE_MAPS_API_KEY=
```

Backend-only secrets should remain on the server:

```env
MONGODB_URI=
JWT_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

---

# 26. Future Advanced Features

Possible extensions include:

- AI-based worker-job matching
- Dynamic service pricing
- Voice-based job posting
- Multilingual interface
- Hindi/English support
- Community group bookings
- Subscription plans
- Emergency services
- Worker skill verification
- Digital certificates
- Worker training resources
- Cooperative voting/governance
- Worker profit-sharing
- Community service credits
- Referral system
- Fraud detection
- Dispute resolution workflow
- Analytics and demand forecasting

---

# 27. Suggested Development Roadmap

```text
PHASE 1
Frontend MVP
├── Landing page
├── Marketplace
├── Workers
├── Post Job
├── Dashboard
└── Authentication UI
        ↓
PHASE 2
Backend
├── Node.js / Express
├── MongoDB
├── Authentication
├── User roles
└── REST APIs
        ↓
PHASE 3
Core Marketplace
├── Jobs
├── Offers
├── Bookings
├── Worker profiles
└── Matching
        ↓
PHASE 4
Communication
├── Chat
├── Notifications
└── Real-time updates
        ↓
PHASE 5
Payments
├── Payment gateway
├── Worker payouts
└── Cooperative accounting
        ↓
PHASE 6
Trust & Safety
├── Verification
├── Reviews
├── Disputes
└── Fraud prevention
        ↓
PHASE 7
Admin & Analytics
├── Admin dashboard
├── Reports
└── Platform analytics
        ↓
PHASE 8
SIH Production Readiness
├── Testing
├── Security
├── Deployment
├── Documentation
└── Demo preparation
```

---

# 28. Demo Flow

For an SIH/demo presentation, the recommended frontend flow is:

```text
Home
  ↓
Find Services
  ↓
Select Home Cleaning / Plumbing
  ↓
View Local Workers
  ↓
Compare Rating & Experience
  ↓
Post a Job
  ↓
Enter Requirements
  ↓
Job Posted
  ↓
Customer Dashboard
  ↓
View Cooperative Impact
```

This demonstrates the complete customer-side concept without requiring the backend.

---

# 29. Project Vision

CoGig aims to build a digital ecosystem where **local services, local workers and local communities benefit together**.

Instead of treating workers only as gig suppliers, the platform can evolve into a cooperative network that provides:

- Better access to work
- Fairer earnings
- Transparent pricing
- Stronger worker reputation
- Community trust
- Digital financial visibility
- Shared economic value

---

# 30. License

This project is currently developed as an academic/prototype project for the **Smart India Hackathon (SIH)** problem statement.

License and production ownership details can be added when the project structure is finalized.

---

## Current Version

**Version:** 1.0.0 — Frontend MVP

**Status:** Frontend completed; backend integration pending.

**Primary Goal:** Build a scalable cooperative marketplace for household and community services.
