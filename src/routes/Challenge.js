const challengeCtrl = require("../controllers/Challenge");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
	challengeCtrl.addChallenge(req.body, res);
});

router.get("/", (req, res) => {
	if (req.query.courseId)
		challengeCtrl.getChallengeList(req.query.courseId, res);
	else challengeCtrl.getChallengeFromId(req.query.challengeId, res);
});

router.get("/", (req, res) => {
	challengeCtrl.getChallengeList(req.query.courseId, res);
});

router.get("/getLeaderBoard", (req, res) => {
	challengeCtrl.getLeaderboard(req.query.challengeId, res);
});
router.post("/addAttempt", (req, res) => {
	challengeCtrl.addAttempt(req.query.challengeId, req.body, res);
});

router.delete("/", (req, res) => {
	challengeCtrl.deleteChallenge(req.query.challengeId, res);
});

module.exports = router;
