const Application = require("../models/Application");

exports.applyInternship = async (req, res) => {
  try {
    const application = await Application.create({
      userId: req.user.id,
      internshipId: req.body.internshipId,
    });

    res.status(201).json({
      success: true,
      application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      userId: req.user.id,
    }).populate("internshipId");

    res.json({
      success: true,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.withdrawApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Application withdrawn",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
