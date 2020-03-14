const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
	challengeId: Schema.Types.ObjectId,
	category: String, // MCQ or textual
	question: String,
	answer: String, // If MCQ then this will be used otherwise manual checking
	option1: { type: String, default: null },
	option2: { type: String, default: null },
	option3: { type: String, default: null },
	option4: { type: String, default: null },
	textAnswer: { type: String, default: null } // for when the question is not MCQ
});

module.exports = mongoose.model("Question", questionSchema);
