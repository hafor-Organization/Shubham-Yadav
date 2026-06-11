const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    ```
res.status(200).json({
  success: true,
  user,
});
```;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
    }).select("-password");

    ```
res.status(200).json({
  success: true,
  user: updatedUser,
});
```;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addSkills = async (req, res) => {
  try {
    const { skills } = req.body;

    ```
const user =
  await User.findByIdAndUpdate(
    req.user.id,
    { skills },
    { new: true }
  );

res.json({
  success: true,
  user,
});
```;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addInterests = async (req, res) => {
  try {
    const { interests } = req.body;

    ```
const user =
  await User.findByIdAndUpdate(
    req.user.id,
    { interests },
    { new: true }
  );

res.json({
  success: true,
  user,
});
```;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
