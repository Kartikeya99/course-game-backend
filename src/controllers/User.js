const User = require("../models/User");

const addUser = (name, category, yearIfStud, email, password) => {
	const newUser = {
		name,
		category,
		yearIfStud,
		email,
		password
	};

	User.create(newUser, (err, message) => {
		if (err) console.log(err);
		else return 0;
	});
};

const getUser = user => {
	User.find(user, (err, doc) => {
		if (err) console.log(err);
		else return doc;
	});
};

const updateUser = user => {
	User.findByIdAndUpdate(user.id, user, err => {
		if (err) console.log(err);
		else return 0;
	});
};

const deleteUser = id => {
	User.deleteOne({ _id: id }, err => {
		if (err) console.log(err);
		else return 0;
	});
};

module.exports = {
	addUser,
	deleteUser,
	updateUser,
	getUser
};
