const Challenge = require("../models/Challenge");
const Question = require("../models/Question");

const addChallenge = (newChallenge, res) => {
	Challenge.create(newChallenge, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: 200,
				message,
			};
			res.send(response);
		}
	});
};

const getChallengeFromId = (challengeId, res) => {
	Challenge.find({ _id: challengeId }, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: 200,
				message,
			};
			res.send(response);
		}
	});
};

const getChallengeList = (courseId, res) => {
	Challenge.find({ courseId }, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: 200,
				message,
			};
			res.send(response);
		}
	});
};

const deleteChallenge = (challengeId, res) => {
	Challenge.deleteOne({ _id: challengeId }, (err) => {
		if (err) console.log(err);
		else {
			Question.deleteMany({ challengeId }, (err, msg) => {
				if (err) console.log(err);
				else {
					response = {
						status: 200,
						message: "Challenge deleted successfully",
					};
					res.send(response);
				}
			});
		}
	});
};

module.exports = {
	addChallenge,
	getChallengeList,
	getChallengeFromId,
	deleteChallenge,
};
