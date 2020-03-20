const courseCtrl = require("../controllers/Course");
const router = express.Router();
const express = require("express");

router.get("/", (req, res) => {
	data = courseCtrl.getCourseList(req.query.userId);
	response = {
		status: 200,
		message: data
	};
	res.send(response);
});

router.get("/create", (req, res) => {
	data = courseCtrl.addCourse(req.query.userId, req.query.name);
	if (data.length != 0) {
		response = {
			status: 200,
			message: data
		};
		res.send(response);
	}
});

router.delete("/", (req, res) => {
	if (!courseCtrl.deleteCourse(req.query.courseId)) {
		response = {
			status: 200,
			message: "Course deleted added"
		};
		res.send(response);
	}
});
