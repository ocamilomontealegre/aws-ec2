import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ status: "🚀 Service running... !" }))

export default router;