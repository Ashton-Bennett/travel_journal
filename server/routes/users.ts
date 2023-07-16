import express, { Router } from "express";

import { getUser } from "../controllers/user";

const router: Router = express.Router();

router.get("/", getUser);

export default router;
