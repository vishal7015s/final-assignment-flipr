Project Overview: Flipr full-stack development task is a web app with a landing page (projects, clients, contact form, newsletter) and an admin panel for content management.

Key Features: Add projects/clients with images, view contact submissions, and track subscribed emails.

Technologies Used
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Image Storage: Cloudinary

Prerequisites
Node.js (v14.x or later)
npm or yarn
MongoDB (local or cloud instance)
Git

Installation and Setup

Backend
Clone the repository: git clone https://github.com/vishal7015s/final-assignment-flipr.git
Navigate to the backend folder: cd Backend
Install dependencies: npm install
Set up environment variables in a .env file (e.g., MongoDB URI, Cloudinary credentials).
Start the server: npm run dev (runs on http://localhost:4000)

Frontend
Navigate to the frontend folder: cd Frontend
Install dependencies: npm install
Start the development server: npm start (runs on http://localhost:3000)

API Endpoints
POST /api/createProject: Add a new project with image.
GET /api/projects: Get all projects
POST /api/client: Add a new client with image.
GET /api/clients: Get all clients
GET /api/contact: Retrieve contact form submissions.
POST /api/newsletter: Subscribe an email address.
GET /api/newsletters: Retrieve subscribed emails.

