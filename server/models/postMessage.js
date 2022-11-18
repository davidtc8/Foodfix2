import mongoose from "mongoose";

//give uniformity to the routes requierments
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String, 
    tags: [String],
    selectedFile: String,
    //need aditional infomration to set default value
    likeCount:{
        type:Number,
        default:0
    },
    //need aditional infomration to set default value
    createdAt:{
        type:Date,
        default: new Date()
    }
});

//turn the schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

//export a model you can do find, create, update, etc.
export default PostMessage;