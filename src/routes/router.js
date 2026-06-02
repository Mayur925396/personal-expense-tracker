import express from "express";

import accountRouter from "../account/account.routes.js";

const router = express.Router();

//all routes
router.use("/account", accountRouter);

export default router;
