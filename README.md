# Anandu A — Portfolio Website

A premium, production-ready, full-stack portfolio website built with the MERN stack.

**Live URL**: _(deploy to Vercel/Render)_

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js + Vite |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Backend | Node.js + Express.js |
| Database | MongoDB (Mongoose) |
| Email | Nodemailer (Gmail) |

---

## 📁 Project Structure

```
portfolio/
├── frontend/          # React + Vite app
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Data & helpers
│   │   └── index.css      # Global styles
│   └── .env               # VITE_BACKEND_URL
│
└── backend/           # Express API
    ├── config/        # DB connection
    ├── controllers/   # Route handlers
    ├── models/        # Mongoose schemas
    ├── routes/        # API routes
    ├── middleware/    # Error handler
    └── .env           # Secrets
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free)
- Gmail account (for contact form emails)

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Setup Frontend

```bash
cd frontend
npm install
# Edit .env if needed (VITE_BACKEND_URL)
npm run dev
```

Frontend runs on: **http://localhost:5173**

### 3. Setup Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and Gmail credentials
npm run dev
```

Backend runs on: **http://localhost:5000**

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

```env
PORT=5000
MONGODB_URI=mongodb+srv://...
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECEIVER=anandusachu1180@gmail.com
```

> **Gmail Setup**: Go to [Google Account → Security → App Passwords](https://myaccount.google.com/apppasswords) and generate an app password for "Mail".

### Frontend (`frontend/.env`)

```env
VITE_BACKEND_URL=http://localhost:5000
```

---

## 📸 Adding Your Profile Photo

Place your photo at:
```
frontend/public/profile.jpg
```

Recommended: square image, at least 400×400px.

---

## 📄 Resume

Place your resume PDF at:
```
frontend/public/resume.pdf
```

---

## 🌐 Deployment

### Frontend → Vercel
1. Import `frontend/` folder to [vercel.com](https://vercel.com)
2. Set `VITE_BACKEND_URL` in Vercel environment variables
3. Deploy

### Backend → Render
1. Create new Web Service at [render.com](https://render.com)
2. Connect `backend/` folder
3. Add environment variables
4. Deploy

---

## ✨ Features

- ⚡ Cinematic loading screen
- 🎨 Animated gradient background
- 🌐 Canvas particle network
- 🖱️ Custom animated cursor
- 📊 Scroll progress indicator
- 🧭 Active-section sticky navbar
- ⌨️ Typing animation in hero
- 📱 Fully responsive (mobile-first)
- 🔽 Project category filtering
- 📬 Contact form → MongoDB + Email
- 📥 Resume download button
- 🚀 SEO optimized meta tags

---

## 👤 Author

**Anandu A**  
Full Stack Developer | Flutter Developer | AI Enthusiast  
Kerala, India  
📧 anandusachu1180@gmail.com
