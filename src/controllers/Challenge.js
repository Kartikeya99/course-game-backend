const Challenge = require("../models/Challenge");

const addChallenge = (profId, courseId, level) => {
	const newChallenge = {
		profId,
		courseId,
		level
	};

	Challenge.create(newChallenge, (err, message) => {
		if (err) console.log(err);
		else console.log("Challenge added");
	});
};

const getChallengeList = (profId, courseId) => {
	Challenge.find({ profId, courseId }, (err, docs) => {
		if (err) console.log(err);
		return docs;
	});
};

const deleteChallenge = id => {
	Challenge.deleteOne({ _id: id }, err => {
		if (err) console.log(err);
		else console.log("Challenge deleted");
	});
};

module.exports = { addChallenge, deleteChallenge, getChallengeList };
