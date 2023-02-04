// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = async (req, res) => {
  res.status(200).json({
    message: "Get Goals",
  });
};

// @desc    Add goal
// @route   POST /api/goals
// @access  Private
const addGoal = async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text')
    }

  res.status(200).json({
    message: "Set Goal",
  });
};

// @desc    Update a goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = async (req, res) => {
  res.status(200).json({
    message: `Update Goal ${req.params.id}`,
  });
};

// @desc    Delete a goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = async (req, res) => {
  res.status(200).json({
    message: `Delete Goal ${req.params.id}`,
  });
};

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};