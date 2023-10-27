import userRegistrationModel from "../model/userRegistrationModel.js";

// Create a function to find all user data
async function findAllUsers(req, res) {
  try {
    const users = await userRegistrationModel.find();
    // Send the users in the response
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving users" });
  }
}

// Export the findAllUsers function as the default export
export default findAllUsers;
