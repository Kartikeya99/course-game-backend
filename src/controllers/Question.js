const Question = require("../models/Question");

const addQuestion = (newQuestion, res) => {
	Question.create(newQuestion, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: "200 OK",
				message
			};
			res.send(response);
		}
	});
};

const getQuestionList = (challengeId, res) => {
	Question.find({ challengeId }, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: "200 OK",
				message
			};
			res.send(response);
		}
	});
};

const updateQuestion = (question, res) => {
	Question.findByIdAndUpdate(
		question.id,
		question,
		{ useFindAndModify: false },
		(err, message) => {
			if (err) console.log(err);
			else {
				response = {
					status: "200 OK",
					question
				};
				res.send(response);
			}
		}
	);
};

const deleteQuestion = (questionId, res) => {
	Question.deleteOne({ _id: questionId }, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: "200 OK",
				message
			};
			res.send(response);
		}
	});
};

module.exports = {
	addQuestion,
	deleteQuestion,
	updateQuestion,
	getQuestionList
};
