# ⚡ Connectify: MERN Real-Time Terminal
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

<div align="center">

| Category | Technology | Purpose |
|:---------|:-----------|:--------|
| **🎨 Frontend** | **React 19** | Component-based library for building a fast and interactive user interface |
| | **Vite** | Lightning-fast development server and optimized production bundler |
| | **Tailwind CSS v4** | Utility-first CSS framework for rapid and responsive UI development |
| | **DaisyUI v5** | Pre-built Tailwind component library for beautiful UI components |
| | **React Router DOM v7** | Client-side routing for seamless navigation |
| | **Zustand** | Lightweight global state management with minimal re-renders |
| | **Socket.io Client** | Real-time communication between the client and server |
| | **HTML5 Audio API** | Plays incoming message notification sounds |
| | **CSS3** | Custom Neo-Brutalist styling, animations, and responsive layouts |
| **⚙️ Backend** | **Node.js** | JavaScript runtime environment for server-side execution |
| | **Express.js** | RESTful API framework with middleware support |
| | **Socket.io** | WebSocket server enabling instant messaging and live presence |
| | **Mongoose** | Elegant MongoDB Object Data Modeling (ODM) library |
| | **JWT (JSON Web Token)** | Stateless authentication and secure user sessions |
| | **bcryptjs** | Password hashing and authentication security |
| | **Cookie Parser** | HTTP-only cookie parsing and session handling |
| **🗄️ Database** | **MongoDB** | NoSQL document database for storing users, conversations, and messages |
| **🔐 Authentication** | **JWT + HTTP-Only Cookies** | Secure authentication with XSS protection |
| **⚡ Real-Time Communication** | **Socket.io** | Instant messaging, typing events, and online/offline status |
| **🧠 State Management** | **Zustand** | Efficient client-side conversation and message state management |
| **🛠️ Development Tools** | **Git** | Version control |
| | **GitHub** | Source code hosting and collaboration |
| | **npm** | Package manager |
| | **VS Code** | Primary development environment |

</div>

---

## 🚀 Tech Stack Overview

<div align="center">

| Frontend | Backend | Database | Real-Time | Authentication |
|:---------:|:-------:|:--------:|:---------:|:--------------:|
| ⚛️ React 19 | 🟢 Node.js | 🍃 MongoDB | ⚡ Socket.io | 🔐 JWT |
| ⚡ Vite | 🚀 Express.js | 🍃 Mongoose | 🔌 WebSockets | 🔒 bcryptjs |
| 🎨 Tailwind CSS v4 | 🍪 Cookie Parser | | | 🍪 HTTP-Only Cookies |
| 🌼 DaisyUI v5 | | | | |
| 🐻 Zustand | | | | |

</div>

---

## 🏗️ Architecture

```text
                  ┌─────────────────────────┐
                  │      React + Vite       │
                  │      Frontend UI        │
                  └───────────┬─────────────┘
                              │
                REST API      │      WebSocket
                              │
          ┌───────────────────┴───────────────────┐
          │        Express.js + Socket.io         │
          │         Authentication & APIs         │
          └───────────────────┬───────────────────┘
                              │
                        Mongoose ODM
                              │
                      ┌───────▼────────┐
                      │    MongoDB     │
                      │ Users • Chats  │
                      │ Conversations  │
                      │   Messages     │
                      └────────────────┘
```

### 💡 Highlights

- ⚛️ **Modern MERN Stack** powered by React 19, Node.js, Express.js, and MongoDB.
- ⚡ **Real-Time Communication** using Socket.io with instant message delivery.
- 🔐 **Secure Authentication** using JWT, HTTP-only cookies, and bcrypt password hashing.
- 🐻 **Lightweight State Management** with Zustand for optimal performance.
- 🎨 **Responsive Neo-Brutalist UI** built using Tailwind CSS v4 and DaisyUI v5.
- 🚀 **Production Ready** with a unified frontend and backend deployment strategy.
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
