const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    domain: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    stipend: {
      type: String,
    },

    description: {
      type: String,
    },

    requirements: [
      {
        type: String,
      },
    ],

    applyLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Internship", internshipSchema);
