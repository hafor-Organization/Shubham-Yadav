const express = require("express");

const router = express.Router();

const {
  getProfile,
  updateProfile,
  addSkills,
  addInterests,
  updateSocialLinks,
  uploadResume,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");
const { upload } = require("../middleware/uploadMiddleware");

router.get("/me", protect, getProfile);
router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

router.put("/skills", protect, addSkills);

router.put("/interests", protect, addInterests);

router.put("/social-links", protect, updateSocialLinks);

router.post("/resume", protect, upload.single("resume"), uploadResume);

module.exports = router;
