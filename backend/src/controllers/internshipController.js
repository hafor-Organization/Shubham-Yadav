const Internship = require("../models/Internship");

exports.getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find();

    res.json({
      success: true,
      count: internships.length,
      internships,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getInternshipById = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: "Internship not found",
      });
    }

    res.json({
      success: true,
      internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createInternship = async (req, res) => {
  try {
    const internship = await Internship.create(req.body);

    res.status(201).json({
      success: true,
      internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateInternship = async (req, res) => {
  try {
    const internship = await Internship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.json({
      success: true,
      internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteInternship = async (req, res) => {
  try {
    await Internship.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Internship deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.searchInternships = async (req, res) => {
  try {
    const query = {};

    if (req.query.domain) query.domain = req.query.domain;

    if (req.query.location) query.location = req.query.location;

    if (req.query.duration) query.duration = req.query.duration;

    const internships = await Internship.find(query);

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
