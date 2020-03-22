const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
	profId: String,
	name: String,
	code: String // code for a student to be able to login
});

module.exports = mongoose.model("Course", courseSchema);
