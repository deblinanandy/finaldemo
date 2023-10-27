import userRegistrationModel from "../model/userRegistrationModel.js";

const showAllUserDetails = async (req, res) => {
  try {
    const userDetails = await userRegistrationModel.find({});

    return res.status(200).json({
      success: true,
      message: 'User details retrieved successfully',
      data: userDetails
    });
  } catch (error) {
    console.error('Error:', error); // Improved error logging
    return res.status(500).json({
      success: false,
      message: 'Error: ' + error.message
    });
  }
};

export default showAllUserDetails;
