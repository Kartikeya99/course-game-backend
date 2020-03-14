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
		else console.log("User added");
	});
};

const getUserList = args => {
	console.log("Yet to be Implemented");
};

const updateUser = user => {
	User.findByIdAndUpdate(user.id, user, err => {
		if (err) console.log(err);
		else console.log("User Updated");
	});
};

const deleteUser = id => {
	User.deleteOne({ _id: id }, err => {
		if (err) console.log(err);
		else console.log("User deleted");
	});
};

module.exports = {
	addUser,
	deleteUser,
	updateUser,
	getUserList
};
