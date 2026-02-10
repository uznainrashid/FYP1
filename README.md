Key Features
Advanced Product Marketplace: Browse and filter products by categories, price ranges, and new arrivals.

Secure User Authentication: Integrated JWT-based login and registration for users and admins.

Mongoose Data Modeling: Scalable schemas for handling complex product data and user orders.

Responsive Admin Panel: A dedicated dashboard for real-time inventory tracking and order management.

Optimized Performance: Built with Vite and Tailwind CSS to ensure fast loading and mobile-first responsiveness.

🛠 Tech Stack
Frontend: React.js, Vite, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB with Mongoose ODM

Deployment: Vercel (Frontend & Backend)
# 🛒 SmartBuy - Full Stack E-commerce & Agriculture Platform

SmartBuy is a robust, full-stack application built using the MERN stack. It is designed to serve as a modern e-commerce solution with integrated agriculture-focused features like daily market rates and bilingual support. This project was developed as a **Final Year Project (FYP)**.

## 📂 Folder Structure

The repository is organized into three main modules to ensure a clean separation of concerns:

```text
FYP1/
├── Admin/                 # Admin Dashboard (React/Vite)
│   ├── src/               # UI components and logic for store management
│   ├── public/            # Static assets
│   └── package.json       # Admin-side dependencies
├── Backend/               # Server-side Logic (Node.js/Express)
│   ├── models/            # Database schemas (Mongoose/PostgreSQL)
│   ├── routes/            # API endpoints
│   ├── controllers/       # Business logic for requests
│   └── index.js           # Server entry point
├── Frontend/              # Client-side Application (React/Vite)
│   ├── src/               # User-facing features and marketplace
│   ├── assets/            # Styling and images
│   └── package.json       # Frontend dependencies
└── .gitignore             # Configuration to ignore node_modules and .env files

🚀 Installation & Setup
Clone the Project:

Environment Variables: Create a .env file in the Backend folder and add your MONGODB_URI and PORT. Note: Ensure your .env files are not tracked by Git.

Install & Run: Navigate to Admin, Backend, and Frontend folders and run:

🌐 Live Demo
Visit the live application: 
https://fyp-1-y2q7.vercel.app

Developed as a Final Year Project (FYP)
