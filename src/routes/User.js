const userCtrl = require("../controllers/User");
const router = express.Router();
const express = require("express");

router.post("/", (req, res) => {
	data = userCtrl.getUser(req.body);
	if (data.length) {
		response = {
			status: 200,
			message: data
		};
		res.send(response);
	}
});

router.post("/create", (req, res) => {
	if (!userCtrl.addUser(req.body)) {
		response = {
			status: 200,
			message: "user added successfully"
		};
		res.send(response);
	}
});

router.post("/update", (req, res) => {
	if (!userCtrl.updateUser(req.body)) {
		response = {
			status: 200,
			message: "user updated successfully"
		};
		res.send(response);
	}
});

router.delete("/delete", (req, res) => {
	if (!userCtrl.deleteUser(req.body)) {
		response = {
			status: 200,
			message: "user deleted successfully"
		};
		res.send(response);
	}
});
