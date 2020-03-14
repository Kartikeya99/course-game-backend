// This is the parent controller which gathers all other controllers and lets them to be imported and used from the same place.

let challenge = require("./Challenge");
let course = require("./Course");
let question = require("./Question");
let user = require("./User");

module.exports = { challenge, course, question, user };
