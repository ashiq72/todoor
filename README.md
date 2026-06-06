# 🚀 Task Management Dashboard

A full-stack Task Management Dashboard built with **Next.js, React, Node.js, Express, and MongoDB**.

---

## 📦 Project Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-dashboard.git
cd task-dashboard
```

---

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

### 3. Run the Project

#### Start Backend

```bash
npm run dev
```

#### Start Frontend

```bash
npm run dev
```

Frontend: http://localhost:3000
Backend: http://localhost:5000

---

## ✨ Features Overview

* 🔐 JWT Authentication
* 👥 Role-based access (Admin / Manager / User)
* 📊 Dashboard analytics
* ✅ Task CRUD (Create, Read, Update, Delete)
* 📁 Project management
* 📅 Due dates & priorities
* 🎨 Responsive UI (Tailwind CSS)

---

## ⚙️ Environment Variables

### Backend (`.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Frontend (`.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 🔑 Demo Credentials

```
Admin:
email: admin@example.com
password: 123456

Manager:
email: manager@example.com
password: 123456

User:
email: user@example.com
password: 123456
```

---

## 🚀 Deployment Instructions

### Backend

* Deploy on Render / Railway / VPS
* Set environment variables
* Start command:

```bash
npm start
```

---

### Frontend (Vercel Recommended)

* Import GitHub repo
* Add environment variable:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url/api
```

* Deploy

---

## 📁 Folder Structure

```
backend/
  ├── modules/
  ├── middlewares/
  ├── config/
  └── server.ts

frontend/
  ├── app/
  ├── components/
  ├── services/
  └── hooks/
```

---

## 🧪 Future Improvements

* Kanban board (drag & drop)
* Notifications
* File uploads
* Advanced analytics

---

## 📄 License

MIT License
