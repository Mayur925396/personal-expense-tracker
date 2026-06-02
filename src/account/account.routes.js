import express from "express";

import { createNewAccount, deleteAccount, getAllAccounts, updateAccount } from "./account.controller.js";


const accountRouter = express.Router();

accountRouter.get("/get-all-accounts", getAllAccounts);
accountRouter.post("/create-account", createNewAccount);
accountRouter.put("/update-account", updateAccount);
accountRouter.delete("/delete-account", deleteAccount);
export default accountRouter;