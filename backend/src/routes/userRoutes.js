const express = require("express");

const router = express.Router();

const {
  getProfile,
  updateProfile,
  addSkills,
  addInterests,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

router.put("/skills", protect, addSkills);

router.put("/interests", protect, addInterests);

module.exports = router;
