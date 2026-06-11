const express = require("express");

const router = express.Router();

const {
  applyInternship,
  getMyApplications,
  withdrawApplication,
} = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");

router.post("/apply", protect, applyInternship);

router.get("/my", protect, getMyApplications);

router.delete("/:id", protect, withdrawApplication);

module.exports = router;
