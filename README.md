# ⚡ BRUTAL_CHAT: MERN Real-Time Terminal
Welcome to **BRUTAL_CHAT**, a feature-rich, high-performance, real-time messaging application built on the MERN stack. Designed with a striking **Neo-Brutalist & Cyber-Terminal aesthetic**, this application combines industrial-grade retro styling with modern real-time capabilities.
---
## 🚀 Key Features
*   **⚡ Real-Time Messaging**: Built on Socket.io for instantaneous message delivery with zero polling.
*   **🟢 Online/Offline Presence Indicators**: Real-time visual tracking of online users.
*   **🎨 Neo-Brutalist & Cyberpunk UI**: Features high-contrast designs, thick solid borders (`var(--brutal-border)`), flat brutalist drop-shadows, monospace typography (`Space Mono`), and custom CSS micro-animations.
*   **🔒 Secure Authentication**: JSON Web Tokens (JWT) stored in HTTP-Only cookies for cross-site scripting (XSS) prevention, along with strong password hashing using `bcryptjs`.
*   **🛠️ Lightweight State Management**: State management handled by **Zustand** for message histories and active conversation tracking, eliminating unnecessary React re-renders.
*   **🔊 Interactive Feedback**: Audio notification alerts on incoming messages, accompanied by visual shake effects (`.shake`).
*   **🔍 User Search**: Sidebar filter to search and start conversations instantly.
*   **👤 Dynamic Avatar Generation**: Auto-generates male/female avatars using the username seed via the `avatar.iran.liara.run` API.
*   **📦 Combined Production Setup**: Ready for production deployment with static assets compiled and served directly by the Express server.
---
## 🛠️ Technology Stack
|
 Component 
|
 Technology 
|
 Description 
|
|
:---
|
:---
|
:---
|
|
**
Frontend
**
|
 React 19 + Vite 
|
 Fast, modern frontend framework with Hot Module Replacement (HMR) 
|
|
|
 Zustand 
|
 Client-side state manager for messages and selected conversations 
|
|
|
 Tailwind CSS v4 
|
 High-utility, custom styling framework 
|
|
|
 DaisyUI v5 
|
 Premium component classes for modern interfaces 
|
|
|
 React Router DOM v7 
|
 Client-side routing for seamless pages 
|
|
|
 Socket.io-client 
|
 Live WebSocket connection wrapper 
|
|
**
Backend
**
|
 Node.js + Express 
|
 Fast, opinionated backend web framework 
|
|
|
 Socket.io 
|
 WebSocket server managing user connections and active mappings 
|
|
|
 Mongoose 
|
 Elegant MongoDB object modeling (ODM) 
|
|
|
 JWT & bcryptjs 
|
 Encrypted user security layers 
|
|
**
Database
**
|
 MongoDB 
|
 Cloud-native, document-oriented NoSQL database 
|
---
## 📂 Project Structure
```text
chat-app-yt/
├── backend/
│   ├── controllers/      # Route request handler logic (Auth, Messages, Users)
│   ├── db/               # Database connection config (Mongoose)
│   ├── middleware/       # Authentication route guard middleware
│   ├── models/           # Mongoose schemas (User, Message, Conversation)
│   ├── routes/           # Express API endpoints
│   ├── socket/           # Socket.io connection handlers & socket mapping
│   ├── utils/            # JWT token creation and cookie settings utility
│   └── server.js         # Entry point for the Express backend
├── frontend/
│   ├── src/
│   │   ├── assets/       # Static audio alerts and media
│   │   ├── components/   # Modular React components (Sidebar, Messages, Skeletons)
│   │   ├── context/      # React Context providers (Auth, Socket)
│   │   ├── hooks/        # Custom React hooks (useLogin, useListenMessages, etc.)
│   │   ├── pages/        # Main route views (Home, Login, SignUp) & Auth.css
│   │   ├── zustand/      # Global client-side states (useConversation)
│   │   ├── main.jsx      # Frontend app mounter
│   │   └── index.css     # CSS Custom properties for Neo-Brutalist theme
│   └── package.json      # Frontend client-side dependencies
├── .env                  # Configuration variables (git ignored)
└── package.json          # Root orchestration package scripts
```
---
## 📡 API Endpoints
### 🔐 Authentication (`/api/auth`)
*   `POST /signup` - Registers a new user. Generates an avatar and signs the user in with a secure cookie.
*   `POST /login` - Validates credentials, issues JWT token cookie, and returns user payload.
*   `POST /logout` - Clears client session cookies.
### ✉️ Messages (`/api/messages`)
*   `GET /:id` - Retrieves message history between the logged-in user and target user (`id`).
*   `POST /send/:id` - Sends a new message to target user (`id`) and triggers a WebSocket event if the receiver is online.
### 👥 Users (`/api/users`)
*   `GET /` - Fetches all registered users for the sidebar list (excluding the logged-in user).
---
## ⚙️ Environment Configuration
Create a `.env` file in the root directory and define the following variables:
```ini
PORT=5000
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```
---
## 🚀 Getting Started
### 📋 Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) and a running instance of [MongoDB](https://www.mongodb.com/).
### 💻 Local Development Setup
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kunalSingh026/MERN-CHAT-APP.git
    cd MERN-CHAT-APP
    ```
2.  **Install project dependencies:**
    Run this in the root directory to install both root server packages and client frontend packages:
    ```bash
    npm run build
    ```
3.  **Run backend (API & Socket Server):**
    ```bash
    npm run server
    ```
    The server will start running on `http://localhost:5000`.
4.  **Run frontend client:**
    ```bash
    cd frontend
    npm run dev
    ```
    Open `http://localhost:5173` (or the terminal-provided Vite port) in your browser.
---
## 📦 Production Deployment
For production deployments, the application is pre-configured to build static files and serve them from the backend server to optimize costs and minimize servers.
1.  **Build the application:**
    ```bash
    npm run build
    ```
    This compiles the React code and saves it directly to the `frontend/dist` directory.
2.  **Start the server:**
    ```bash
    npm start
    ```
    The server runs on the defined environment port (or default `5000`) and serves both the API and client interface.
