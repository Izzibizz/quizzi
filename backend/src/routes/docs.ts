import express from "express";

const router = express.Router();

// GET /api/docs - API documentation
router.get("/", (req, res) => {
  res.json({
    message: "API Documentation",
    routes: {
      "/questions": "Get list of questions",
    },
  });
});

export default router;