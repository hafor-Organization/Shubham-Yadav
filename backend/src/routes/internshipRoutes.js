const express = require("express");

const router = express.Router();

const {
  getAllInternships,
  getInternshipById,
  createInternship,
  updateInternship,
  deleteInternship,
  searchInternships,
} = require("../controllers/internshipController");

router.get("/", getAllInternships);

router.get("/search", searchInternships);

router.get("/:id", getInternshipById);

router.post("/", createInternship);

router.put("/:id", updateInternship);

router.delete("/:id", deleteInternship);

module.exports = router;
