const express = require("express");

const router = express.Router();

const {
  getPopularDomains,
  getTopInternships,
  getDashboardStats,
} = require("../controllers/analyticsController");

router.get("/popular-domains", getPopularDomains);

router.get("/top-internships", getTopInternships);

router.get("/dashboard", getDashboardStats);

module.exports = router;
