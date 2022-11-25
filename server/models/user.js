import mongoose from "mongoose";

//give uniformity to the routes requierments
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true},
    lastName: {
        type: String,
        required: true},
    email: {
        type: String,
        required: true},
    password: {
        type: String,
        required: true},
});

//turn the schema into a model
 const User = mongoose.model('User', userSchema);

 export default User;
//export a model you can do find, create, update, etc.
