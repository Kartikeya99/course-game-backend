const userCtrl = require("../controllers/User");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
	userCtrl.addUser(req.body, res);
});

router.get("/", (req, res) => {
	userCtrl.getAllUser(res);
});

router.post("/", (req, res) => {
	userCtrl.getUser(req.body, res);
});

router.post("/update", (req, res) => {
	userCtrl.updateUser(req.body, res);
});

router.delete("/", (req, res) => {
	userCtrl.deleteUser(req.query.userId, res);
});

module.exports = router;
