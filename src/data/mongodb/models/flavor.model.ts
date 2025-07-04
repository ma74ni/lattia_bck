import mongoose, { Schema, Types } from "mongoose";

const flavorSchema = new Schema({
    name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  base: {
    type: String,
    enum: ['agua', 'leche'],
    required: [true, 'The base is required'],
  },
  sugarFree: {
    type: Boolean,
    default: false,
  },
  availableAt: [
    {
      type: Types.ObjectId,
      ref: 'Location',
    },
  ],
}, {
  timestamps: true,
  versionKey: false,
});

export const FlavorModel = mongoose.model('Flavor', flavorSchema)