const { validateEmail } = require("../helpers/validation");
const User = require("../models/User");
exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    //email validation
    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Invalid email address",
      });
    }
      const check = await User.findOne({ email });
      if (check) {
        return res.status(400).json({
          message:
            "The email address alreadt exists,try with different email address",
        });
      }

    const user = await new User({
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
