// local data instead of database
const users = [{
    id: "1",
    firstName : 'Quazi Yadgar',
    lastName : 'Husain',
    hobby :  'outing'
}];

// Get all users
export const getAllUsers = (req, res) => {
    res.status(200).json(users);
};

// Get user by ID
export const getUserById = (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
};

// Create new user
export const createUser = (req, res) => {
    const newUser = {
        id: String(users.length + 1),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        hobby: req.body.hobby
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

// Update user
export const updateUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    
    users[userIndex] = {
        ...users[userIndex],
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        hobby: req.body.hobby
    };
    res.status(200).json(users[userIndex]);
};

// Delete user
export const deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    
    users.splice(userIndex, 1);
    res.status(200).json({ message: "User deleted successfully" });
};