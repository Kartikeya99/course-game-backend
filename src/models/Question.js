const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
	challengeId: String,
	category: { type: String, default: "" }, // MCQ or textual
	question: String,
	answer: String, // If MCQ then this will be used otherwise manual checking
	option1: { type: String, default: "" },
	option2: { type: String, default: "" },
	option3: { type: String, default: "" },
	option4: { type: String, default: "" },
	textAnswer: { type: String, default: "" } // for when the question is not MCQ
});

module.exports = mongoose.model("Question", questionSchema);
