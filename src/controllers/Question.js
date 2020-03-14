const Question = require("../models/Question");

const addQuestion = (
	challengeId,
	category,
	question,
	answer,
	option1,
	option2,
	option3,
	option4,
	textAnswer
) => {
	const newQuestion = {
		challengeId,
		category,
		question,
		answer,
		option1,
		option2,
		option3,
		option4,
		textAnswer
	};

	Question.create(newQuestion, (err, message) => {
		if (err) console.log(err);
		else console.log("Question added");
	});
};

const getQuestionList = challengeId => {
	Question.find({ challengeId }, (err, docs) => {
		if (err) console.log(err);
		return docs;
	});
};

const updateQuestion = question => {
	Question.findByIdAndUpdate(question.id, question, err => {
		if (err) console.log(err);
		else console.log("Question Updated");
	});
};

const deleteQuestion = id => {
	Question.deleteOne({ _id: id }, err => {
		if (err) console.log(err);
		else console.log("Question deleted");
	});
};

module.exports = {
	addQuestion,
	deleteQuestion,
	updateQuestion,
	getQuestionList
};
