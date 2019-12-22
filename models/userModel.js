const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: { type: String },
	password: { type: String },

});
UserSchema.pre("save", function () {
	console.log(this);
	next();

})
module.exports = mongoose.model("User", UserSchema);