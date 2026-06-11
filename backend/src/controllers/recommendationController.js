const User = require("../models/User");
const Internship = require("../models/Internship");

exports.getRecommendations = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const internships = await Internship.find({
      domain: {
        $in: user.interests,
      },
    });

    res.json({
      success: true,
      internships,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
