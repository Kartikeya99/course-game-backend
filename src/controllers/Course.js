const Course = require("../models/Course");

const addCourse = (profId, name) => {
	const newCourse = {
		profId,
		name
	};

	Course.create(newCourse, (err, message) => {
		if (err) console.log(err);
		else {
			console.log(`Course added`);
			data = Course.find(newCourse);
			return data;
		}
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
		else {
			console.log(`Course deleted`);
			return 0;
		}
	});
};

module.exports = { addCourse, deleteCourse, getCourseList };
