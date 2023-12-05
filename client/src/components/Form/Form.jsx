// Form.jsx

import { useState } from "react";
import { TextField, Button, Typography, Paper, Input } from "@mui/material";

const Form = ({ onSubmit }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: null, // Updated to store the file object
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("message", postData.message);
    formData.append("selectedFile", postData.selectedFile);

    onSubmit(formData);
    // Clear the form fields
    setPostData({ title: "", message: "", selectedFile: null });
  };

  const handleFileChange = (e) => {
    // Update the selectedFile in the state when a file is chosen
    setPostData({ ...postData, selectedFile: e.target.files[0] });
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Typography variant="h6">Create a Post</Typography>
        <TextField
          name="title"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <Input
          type="file"
          name="selectedFile"
          accept="image/*"
          onChange={handleFileChange}
          style={{ marginTop: "10px" }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
