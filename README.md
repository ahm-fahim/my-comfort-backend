# my-comfort-backend

The backend engine powering the application, built with Node.js, Express, and MongoDB. This service handles user authentication, product management, media storage, and third-party payment gateways.

---

## 🛠️ Dependency Breakdown

Here is an overview of the core packages used in this project and their functionalities:

| Package | Purpose | Description |
| :--- | :--- | :--- |
| **`express`** | Framework | Minimal and flexible Node.js web application framework to build the APIs. |
| **`mongoose`** | Database ODM | Object Data Modeling library for MongoDB and Node.js to manage data schemas. |
| **`cors`** | Security | Cross-Origin Resource Sharing middleware to authorize frontend access to backend API endpoints. |
| **`dotenv`** | Environment Control | Loads environment variables from a `.env` file into `process.env`. |
| **`jsonwebtoken`** | Authentication | Implements JWT for securing endpoints and handling user sessions. |
| **`bcrypt`** | Security | Hashes and encrypts user passwords safely before saving them to the database. |
| **`multer`** | File Handling | Middleware for handling `multipart/form-data`, primarily used for uploading files/images. |
| **`cloudinary`** | Cloud Storage | Media management platform used to store and optimize uploaded product/profile images. |
| **`stripe`** & **`razorpay`** | Payments | Payment infrastructure integrations to handle secure credit card transactions and regional payment methods. |
| **`validator`** | Data Validation | A library of string validators and sanitizers (e.g., verifying emails or strong passwords). |
| **`nodemon`** | Development Tool | Automatically restarts the node application whenever file changes in the directory are detected. |

---

## 🚀 Installation & Setup

Follow these steps to initialize and install the project dependencies locally.

### 1. Initialize the Project
If you are starting fresh, initialize a new Node.js package configuration file:
```bash
npm init -y
```