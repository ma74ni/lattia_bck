import mongoose, { Schema } from "mongoose";

const locationSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    }, {
    timestamps: true,
    versionKey: false,
});

export const LocationModel = mongoose.model('Location', locationSchema)