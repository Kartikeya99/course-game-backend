const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: mongoose.Schema.Types.ObjectId,
	category: String, // Admin, Prof or Student
	yearIfStud: Number,
	email: String, // so we have emailid and _id (the one that gets default generated)
	password: String,
	enrolledIn: [String], // list of courses
	attemptedChallenges: [
		{ courseName: String, challengeName: String, marksScored: Number }
	]
	// with the above two, we can show the challenges for courses he's enrolled in but not attempted.
});

module.exports = mongoose.model("User", userSchema);
