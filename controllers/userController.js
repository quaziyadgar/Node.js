import User from '../models/userModels.js';

// Get all users
export const getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch (err){
        res.status(500).json({error: 'Server error while fetching users'});
    }
};

// Get user by ID
export const getUserById = async (req, res) => {
    try{
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
} catch (err) {
    res.status(500).json({error: 'Server error or invalid ID'})
}
};

// Create new user
export const createUser = async (req, res) => {
    try {
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            hobby: req.body.hobby,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update user
export const updateUser =  async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                hobby: req.body.hobby,
            },
            { new: true, runValidators: true } // Return updated doc, run schema validations
        );
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete user
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Server error or invalid ID' });
    }
};