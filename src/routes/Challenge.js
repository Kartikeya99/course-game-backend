const challengeCtrl = require("../controllers/Challenge");
const router = express.Router();
const express = require("express");

router.get("/", (req, res) => {
	data = challengeCtrl.getChallengeList(req.query.courseId);
	response = {
		status: 200,
		message: data
	};
	res.send(response);
});

router.get("/create", (req, res) => {
	data = challengeCtrl.addChallenge(req.query.courseId, name);
	response = {
		status: 200,
		message: data
	};
	res.send(response);
});

router.delete("/", (req, res) => {
	if (!challengeCtrl.deleteChallenge(req.query.challengeId)) {
		response = {
			status: 200,
			message: "Challenge deleted successfully"
		};
	}
});
