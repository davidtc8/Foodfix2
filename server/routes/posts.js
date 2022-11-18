import express from 'express';

//import logic of routes
import { getPosts, createPost} from '../controllers/posts.js'; //node needs the .js

const router = express.Router();

//Seperate accecible routes logic into controllers file.
router.get('/', getPosts);
router.get('/', createPost);


export default router;