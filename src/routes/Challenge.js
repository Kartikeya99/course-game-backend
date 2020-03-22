const challengeCtrl = require("../controllers/Challenge");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
	challengeCtrl.addChallenge(req.body, res);
});

router.get("/", (req, res) => {
	challengeCtrl.getChallengeList(req.query.courseId, res);
});

router.delete("/", (req, res) => {
	challengeCtrl.deleteChallenge(req.query.challengeId, res);
});

module.exports = router;
