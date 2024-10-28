import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/mpeg'],
        required: true,
    },
}, {
    _id: false, // Don't create a separate ID for media items
    timestamps: false,
});

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    media: [mediaSchema], // Array of media files (images or videos)
    tags: [{
        type: String,
        trim: true,
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
});

export const Post = mongoose.model('Post', postSchema);
