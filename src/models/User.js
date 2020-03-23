const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: String,
	category: { type: String, default: "student" }, // Admin, Prof or Student
	yearIfStud: { type: Number, default: "" },
	email: String, // so we have emailid and _id (the one that gets default generated)
	password: String,
	enrolledIn: { type: [String], default: "" }, // list of courses
	attemptedChallenges: {
		type: [{ courseId: String, challengeId: String, marksScored: Number }],
		default: ""
	}
	// with the above two, we can show the challenges for courses he's enrolled in but not attempted.
});

module.exports = mongoose.model("User", userSchema);
