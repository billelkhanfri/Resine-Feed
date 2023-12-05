import  { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };

    fetchPosts();
  }, []); // Add necessary dependencies

  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.message}</p>

            <img
              src={`http://localhost:8000/${post.selectedFile}`}
              alt={`Post ${post._id}`}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
