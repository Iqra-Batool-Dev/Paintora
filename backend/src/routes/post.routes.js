import express from 'express';
import { 
    createPost, 
    getAllPosts, 
    getPostById, 
    updatePost, 
    deletePost, 
    likePost, 
    savePost, 
    getPostsByUser 
} from '../controllers/post.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = express.Router();

// Create a new post
router.route('/').post(verifyJWT, upload.array('media'), createPost)
// Get all posts
router.route('/').get(getAllPosts)
// Get a post by ID
router.route('/:postId').get(getPostById)
// Update a post
router.route('/:postId').put(verifyJWT, upload.array('media'), updatePost)
// Delete a post
router.route('/:postId').delete(verifyJWT, deletePost)
// Like a post
router.route(':/postID/like').post(verifyJWT, likePost)
// Save a post
router.route('/:postId/save').post(verifyJWT, savePost)
// Get posts by a user
router.route('user/:userId').get(getPostsByUser)

export default router;