import express from 'express';
import { requestLogger } from '../middleware/logger.js';
import { validateUser } from '../middleware/validation.js';
import { 
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser 
} from '../controllers/userController.js';

const router = express.Router();

// Apply request logger to all routes
router.use(requestLogger);

// User routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/user', validateUser, createUser);
router.put('/user/:id', validateUser, updateUser);
router.delete('/user/:id', deleteUser);

export default router;