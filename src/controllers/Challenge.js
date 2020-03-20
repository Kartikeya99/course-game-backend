const Challenge = require("../models/Challenge");

const addChallenge = (courseId, name) => {
	const newChallenge = {
		courseId,
		name
	};

	Challenge.create(newChallenge, (err, message) => {
		if (err) console.log(err);
		else {
			console.log("challenge added");
			data = Challenge.find(newChallenge);
			return data;
		}
	});
};

const getChallengeList = courseId => {
	Challenge.find({ courseId }, (err, docs) => {
		if (err) console.log(err);
		return docs;
	});
};

const deleteChallenge = chalengeId => {
	Challenge.deleteOne({ _id: challengeId }, err => {
		if (err) console.log(err);
		else return 0;
	});
};

module.exports = { addChallenge, deleteChallenge, getChallengeList };
