const { PostMessage, validateCreatePost } = require("../models/postMessage");

/**
 * @desc  Get all posts
 * @route /posts/
 * @method Get
 * @access Public
 */

const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find().sort({ createdAt: -1 });
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * @desc  Post a post
 * @route /posts/
 * @method POST
 * @access Public
 */
const createPost = async (req, res) => {
  const { title, message } = req.body;
  const image = req.file;

  // Ensure the file is present
  if (!image) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  // Save the file to your desired storage location (e.g., disk storage)
  // Adjust the storage destination and filename as needed
  const fileDestination = "uploads/"; // Replace with your desired storage location
  const fileName = `${Date.now()}-${image.originalname}`;
  const filePath = `${fileDestination}${fileName}`;

  // Save the file to the destination
  require("fs").writeFileSync(filePath, image.buffer);

  // Now, you can use filePath as the URL or path to the file in your database
  const newPost = new PostMessage({
    title,
    message,
    image: filePath, // Use the file path or URL in your database
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getPosts, createPost };
