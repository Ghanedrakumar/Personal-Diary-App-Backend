import mongoose from 'mongoose';
const AddModalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    isPinned: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
const AddModal = mongoose.model('AddModal', AddModalSchema);
export default AddModal