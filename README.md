Below is a beautifully formatted README file for your `user-api` project, using Markdown with symbols, emojis, and clear sections. This README provides setup instructions, API documentation, and testing guidance tailored to your project.

---

# 🌟 User API Project

A simple **RESTful API** built with Node.js, Express, and ES6 modules to manage a list of users. This project demonstrates routing, middleware, HTTP methods, status codes, error handling, and in-memory data storage. 🚀

---

## 📋 Project Overview

- **Purpose**: Manage users with CRUD operations (Create, Read, Update, Delete).
- **Tech Stack**: 
  - Node.js
  - Express.js
  - ES6 Modules (`type: module`)
- **Features**:
  - Separate routing and controllers
  - Middleware for logging and validation
  - Error handling with appropriate status codes
  - In-memory data storage (array)

---

## 🗂️ Project Structure

```
user-api/
├── 📁 controllers/         # Business logic for user operations
│   └── userController.js
├── 📁 middleware/          # Middleware for logging and validation
│   ├── logger.js
│   └── validate.js
├── 📁 routes/             # API route definitions
│   └── userRoutes.js
├── server.js             # Main server file
├── package.json          # Project metadata and dependencies
└── package-lock.json     # Dependency lock file
```

---

## ⚙️ Setup Instructions

### Prerequisites
- **Node.js** (v14+ recommended)
- **npm** (comes with Node.js)
- **Visual Studio Code** (optional, for ThunderClient)

### Installation
1. **Clone or Download**:
   ```
   git clone <repository-url>
   cd user-api
   ```
   Or download and unzip the project folder.

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Run the Server**:
   ```
   npm start
   ```
   The server will run at `http://localhost:3000`.

---

## 🌐 API Endpoints

All endpoints are prefixed with `/api`.

| Method | Endpoint            | Description                  | Status Codes       |
|--------|---------------------|------------------------------|--------------------|
| `GET`  | `/users`           | Fetch all users             | 200                |
| `GET`  | `/users/:id`       | Fetch user by ID            | 200, 404           |
| `POST` | `/user`            | Create a new user           | 201, 400           |
| `PUT`  | `/user/:id`        | Update an existing user     | 200, 404, 400      |
| `DELETE` | `/user/:id`      | Delete a user by ID         | 200, 404           |

### Sample User Object
```json
{
  "id": "1",
  "firstName": "Quazi yadgar",
  "lastName": "husain",
  "hobby": "outing"
}
```

---

## 🛠️ Middleware

- **Request Logger**: Logs method, URL, status code, and duration for every request.
  - Example: `GET /api/users 200 - 5ms`
- **Validation**: Ensures `firstName`, `lastName`, and `hobby` are present in POST and PUT requests.

---

## ✅ Testing with ThunderClient

### Setup
1. Install **ThunderClient** extension in VS Code.
2. Open ThunderClient from the sidebar (lightning bolt icon).
3. Start the server (`npm start`).

### Test Cases
1. **GET /api/users**
   - URL: `http://localhost:3000/api/users`
   - Expected: 200, list of users

2. **GET /api/users/:id**
   - URL: `http://localhost:3000/api/users/1` (valid)
   - URL: `http://localhost:3000/api/users/999` (invalid)
   - Expected: 200 (valid), 404 (invalid)

3. **POST /api/user**
   - URL: `http://localhost:3000/api/user`
   - Body (valid):
     ```json
     {
       "firstName": "John",
       "lastName": "Doe",
       "hobby": "Reading"
     }
     ```
   - Body (invalid): `{"firstName": "John"}`
   - Expected: 201 (valid), 400 (invalid)

4. **PUT /api/user/:id**
   - URL: `http://localhost:3000/api/user/1` (valid)
   - URL: `http://localhost:3000/api/user/999` (invalid)
   - Body: Same as POST
   - Expected: 200 (valid), 404/400 (invalid)

5. **DELETE /api/user/:id**
   - URL: `http://localhost:3000/api/user/1` (valid)
   - URL: `http://localhost:3000/api/user/999` (invalid)
   - Expected: 200 (valid), 404 (invalid)

### Screenshots
- Capture each request and response in ThunderClient.
- Include console logs showing middleware output.

---

## 📦 Submission Guidelines

1. **Zip Folder**:
   - Include all project files (`server.js`, `controllers/`, `middleware/`, `routes/`, `package.json`).
2. **Document**:
   - Add screenshots of ThunderClient tests (success + error cases).
   - Label each screenshot (e.g., "POST /api/user - Success").
   - Show console logs for middleware validation.

---

## 🎉 Features Implemented

- ✅ Node.js project initialization with Express
- ✅ RESTful API with all required routes
- ✅ Middleware for logging and validation
- ✅ Proper error handling and status codes
- ✅ In-memory data storage
- ✅ Clear code comments
- ✅ Testable with ThunderClient

---

## 💡 Notes

- The API uses an in-memory array, so data resets on server restart.
- Extend this project by adding a database (e.g., MongoDB) for persistence.

Happy coding! 🎈 If you need help, feel free to ask!

---
