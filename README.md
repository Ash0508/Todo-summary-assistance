## 📘 Todo Summary Assistant

A full-stack productivity app to manage your todos, generate intelligent summaries using **Cohere AI**, and send those summaries to **Slack** via webhooks.

Live:
- 🔗 [Frontend (Firebase Hosted)](https://todo-summary-assistance.web.app)
- 🔗 [Backend (Render)](https://todo-summary-assistance.onrender.com)

---

## 🧱 Tech Stack

| Layer     | Technology                                      |
| --------- | ----------------------------------------------- |
| Frontend  | React, Bootstrap                                |
| Backend   | Node.js, Express.js                             |
| Database  | Firebase Firestore                              |
| AI Model  | Cohere API                                      |
| Messaging | Slack Webhook                                   |
| Hosting   | Firebase (frontend), Render (backend)           |

---

## 🚀 Features

- ✅ Create, view, and delete personal todos
- 🧠 Generate smart summaries with Cohere
- 🔔 Instantly share summaries to Slack
- 🔧 API-first architecture with `.env` config support

---

## 🛠 Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/Ash0508/Todo-summary-assistance.git
cd Todo-summary-assistance
```

---

### 2. Firebase Admin Setup

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Navigate to `Project Settings > Service Accounts`.
3. Click **Generate new private key** and download the JSON file.
4. Use values from the JSON to fill the backend `.env` file as shown below.
5. Never commit the private key to version control!

---

### 3. Backend Setup (`/backend`)

#### ➤ Install Dependencies

```bash
cd backend
npm install
```

#### ➤ Configure Environment

Create a `.env` file:

```env
COHERE_API_KEY=your-cohere-api-key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your-webhook-id
FRONTEND_URL=https://your-frontend-url.com

# Firebase credentials (from service account)
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

#### ➤ Start Server

```bash
node server.js
```

---

### 4. Frontend Setup (`/frontend`)

#### ➤ Install Dependencies

```bash
cd frontend
npm install
```

#### ➤ Configure Environment

Create a `.env` file:

```env
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

#### ➤ Run Frontend

```bash
npm start
```

---

## 🧠 Cohere Integration

1. Visit [cohere.com](https://dashboard.cohere.com/)
2. Copy your API Key
3. Add it to backend `.env` as `COHERE_API_KEY`

---

## 💬 Slack Webhook Setup

1. Go to [Slack API: Your Apps](https://api.slack.com/apps)
2. Create an app → Enable **Incoming Webhooks**
3. Set a default channel → Copy Webhook URL
4. Paste into `.env` under `SLACK_WEBHOOK_URL`

---

## 🌐 CORS Configuration

In `backend/server.js`, ensure CORS allows frontend access:

```js
const cors = require("cors");

app.use(cors({
  origin: "https://your-frontend-url.com", // or localhost:3000 during dev
  credentials: true
}));
```

---

## 📸 Screenshot

> **App Interface – Todo List & Summary Trigger**
<img src="https://github.com/user-attachments/assets/cc69656d-335e-4ea9-8a78-159f071870c1" width="600"/>

---

## ✍️ Author

Made by [Ankush Singh](https://github.com/Ash0508) 💻
