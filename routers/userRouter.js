const express = require('express');
const UserRouter = express.Router();

const UserModel = require('../models/userModel');



UserRouter.post("/", async (req, res) => {
	console.log(req.body)
	const {  email, password } = req.body;
	try {
		const userCreated = await UserModel.create({  email, password});
		res.status(201).json({ success: 1, user: userCreated });
	} catch (error) {
		res.status(500).json({ success: 0, message: error })
	}

});


// "/api/users" => get all
UserRouter.get("/", async (req, res) => {
	console.log("Get all user");
	try {
		const users = await UserModel.find({}, "email password")
		res.json({ success: 1, users });
	} catch (error) {
		res.status(500).json({ success: 0, error: error })
	}

});



module.exports = UserRouter;