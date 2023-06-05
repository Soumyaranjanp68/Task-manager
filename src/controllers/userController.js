const User = require('../models/user');

const getUserProfile = async (req, res) => {
  const { userId } = req;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};

const updateUserProfile = async (req, res) => {
  const { userId } = req;
  const { password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.findByIdAndUpdate(userId, { password: hashedPassword }, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User profile updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user profile' });
  }
};

module.exports = { getUserProfile, updateUserProfile };
