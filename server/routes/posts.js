// Import necessary modules
const express = require("express");
const multer = require("multer");
const { getPosts, createPost } = require("../controllers/posts.js");

// Set up multer for handling file uploads
const storage = multer.memoryStorage(); // Store the file in memory as a Buffer
const upload = multer({ storage: storage });

const router = express.Router();

// Routes for posts
router.get("/", getPosts);
router.post("/", upload.single("selectedFile"), createPost);

module.exports = router;
