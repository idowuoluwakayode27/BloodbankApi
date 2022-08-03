const User = require('../models/Users');

/* 
    SIGNUP USER
    POST REQUEST
*/
exports.signUpUser = async (req, res) => {
  try {
    const { donorId, name, bloodGroup, rhesusfactor, donorAddress } = req.body;

    const newUser = new User({
      donorId,
      name,
      bloodGroup,
      rhesusfactor,
      donorAddress,
    });

    const save_user_to_db = await newUser.save();
    return res.status(201).json(save_user_to_db);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server error',
    });
  }
};

// GET ALL DONORS
exports.getDonor = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      register_donor_counts: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server error',
    });
  }
};

//GET SINGLE DONOR BY ID
exports.getDonorId = async (req, res) => {
  try {
    const user = await User.findOne({ donorId: req.params.id });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server error',
    });
  }
};

//DELETE SINGLE DONOR BY ID
exports.deleteDonorById = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ donorId: req.params.id });
    return res.status(200).json(`DELETED SUCCESSFULLY`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server error',
    });
  }
};

//UPDATE SINGLE USER BY id
exports.updateSingleDonorById = async (req, res) => {
  try {
    const { bloodGroup, rhesusfactor } = req.body;
    const user = await User.findOneAndUpdate(
      { donorId: req.params.id },
      { ...req.body },
      {
        new: true,
      }
    );
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server error',
    });
  }
};
