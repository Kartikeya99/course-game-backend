const Course = require("../models/Course");

const addCourse = (newCourse, res) => {
	Course.create(newCourse, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: "200 OK",
				message,
			};
			res.send(response);
		}
	});
};

// For getting all courses
const getCourses = (res) => {
	Course.find({}, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: "200 OK",
				message,
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
				message,
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
				message,
			};
			res.send(response);
		}
	});
};

const validate = (course, res) => {
	Course.find(course, (err, message) => {
		if (err) console.log(err);
		else {
			response = {
				status: "200 OK",
				message,
			};
			res.send(response);
		}
	});
};

// The below api is when we call courses by the course ids.
const getCourseListByCourseIds = (courseIds, res) => {
	if (courseIds.length) {
		data = [];
		courseIds.forEach((courseId) => {
			data.push(Course.find({ _id: courseId }));
		});
		Promise.all(data).then((tempMsg) => {
			message = [];
			for (i = 0; i < tempMsg.length; i++) message.push(tempMsg[i][0]);
			response = {
				status: "200 OK",
				message,
			};
			res.send(response);
		});
	} else {
		response = {
			status: "200 OK",
			message: [],
		};
		res.send(response);
	}
};

const deleteCourse = (id, res) => {
	Course.deleteOne({ _id: id }, (err) => {
		if (err) console.log(err);
		else {
			response = {
				status: 200,
				message: "Course deleted",
			};
			res.send(response);
		}
	});
};

const deleteAll = (res) => {
	Course.remove({}, (err) => {
		if (err) console.log(err);
		else {
			response = {
				status: 200,
				message: "All courses deleted",
			};
			res.send(response);
		}
	});
};

module.exports = {
	addCourse,
	getCourses,
	getCoursesByProfId,
	validate,
	getCourseListByCourseIds,
	getCoursesByCourseId,
	deleteCourse,
	deleteAll,
};
