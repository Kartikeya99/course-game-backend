const questionCtrl = require("../controllers/Question");
const router = express.Router();
const express = require("express")

router.get("/", (req, res) => {
    data = questionCtrl.getQuestionList(req.query.challengeId)
    response = {
        status: 200,
        message: data
    }
    res.send(response)
})

router.delete("/", (req, res) => {
    if(!questionCtrl.deleteQuestion(req.query.questionId)) {
        response = {
            status = 200,
            message: "Question deleted successfully"
        }
        res.send(response)
    }
})

router.post("/create", (req, res) => {
    if(!questionCtrl.addQuestion(req.body)) {
        response = {
            status: 200,
            message: "Question added successfully"
        }
        res.send(response)
    }
})


router.post("/update", (req, res) => {
    if(!questionCtrl.updateQuestion(req.body)) {
        response = {
            status: 200,
            message: "Question updated successfully"
        }
        res.send(response)
    }
})