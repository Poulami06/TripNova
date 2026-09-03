# TripNova

TripNova is a production-ready, full-stack travel marketplace that allows users to explore international stays, create verified property listings, upload high-resolution accommodation images, inspect locations on interactive maps, and submit verified reviews. Built strictly following the MVC (Model-View-Controller) pattern, it emphasizes clean code architecture, server-side data validation, secure authentication, and cloud-native integrations.

---

## Project Highlights
* End-to-End CRUD Operations:  Fully implemented RESTful architecture for listings, reviews, and user sessions.

* Authentication & Role-Based Authorization: Secure session-based authentication using Passport.js with custom middleware protecting edit/delete privileges.

* Cloud Asset Management: Integrated Cloudinary storage via Multer for optimized, cloud-based media delivery.

* Geocoding & Interactive Maps: Mapbox/Leaflet-powered coordinate visualization for location pinning.

* Resilient Data Layer: Production-configured MongoDB Atlas cluster with Non-SRV replica-set failover and Joi schema validation.

* Responsive UI: Built with dynamic EJS templating, custom styling, and Bootstrap 5 for multi-device compatibility.

---

## Tech Stack
### Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript
* EJS

### Backend
* Node.js
* Express.js

### Database
* MongoDB Atlas
* Mongoose

### Authentication
* Passport.js
* Express Session

### Third-Party Services
* Cloudinary
* Geocoding API

---

## Core Features

### User Management
* User Registration
* User Login & Logout
* Session-Based Authentication
* Authorization Middleware

### Listing Management
* Create Listings
* View Listings
* Update Listings
* Delete Listings
* Image Upload Support

### Reviews System
* Add Reviews
* Delete Reviews
* Rating Functionality
* Data Validation

### Maps & Location Services
* Geocoding Support
* Interactive Location Maps
* Destination Visualization

---

## Architecture

The application follows the MVC (Model-View-Controller) pattern:

```text
Models       → Database Logic
Views        → User Interface (EJS)
Controllers  → Business Logic
Routes       → Request Handling
```

This architecture improves code organization, maintainability, and scalability.

---


## Project Structure

```text
TripNova/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── middleware.js
├── cloudConfig.js
├── app.js
└── package.json
```

---


## Installation

```bash
git clone https://github.com/Poulami06/TripNova.git
cd TripNova
npm install
```

Create a .env file and add:
```env
ATLAS_DB_URL=
SECRET=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
```

Seed the database:
```bash
node init/index.js
```

Run the application:
```bash
npm start
```

Server runs on:
```bash
http://localhost:8080
```

---

## Learning Outcomes

Through this project, I gained practical experience with:

* RESTful API Design
* Authentication & Authorization
* MongoDB Data Modeling
* Cloud Storage Integration
* Geolocation Services
* MVC Architecture
* Full-Stack Web Development

---

## Project Links:

### Live Demo
🔗https://tripnova-lw37.onrender.com/listings

### GitHub Repository
🔗https://github.com/Poulami06/TripNova

## Developer

**Poulami Haldar**

[GitHub Profile](https://github.com/Poulami06)
