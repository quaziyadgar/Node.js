import express from "express";
import { requestLogger } from "./middleware/logger.js";
import  userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/user-api';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Apply middleware
app.use(requestLogger);
app.use('/api', userRoutes);

// Error handling for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});