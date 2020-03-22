const Course = require("../models/Course");

const addCourse = (newCourse, res) => {
	Course.create(newCourse, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: "200 OK",
				message
			};
			res.send(response);
		}
	});
};

// For getting all courses
const getCourses = res => {
	Course.find({}, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: "200 OK",
				message
			};
			res.send(response);
		}
	});
};

// The below api gives all the courses of by a given professor.
const getCoursesByProfId = (profId, res) => {
	Course.find({ profId }, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: "200 OK",
				message
			};
			res.send(response);
		}
	});
};
const getCoursesByCourseId = (courseId, res) => {
	Course.find({ _id: courseId }, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: "200 OK",
				message
			};
			res.send(response);
		}
	});
};
// TODO:

// The below api is when we call courses by the course ids.
// const getCourseListByCourseIds = (courseIds, res) => {
// 	courseIds.forEach(courseId => {
// 		Course.find({ _id: courseId }, (err, doc) => {
// 			if (err) console.log(err);
// 			else data.push(doc[0]);
// 		});
// 	});
// };

const deleteCourse = (id, res) => {
	Course.deleteOne({ _id: id }, err => {
		if (err) console.log(err);
		else {
			response = {
				status: 200,
				message: "Course deleted"
			};
			res.send(response);
		}
	});
};

module.exports = {
	addCourse,
	getCourses,
	getCoursesByProfId,
	//getCourseListByCourseIds,
	getCoursesByCourseId,
	deleteCourse
};
