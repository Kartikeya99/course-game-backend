const Question = require("../models/Question");

const addQuestion = (questionList, res) => {
	data = [];
	questionList.forEach((question) => {
		data.push(Question.create(question));
	});
	Promise.all(data).then((message) => {
		response = {
			status: "200 OK",
			message,
		};
		res.send(response);
	});
};

const getQuestionList = (challengeId, res) => {
	Question.find({ challengeId }, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: "200 OK",
				message,
			};
			res.send(response);
		}
	});
};

const updateQuestion = (questionList, res) => {
	data = [];
	questionList.forEach((question) => {
		data.push(
			Question.findByIdAndUpdate(question.id, question, {
				useFindAndModify: false,
			})
		);
	});
	Promise.all(data).then((message) => {
		response = {
			status: "200 OK",
			message,
		};
		res.send(response);
	});
};

const deleteQuestion = (questionId, res) => {
	Question.deleteOne({ _id: questionId }, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: "200 OK",
				message,
			};
			res.send(response);
		}
	});
};

module.exports = {
	addQuestion,
	deleteQuestion,
	updateQuestion,
	getQuestionList,
};
