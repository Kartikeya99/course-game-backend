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
		else return 0;
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
		else return 0;
	});
};

const deleteQuestion = questionId => {
	Question.deleteOne({ _id: questionId }, err => {
		if (err) console.log(err);
		else return 0;
	});
};

module.exports = {
	addQuestion,
	deleteQuestion,
	updateQuestion,
	getQuestionList
};
