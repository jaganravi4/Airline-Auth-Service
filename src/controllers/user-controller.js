const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created a user",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a user",
            error: error,
        });
    }
};

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(
            req.body.email,
            req.body.password,
        );
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully signed in",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to signIn the user",
            error: error,
        });
    }
};

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers["x-access-token"];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            data: response,
            success: true,
            message: "user is authenticated and token is valid",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to authenticate the user",
            error: error,
        });
    }
};

const isAdmin = async (req, res) => {
    try {
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            data: response,
            succese: true,
            message: "Successfully fetched whether the user is admin or not",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to verify the user is admin or not",
            error: error,
        });
    }
};

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin,
};
