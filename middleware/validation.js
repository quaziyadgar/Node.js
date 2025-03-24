export const validateUser = (req, res, next) => {
    const { firstName, lastName, hobby } = req.body;
    if (!firstName || !lastName || !hobby) {
        return res.status(400).json({
            error: "Missing required fields: firstName, lastName, and hobby are required"
        });
    }
    next();
};