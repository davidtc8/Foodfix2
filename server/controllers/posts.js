//Acces to the model
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
   try {
    //Finding something in a model takes time so we add aysnc/await
    const postMessages = await PostMessage.find();

    //return the result
    console.log (postMessages);
    res.status(200).json(postMessages);

   } catch (error) {
    res.status(404).json({message: error.message})
   }
}

export const createPost = async (req, res) => {
    //adding different posts
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}