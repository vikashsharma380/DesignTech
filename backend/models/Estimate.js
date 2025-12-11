import express from "express";
import { calculateEstimate } from "../controllers/estimate.controller.js";

const router = express.Router();

router.post("/calculate", calculateEstimate);

export default router;
