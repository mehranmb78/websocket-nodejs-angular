import { Router } from "express";
import { getDate } from "./handler/date.js";

const router = Router();

// date
router.get("/date", getDate);

export default router;
