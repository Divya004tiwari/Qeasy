# 🏥 Qeasy — Smart Healthcare Queue Management System

> **Skip the Queue. Meet the Cure.**

Qeasy is a full-stack healthcare queue management system designed to manage patient appointments, priority-based queues, consultations, laboratory tasks, and pharmacy workflows through role-based dashboards.

The system provides real-time queue updates and separate interfaces for patients, staff, doctors, laboratory staff, pharmacy staff, and administrators.

---

## ✨ Features

### 👤 Patient

* Book appointments
* Receive a queue token
* View current queue position
* Track queue status in real time
* View estimated waiting information
* Receive queue notifications

### 👩‍💼 Staff

* Manage patient queues
* Call, skip, and complete patients
* Search and filter patients
* Handle emergency cases
* View real-time queue updates
* Manage priority-based queues

### 👨‍⚕️ Doctor

* View the current patient
* Access patient information
* Add consultation notes
* Create prescriptions
* Send prescriptions to laboratory/pharmacy workflows
* Automatically move to the next patient

### 🔬 Laboratory

* View incoming laboratory requests
* Track test status
* Manage pending laboratory tasks
* Identify priority requests
* Update processing status

### 💊 Pharmacy

* View medicine prescriptions
* Manage pending prescriptions
* Track prescription status
* Process medicine requests

### 👑 Administrator

* Manage system users
* View system statistics
* Monitor appointments and queues
* Manage user accounts
* View operational information through the admin dashboard

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Purpose                    |
| ---------------- | -------------------------- |
| React            | User interface             |
| Vite             | Development and build tool |
| Tailwind CSS     | Styling                    |
| Framer Motion    | UI animations              |
| Socket.IO Client | Real-time communication    |
| Recharts         | Data visualization         |
| React Router     | Client-side routing        |

### Backend

| Technology | Purpose                 |
| ---------- | ----------------------- |
| Node.js    | Server runtime          |
| Express.js | REST API framework      |
| MongoDB    | Database                |
| Mongoose   | MongoDB object modeling |
| Socket.IO  | Real-time communication |
| JWT        | Authentication          |
| bcrypt     | Password hashing        |

---

## 🏗️ System Architecture

```text
                ┌──────────────────────┐
                │      React App       │
                │   Frontend / Vite    │
                └──────────┬───────────┘
                           │
                    HTTP / Socket.IO
                           │
                           ▼
                ┌──────────────────────┐
                │   Node.js + Express  │
                │      REST APIs        │
                └──────────┬───────────┘
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
       ┌──────────────┐          ┌──────────────┐
       │   MongoDB    │          │  Socket.IO   │
       │   Database   │          │ Real-time    │
       └──────────────┘          │   Updates    │
                                 └──────────────┘
```

---

## 👥 User Roles

| Role           | Route       | Main Responsibilities           |
| -------------- | ----------- | ------------------------------- |
| Patient        | `/patient`  | Appointments and queue tracking |
| Staff          | `/staff`    | Queue management                |
| Doctor         | `/doctor`   | Consultation and prescriptions  |
| Lab Staff      | `/lab`      | Laboratory requests             |
| Pharmacy Staff | `/pharmacy` | Medicine prescriptions          |
| Admin          | `/admin`    | User and system management      |

---

## 🧠 Queue Priority

The queue uses a priority score to determine the order in which patients are processed.

The current priority model considers:

* Emergency cases
* Senior citizens
* Normal patients
* Waiting time

Conceptually:

```text
Emergency
    ↓
Senior
    ↓
Normal + waiting-time consideration
```

This allows the system to handle urgent cases while also considering how long normal-priority patients have been waiting.

---

## 🔄 Patient Workflow

```text
Patient
   │
   ▼
Book Appointment
   │
   ▼
Receive Queue Token
   │
   ▼
Wait for Turn
   │
   ▼
Staff Calls Patient
   │
   ▼
Doctor Consultation
   │
   ├───────────────┐
   ▼               ▼
Laboratory       Pharmacy
   │               │
   ▼               ▼
Processing       Processing
```

---

## 🔐 Authentication

The application uses:

* JWT-based authentication
* Password hashing with bcrypt
* Role-based access
* Protected dashboard routes

Different users are directed to the dashboard associated with their role.

---

## ⚡ Real-Time Communication

Socket.IO is used for real-time communication between the frontend and backend.

This allows queue-related changes to be reflected without requiring the user to manually refresh the page.

Examples include:

* Queue position updates
* Patient status changes
* Staff queue actions
* Doctor workflow updates
* Laboratory status updates
* Pharmacy status updates

---

## 📁 Project Structure

```text
Qeasy/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   │
│   ├── scripts/
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 💻 Installation

### Prerequisites

Make sure the following are installed:

* Node.js 18+
* MongoDB or a MongoDB Atlas database
* npm

### 1. Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

### 2. Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create the frontend environment file if required:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

The application will be available locally through the Vite development server.

---

## 🔧 Environment Variables

### Backend

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

Do not commit `.env` files or database credentials to version control.

---

## 📊 Main Modules

```text
Authentication
      │
      ├── Patient
      │
      ├── Staff
      │
      ├── Doctor
      │
      ├── Laboratory
      │
      ├── Pharmacy
      │
      └── Administrator

Queue Management
      │
      ├── Token Generation
      ├── Priority Handling
      ├── Queue Updates
      └── Status Tracking

Healthcare Workflow
      │
      ├── Consultation
      ├── Prescriptions
      ├── Laboratory Requests
      └── Pharmacy Requests
```

---

## 📄 License

This project is licensed under the **MIT License**. 
