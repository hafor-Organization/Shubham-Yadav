const express = require("express");

const router = express.Router();

const {
  getAllInternships,
  getInternshipById,
  createInternship,
  updateInternship,
  deleteInternship,
  searchInternships,
  getRemoteJobs, // ✅ Import this
} = require("../controllers/internshipController");

// Remote Jobs API
router.get("/remote", getRemoteJobs);

// Search (place before /:id)
router.get("/search", searchInternships);

// Get All Internships
router.get("/", getAllInternships);

// Get Internship by ID
router.get("/:id", getInternshipById);

// Create Internship
router.post("/", createInternship);

// Update Internship
router.put("/:id", updateInternship);

// Delete Internship
router.delete("/:id", deleteInternship);

module.exports = router;
