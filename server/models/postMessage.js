const mongoose = require("mongoose");
const Joi = require("joi");
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minLength: 1,
      maxLength: 200,
    },
    message: {
      type: String,
      trim: true,
      minLength: 1,
      maxLength: 500,
    },

    image: {
      type: String,
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

function validateCreatePost(obj) {
  const schema = Joi.object({
    title: Joi.string().trim().min(1).max(200),
    message: Joi.string().trim().min(1).max(500),
    image: Joi.string(),
  });
  return schema.validate(obj);
}

const PostMessage = mongoose.model("PostMessage", postSchema);
module.exports = { PostMessage, validateCreatePost };
