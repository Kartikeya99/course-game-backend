const questionCtrl = require("../controllers/Question");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
	questionCtrl.addQuestion(req.body.questionList, res);
});

router.get("/", (req, res) => {
	data = questionCtrl.getQuestionList(req.query.challengeId, res);
});

router.post("/update", (req, res) => {
	questionCtrl.updateQuestion(req.body.questionList, res);
});

router.delete("/", (req, res) => {
	questionCtrl.deleteQuestion(req.query.questionId, res);
});

module.exports = router;
