const User = require("../models/User");

const addUser = (newUser, res) => {
	User.create(newUser, (err, message) => {
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

const getAllUser = (res) => {
	User.find({}, (err, message) => {
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

const getUser = (user, res) => {
	User.find(user, (err, message) => {
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

const updateUser = (user, res) => {
	User.findByIdAndUpdate(
		user._id,
		user,
		{ useFindAndModify: false },
		(err, message) => {
			if (err) console.log(err);
			else {
				response = {
					status: "200 OK",
					message,
				};
				res.send(response);
			}
		}
	);
};

const deleteUser = (id, res) => {
	User.deleteOne({ _id: id }, (err, message) => {
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

module.exports = {
	addUser,
	deleteUser,
	updateUser,
	getUser,
	getAllUser,
};
