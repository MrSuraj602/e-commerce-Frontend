# 🛒 E-Commerce Frontend

A modern and responsive **e-commerce frontend** built using **React.js and Vite**. The application provides a user-friendly interface for browsing products, managing carts, placing orders, making payments, and interacting with the e-commerce backend.

## 🚀 Features

* 🏠 Responsive home page
* 🔐 User authentication
* 👤 User account management
* 🛍️ Product browsing
* 🔎 Product filtering and sorting
* 📄 Product details
* 🛒 Shopping cart
* ❤️ Wishlist/user product interactions
* 📦 Order management
* ⭐ Product ratings and reviews
* 💳 Razorpay payment integration
* 👨‍💼 Admin functionality
* 📱 Responsive design
* 🔄 REST API integration with Axios
* 🗃️ Global state management using Redux

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* Redux
* Axios

### UI & Styling

* Material UI (MUI)
* Tailwind CSS
* Tailwind CSS Components

### Backend Integration

* Spring Boot REST APIs
* JWT Authentication
* Razorpay Payment Gateway

---

## 🏗️ Application Architecture

```text
React Components
       ↓
     Redux
       ↓
     Axios
       ↓
Spring Boot REST API
       ↓
     MySQL
```

The frontend communicates with the Spring Boot backend through REST APIs using Axios.

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Navbar
│   ├── Product
│   ├── Cart
│   └── ...
│
├── pages/
│   ├── Home
│   ├── Product Details
│   ├── Cart
│   ├── Orders
│   ├── Login
│   ├── Register
│   └── ...
│
├── Redux/
│   ├── Store
│   └── Slices
│
├── api/
│   └── Axios configuration
│
├── assets/
│
└── App.jsx
```

---

## 🔐 Authentication

The frontend integrates with the Spring Boot backend's JWT authentication system.

Authentication flow:

```text
Login / Register
       ↓
Spring Boot API
       ↓
JWT Token
       ↓
Frontend
       ↓
Authenticated API Requests
```

Axios is used to communicate with protected backend APIs.

---

## 🛒 Shopping Flow

The main customer flow is:

```text
Browse Products
      ↓
Filter / Search
      ↓
View Product
      ↓
Add to Cart
      ↓
Manage Cart
      ↓
Place Order
      ↓
Payment
      ↓
Order Confirmation
```

---

## 💳 Payment Integration

The frontend integrates with the backend payment APIs to support **Razorpay online payments**.

```text
Checkout
   ↓
Create Order
   ↓
Razorpay Payment
   ↓
Payment Completion
   ↓
Backend Verification
   ↓
Order Status Update
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/MrSuraj602/e-commerce-Frontend.git
cd e-commerce-Frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Backend URL

Configure the backend API URL according to your project configuration.

For local development, the backend will typically run on:

```text
http://localhost:8080
```

If your project uses an environment file, create:

```text
.env
```

and configure the appropriate API URL.

> Do not commit private API keys or payment credentials to the repository.

### 4. Start the development server

```bash
npm run dev
```

The frontend will be available at the URL displayed by Vite, usually:

```text
http://localhost:5173
```

---

## 📱 Responsive Design

The application is designed to work across different screen sizes using:

* Material UI
* Tailwind CSS
* Responsive React components

---

## 🔌 Backend

This frontend is connected to the Spring Boot backend:

**Backend Repository:**
https://github.com/MrSuraj602/e-commerce-backend

---

## 🔮 Future Improvements

Planned improvements include:

* Personalized product recommendations
* Improved product search
* Wishlist enhancements
* Performance optimization
* Automated frontend testing
* Production deployment
* Improved accessibility

---

## 👨‍💻 Author

**Suraj Rathod**

* GitHub: https://github.com/MrSuraj602
* LinkedIn: https://linkedin.com/in/surajrathod6/

---

## 📄 License

This project is developed for learning and portfolio purposes.
