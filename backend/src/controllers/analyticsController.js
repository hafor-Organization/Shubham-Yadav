const Internship = require("../models/Internship");

const Application = require("../models/Application");

exports.getPopularDomains = async (req, res) => {
  try {
    const domains = await Internship.aggregate([
      {
        $group: {
          _id: "$domain",
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    res.json(domains);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getTopInternships = async (req, res) => {
  try {
    const applications = await Application.aggregate([
      {
        $group: {
          _id: "$internshipId",
          totalApplications: {
            $sum: 1,
          },
        },
      },
    ]);

    res.json(applications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getDashboardStats = async (req, res) => {
  try {
    const totalInternships = await Internship.countDocuments();

    const totalApplications = await Application.countDocuments();

    res.json({
      success: true,
      totalInternships,
      totalApplications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
