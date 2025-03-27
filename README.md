Let’s expand the previous `user-api` project by integrating MongoDB using Mongoose. Below, I’ll provide a complete solution with updated code, MongoDB integration, and a revised README. This meets all the requirements, including database interaction, CRUD operations, and advanced middleware handling.

---

### Updated Project Structure
```
user-api/
├── controllers/
│   └── userController.js
├── middleware/
│   ├── logger.js
│   └── validate.js
├── models/
│   └── userModel.js       # New: Mongoose schema
├── routes/
│   └── userRoutes.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

# 🌟 User API with MongoDB

A **RESTful API** built with Node.js, Express, and MongoDB (via Mongoose) to manage users. This project expands on the previous in-memory version by integrating a database, testing CRUD operations, and advanced middleware handling. 🚀

---

## 📋 Project Overview

- **Purpose**: Manage users with persistent storage in MongoDB.
- **Tech Stack**:
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
  - ES6 Modules (`type: module`)
- **Features**:
  - MongoDB integration with schema validation
  - CRUD operations with proper error handling
  - Middleware for logging and input validation

---

## 🗂️ Project Structure

```
user-api/
├── 📁 controllers/         # Business logic for user operations
│   └── userController.js
├── 📁 middleware/          # Middleware for logging and validation
│   ├── logger.js
│   └── validate.js
├── 📁 models/             # Mongoose schema for User
│   └── userModel.js
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
- **MongoDB** (Install locally or use MongoDB Atlas)
- **MongoDB Compass** (optional, for visualization)
- **Visual Studio Code** (optional, for ThunderClient)

### Installation
1. **Clone or Download**:
   ```
   git clone <repository-url>
   cd user-api
   ```
2. **Install Dependencies**:
   ```
   npm install
   ```
3. **Start MongoDB**:
   - Local: Run `mongod` in a terminal (ensure MongoDB is installed).
   - Default URI: `mongodb://localhost:27017/user-api`
4. **Run the Server**:
   ```
   npm start
   ```
   - Server runs at `http://localhost:3000`.
   - Confirms MongoDB connection in console.

---

## 🌐 API Endpoints

All endpoints are prefixed with `/api`. IDs are MongoDB ObjectIds (e.g., `507f1f77bcf86cd799439011`).

| Method | Endpoint            | Description                  | Status Codes       |
|--------|---------------------|------------------------------|--------------------|
| `GET`  | `/users`           | Fetch all users             | 200, 500           |
| `GET`  | `/users/:id`       | Fetch user by ID            | 200, 404, 500      |
| `POST` | `/user`            | Create a new user           | 201, 400           |
| `PUT`  | `/user/:id`        | Update an existing user     | 200, 404, 400      |
| `DELETE` | `/user/:id`      | Delete a user by ID         | 200, 404, 500      |

### Sample User Object
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Teaching",
  "createdAt": "2023-10-01T12:00:00Z",
  "updatedAt": "2023-10-01T12:00:00Z"
}
```

---

## 🛠️ MongoDB Integration

- **Connection**: Uses Mongoose to connect to `mongodb://localhost:27017/user-api`.
- **Schema**: 
  - Fields: `firstName`, `lastName`, `hobby` (all required, trimmed).
  - Validation: Minimum length (2) for names, timestamps enabled.
- **CRUD**: All operations persist to MongoDB.

---

## ✅ Testing with ThunderClient

### Setup
1. Install **ThunderClient** in VS Code.
2. Start the server (`npm start`).
3. Open MongoDB Compass to view the `user-api` database.

### Test Cases
1. **GET /api/users**
   - URL: `http://localhost:3000/api/users`
   - Expected: 200, array of users
   - Compass: Shows all documents in `users` collection.

2. **POST /api/user**
   - URL: `http://localhost:3000/api/user`
   - Body:
     ```json
     {
       "firstName": "John",
       "lastName": "Doe",
       "hobby": "Reading"
     }
     ```
   - Expected: 201, new user with ObjectId
   - Compass: New document appears.

3. **GET /api/users/:id**
   - URL: `http://localhost:3000/api/users/<ObjectId>`
   - Expected: 200 (valid), 404 (invalid)
   - Compass: Verify document exists.

4. **PUT /api/user/:id**
   - URL: `http://localhost:3000/api/user/<ObjectId>`
   - Body: Same as POST
   - Expected: 200 (valid), 404/400 (invalid)
   - Compass: Updated document.

5. **DELETE /api/user/:id**
   - URL: `http://localhost:3000/api/user/<ObjectId>`
   - Expected: 200 (valid), 404 (invalid)
   - Compass: Document removed.

### Screenshots
- ThunderClient: Request, response, and status for each test.
- MongoDB Compass: Before/after states of `users` collection.
- Console: Request logs from middleware.

---

## 📦 Submission Guidelines

1. **Zip Folder**:
   - Include all files (`server.js`, `controllers/`, `middleware/`, `models/`, `routes/`, `package.json`).
2. **Document**:
   - Screenshots:
     - ThunderClient: Success + error cases (200, 201, 400, 404, 500).
     - MongoDB Compass: Collection state after each operation.
   - Labels: e.g., "POST /api/user - Success".
   - Comments: Explain logic in code (already included).

---

## 🎉 Features Implemented

- ✅ MongoDB connection with Mongoose
- ✅ User schema with validations
- ✅ CRUD operations with MongoDB
- ✅ Middleware for logging and validation
- ✅ Error handling with status codes
- ✅ Clear code comments
- ✅ Testable with ThunderClient and MongoDB Compass

---

## 💡 Notes

- Use MongoDB Atlas for cloud hosting if local setup fails.
- Handle `500` errors for database connection issues in production.

Happy coding! 🎈
```

---

### Setup Instructions
1. **Install MongoDB**:
   - Local: Download and run MongoDB (default port: 27017).
   - Or use MongoDB Atlas and update `mongoURI` in `server.js`.
2. **Install Dependencies**:
   ```
   npm install
   ```
3. **Run**:
   ```
   npm start
   ```
4. **Test**: Use ThunderClient and MongoDB Compass.

---

### Testing and Submission
- **ThunderClient**: Test all endpoints as described in the README.
- **MongoDB Compass**: Connect to `mongodb://localhost:27017/user-api`, view the `users` collection, and capture screenshots after each operation.
- **Zip**: Include all files.
- **Document**: Add labeled screenshots (ThunderClient + Compass) and ensure comments are in the code.

This solution fully integrates MongoDB, meets all requirements, and provides a robust, testable API! Let me know if you need further assistance.