import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
        required: false,
        default: null,
    },
    avatar: {
        type: Object,
        required: false,
        default: {}
        /*default: {
            "seed": "Tigger",
            "backgroundColor": "#f0f0f0",
            "eyes": "shade01",
            "mouth": "diagram",
        }*/
    },
    projects: {
        type: Array,
        required: false,
        default: [],
    },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);