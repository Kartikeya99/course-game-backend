const courseCtrl = require("../controllers/Course");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
	courseCtrl.addCourse(req.body, res);
});

router.get("/", (req, res) => {
	if (req.query.profId || req.query.courseId) {
		if (req.query.profId) {
			courseCtrl.getCoursesByProfId(req.query.profId, res);
		} else {
			courseCtrl.getCoursesByCourseId(req.query.courseId, res);
		}
	} else courseCtrl.getCourses(res);
});

router.post("/validate", (req, res) => {
	courseCtrl.validate(req.body, res);
});

router.post("/", (req, res) => {
	courseCtrl.getCourseListByCourseIds(req.body.courseList, res);
});

router.delete("/", (req, res) => {
	courseCtrl.deleteCourse(req.query.courseId, res);
});

router.delete("/all", (req, res) => {
	courseCtrl.deleteAll(res);
});

module.exports = router;
// 5e86d8c5ed7f0f25e76e7919
// 5e86d8eaed7f0f25e76e791a
// 5e86d8ffed7f0f25e76e791b
// 5e86d90fed7f0f25e76e791c
