const express = require("express");

const router = express.Router();

const userRouter = require("./auth-routes");

router.use("/auth", userRouter);

module.exports = router;
