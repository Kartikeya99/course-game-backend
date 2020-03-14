const Course = require("../models/Course");

const addCourse = (profId, name) => {
	const newCourse = {
		profId,
		name
	};

	Course.create(newCourse, (err, message) => {
		if (err) console.log(err);
		else console.log("Course added");
	});
};

const getCourseList = profId => {
	Course.find({ profId }, (err, docs) => {
		if (err) console.log(err);
		return docs;
	});
};

const deleteCourse = id => {
	Course.deleteOne({ _id: id }, err => {
		if (err) console.log(err);
		else console.log("Course deleted");
	});
};

module.exports = { addCourse, deleteCourse, getCourseList };
