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

const getLeaderboard = (challengeId, res) => {
	Challenge.find({ _id: challengeId }, (err, challenge) => {
		if (err) console.log(err);
		else {
			response = {
				status: 200,
				message: challenge[0].attemptedBy.sort(
					(a, b) => a.marksObtained <= b.marksObtained
				),
			};
			res.send(response);
		}
	});
};

const addAttempt = (challengeId, userAttempt, res) => {
	Challenge.find({ _id: challengeId }, (err, challenge) => {
		if (err) console.log(err);
		else {
			userAttempt.marksObtained = parseInt(userAttempt.marksObtained);
			// we first get to know if the challenge has already been attempted by that person
			let found = -1;
			challenge = challenge[0];
			found = challenge.attemptedBy.findIndex(
				(element) => element.userId == userAttempt.userId
			);
			if (found == -1) {
				console.log("not found");
				// if not then this
				Challenge.findByIdAndUpdate(
					challengeId,
					{ $push: { attemptedBy: userAttempt } },
					{ useFindAndModify: false },
					(err) => {
						if (err) console.log(err);
						else {
							response = {
								status: 200,
								message: "Done",
							};
							res.send(response);
						}
					}
				);
			} else {
				// if attempted
				console.log("hello");
				console.log(challenge + "\n");
				let attemps = [];
				for (let i = 0; i < challenge.attemptedBy.length - 1; i++) {
					if (challenge.attemptedBy[i].userId != userAttempt.userId) {
						console.log(challenge.attemptedBy[i].userId + "\n");
						attemps.push(challenge.attemptedBy[i]);
					}
				}
				console.log("filtered");
				console.log(challenge + "\n");
				// we first need to remove that attempt from the challenge
				challenge.attemptedBy = attemps;
				Challenge.updateOne(
					{ _id: challenge._id },
					challenge,
					(err) => {
						if (err) console.log(err);
						else {
							// and then add the attempt with the latest marks
							Challenge.findByIdAndUpdate(
								challengeId,
								{ $push: { attemptedBy: userAttempt } },
								{ useFindAndModify: false },
								(err) => {
									if (err) console.log(err);
									else {
										response = {
											status: 200,
											message: "Done",
										};
										res.send(response);
									}
								}
							);
							// ik too bad implementation but the submission is tmrw and that's why.
						}
					}
				);
			}
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
	getLeaderboard,
	deleteChallenge,
	addAttempt,
};
