const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: Schema.Types.ObjectId,
	category: String, // Admin, Prof or Student
	yearIfStud: Number,
	email: String, // so we have emailid and _id (the one that gets default generated)
	password: String
});

module.exports = mongoose.model("User", userSchema);
