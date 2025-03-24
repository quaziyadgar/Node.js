import express from "express";
import { requestLogger } from "./middleware/logger.js";
import  userRoutes from "./routes/userRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());


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