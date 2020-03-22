const courseCtrl = require("../controllers/Course");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
	console.log(req.body);
	data = courseCtrl.addCourse(req.body, res);
});

router.get("/", (req, res) => {
	if (req.query.u || req.query.courseId) {
		if (req.query.u) {
			courseCtrl.getCoursesByProfId(req.query.profId, res);
		} else {
			courseCtrl.getCoursesByCourseId(req.query.courseId, res);
		}
	} else courseCtrl.getCourses(res);
});

// TODO:

// router.post("/", (req, res) => {
// 	courseCtrl.getCourseListByCourseIds(req.query.courseList, res);
// });

router.delete("/", (req, res) => {
	courseCtrl.deleteCourse(req.query.courseId, res);
});

module.exports = router;
