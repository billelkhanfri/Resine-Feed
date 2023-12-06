import { useState, useEffect } from "react";
import { Container, Grid, AppBar, Typography } from "@mui/material";
import Form from "./components/Form/Form";
import PostList from "./components/Posts/PostListe";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Run only once when the component mounts

  const addNewPost = (newPost) => {
    // Update the posts state with the new post
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <Container>
      <AppBar position="static" style={{ marginBottom: "20px" }}>
        <Typography variant="h6">My Social Media App</Typography>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Form addNewPost={addNewPost} />
        </Grid>
        <Grid item xs={12} md={6}>
          <PostList posts={posts} loading={loading} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
