import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        minlength: [2, 'First name must be at least 2 characters'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        minlength: [2, 'Last name must be at least 2 characters'],
    },
    hobby: {
        type: String,
        required: [true, 'Hobby is required'],
        trim: true,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Create and export the User model
export default mongoose.model('User', userSchema);