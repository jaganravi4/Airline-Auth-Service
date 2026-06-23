const validateUserAuth = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            data: {},
            success: false,
            message: "Something went wrong",
            error: "Email or Password missing",
        });
    }
    next();
};

const validateIsAdminRequest = (req, res, next) => {
    if (!req.body.id) {
        return res.status(400).json({
            data: {},
            success: false,
            message: "Something went wrong",
            error: "user id not given",
        });
    }
    next();
};

module.exports = {
    validateUserAuth,
    validateIsAdminRequest,
};
