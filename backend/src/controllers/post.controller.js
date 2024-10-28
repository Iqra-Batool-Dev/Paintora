import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { Post } from '../models/post.model.js';
import { User } from '../models/user.model.js';
import { uploadFileOnCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// Create a new post
const createPost = asyncHandler(async (req, res) => {
    const { title, description, tags } = req.body;
    const mediaFiles = req.files;

    if (!title || !description) {
        throw new ApiError(400, 'Title and description are required');
    }

    const media = [];

    if (mediaFiles) {
        for (const file of mediaFiles) {
            const uploadedFile = await uploadFileOnCloudinary(file.path);
            media.push({ url: uploadedFile.url, type: file.mimetype });
        }
    }

    const post = await Post.create({
        user: req.user._id,
        title,
        description,
        media,
        tags,
    });

    // Add post to user's post list
    await User.findByIdAndUpdate(req.user._id, {
        $push: { posts: post._id }
    });

    res.status(201).json(new ApiResponse(201, post, 'Post created successfully'));
});

// Get all posts
const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find().populate('user', 'fullName avatar');

    if (!posts) {
        throw new ApiError(404, 'No posts found');
    }

    res.status(200).json(new ApiResponse(200, posts, 'Posts fetched successfully'));
});

// Get a single post by ID
const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.postId).populate('user', 'fullName avatar');

    if (!post) {
        throw new ApiError(404, 'Post not found');
    }

    res.status(200).json(new ApiResponse(200, post, 'Post fetched successfully'));
});

// Update a post
const updatePost = asyncHandler(async (req, res) => {
    const { title, description, tags } = req.body;
    const mediaFiles = req.files;

    let post = await Post.findById(req.params.postId);

    if (!post) {
        throw new ApiError(404, 'Post not found');
    }

    // Check if the post belongs to the current user
    if (post.user.toString() !== req.user._id.toString()) {
        throw new ApiError(403, 'Unauthorized to update this post');
    }

    if (title) post.title = title;
    if (description) post.description = description;
    if (tags) post.tags = tags;

    if (mediaFiles) {
        const media = [];
        for (const file of mediaFiles) {
            const uploadedFile = await uploadFileOnCloudinary(file.path);
            media.push({ url: uploadedFile.url, type: file.mimetype });
        }
        post.media = media;
    }

    await post.save();
    res.status(200).json(new ApiResponse(200, post, 'Post updated successfully'));
});

// Delete a post
const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.postId);

    if (!post) {
        throw new ApiError(404, 'Post not found');
    }

    // Check if the post belongs to the current user
    if (post.user.toString() !== req.user._id.toString()) {
        throw new ApiError(403, 'Unauthorized to delete this post');
    }

    await post.remove();

    await User.findByIdAndUpdate(req.user._id, {
        $pull: { posts: post._id }
    });

    res.status(200).json(new ApiResponse(200, {}, 'Post deleted successfully'));
});

// Like a post
const likePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.postId);

    if (!post) {
        throw new ApiError(404, 'Post not found');
    }

    if (post.likes.includes(req.user._id)) {
        throw new ApiError(400, 'You already liked this post');
    }

    post.likes.push(req.user._id);
    await post.save();

    await User.findByIdAndUpdate(req.user._id, {
        $push: { likedPosts: post._id }
    });

    res.status(200).json(new ApiResponse(200, post, 'Post liked successfully'));
});

// Save a post
const savePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.postId);

    if (!post) {
        throw new ApiError(404, 'Post not found');
    }

    await User.findByIdAndUpdate(req.user._id, {
        $push: { savedPosts: post._id }
    });

    res.status(200).json(new ApiResponse(200, {}, 'Post saved successfully'));
});

// Get posts by user
const getPostsByUser = asyncHandler(async (req, res) => {
    const posts = await Post.find({ user: req.params.userId }).populate('user', 'fullName avatar');

    if (!posts || posts.length === 0) {
        throw new ApiError(404, 'No posts found for this user');
    }

    res.status(200).json(new ApiResponse(200, posts, 'Posts fetched successfully'));
});

export {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
    likePost,
    savePost,
    getPostsByUser
};
