# 📝 Todo App (Full Stack Web Development Project)

## 📌 Project Overview

This is a **full-stack Todo Application** built using **HTML, CSS, JavaScript, Node.js, Express, and MongoDB**.
The app allows users to manage daily tasks with complete **CRUD functionality**.

---

## 🚀 Features

* ➕ Add new tasks
* ✏️ Edit existing tasks *(can be extended)*
* ❌ Delete tasks
* ✔️ Mark tasks as completed
* 💾 Store tasks in MongoDB database
* 🔄 Real-time UI updates

---

## 🛠️ Tech Stack

### Frontend:

* HTML
* CSS
* JavaScript

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB

---

## 📁 Project Structure

```
todo-app/
│
├── server/
│   ├── server.js
│   └── models/
│       └── Todo.js
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd todo-app
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Start MongoDB

Make sure MongoDB is installed and running locally:

```
mongodb://127.0.0.1:27017
```

---

### 4️⃣ Run the backend server

```bash
node server/server.js
```

Server will run on:

```
http://localhost:5000
```

---

### 5️⃣ Run the frontend

Open this file in your browser:

```
client/index.html
```

---

## 🔌 API Endpoints

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /todos     | Get all todos |
| POST   | /todos     | Add new todo  |
| PUT    | /todos/:id | Update todo   |
| DELETE | /todos/:id | Delete todo   |

---

## 📸 Output

* User can add tasks
* Tasks are stored in MongoDB
* Tasks can be marked as complete
* Tasks can be deleted

---

## 🎯 Learning Outcomes

* Understanding CRUD operations
* Working with REST APIs
* Connecting frontend with backend
* Database integration using MongoDB

---

## 💡 Future Enhancements

* 🔐 User authentication (Login/Signup)
* 📅 Due dates & reminders
* 🌙 Dark mode UI
* ⚛️ Convert to React frontend
* ☁️ Deploy online (Vercel / Render / MongoDB Atlas)

---

