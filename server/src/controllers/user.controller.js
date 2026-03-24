const userModel = require("../models/user.model");



async function getProfile(req, res) {
    const userID = req.userID;
    const user = await userModel.findById(userID);
    
    if(!user){
        return res.status(401).json({message: "Invalid user"})
    }

    return res.status(200).json({
        message: "User find successfully",
        user
    })
}

module.exports = { getProfile };