import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// import deleteSingleImageFromCloud from "../utils/deleteSingleImageFromCloud.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
	const {email, password} = req.body;

	const user = await User.findOne({email});

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			avatar: user.avatar,
			token: generateToken(user._id)
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
});

// @desc Reset a password
// @route POST /api/users/reset
// @access Public
const resetPassword = asyncHandler(async (req, res) => {
	const { email } = req.body;

	console.log(email);

	const user = await User.findOne({ email });
	if (user) {
		try {
			const msg = {
				to: user.email,
				from: process.env.SENDGRID_EMAIL,
				subject: 'Password Reset',
				html: `
			<p>You have requested for password reset</p>
			<h5>click in this <a href="${process.env.HOSTEDLOCALHOST}/update_password/${user._id}">link</a> to reset password</h5>
			`
			}
			sgMail.send(msg)
			res.json({ message: "check your mail", success: true })
		} catch (e) {
			res.status(401);
		}
	} else {
		res.json({ message: "User doesnt exists with given email", success: false });
	}
});

// @desc    update a user password
// @route   POST /api/update_password/:id
// @access  Public
const updatePassword = asyncHandler(async (req, res) => {
	const { password, userId } = req.body;
	const user = await User.findById(userId);

	if (user) {
		try {
			user.password = password || user.password;
			const updatedUser = await user.save();

			res.json({
				message: "Password updated successfully",
				success: true
			});
		} catch (e) {
			res.status(404);
		}
	} else {
		res.json({
			message: "User not found",
			success: false
		});
	}


});
// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const {name, email, password} = req.body;

	const userExists = await User.findOne({email});

	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}

	const user = await User.create({
		name,
		email,
		password
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			avatar: user.avatar,
			isAdmin: user.isAdmin,
			token: generateToken(user._id)
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			avatar: user.avatar
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
	try {
		const user = await User.findById(req.user._id);

		if (user) {
			if (user.avatar !== req.body.avatar && user.avatar !== "default") {
				// await deleteSingleImageFromCloud(user.avatar);
			}

			user.name = req.body.name || user.name;
			user.email = req.body.email || user.email;
			user.avatar = req.body.avatar || user.avatar;
			if (req.body.password) {
				user.password = req.body.password;
			}

			const updatedUser = await user.save();

			res.json({
				_id: updatedUser._id,
				name: updatedUser.name,
				email: updatedUser.email,
				isAdmin: updatedUser.isAdmin,
				avatar: updatedUser.avatar,
				token: generateToken(updatedUser._id)
			});
		} else {
			res.status(404);
			throw new Error("User not found");
		}
	} catch (error) {
		console.log(error);
	}
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	res.json(users);
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (user) {
		await user.remove();
		res.json({message: "User removed"});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id).select("-password");

	if (user) {
		res.json(user);
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (user) {
		if (user.avatar !== req.body.avatar && user.avatar !== "default") {
			// await deleteSingleImageFromCloud(user.avatar);
		}
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		user.isAdmin = req.body.isAdmin;
		user.avatar = req.body.avatar || user.avatar;

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			avatar: updatedUser.avatar,
			isAdmin: updatedUser.isAdmin
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

export {
	authUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser,
	resetPassword,
	updatePassword,
};
