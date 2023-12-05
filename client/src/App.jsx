import { Container, Grid, AppBar, Typography } from "@mui/material";
import Form from "./components/Form/Form";
import PostList from "./components/Posts/PostListe";

const App = () => {
 

  return (
    <Container>
      <AppBar position="static" style={{ marginBottom: "20px" }}>
        <Typography variant="h6">My Social Media App</Typography>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Form  />
        </Grid>
        <Grid item xs={12} md={6}>
          <PostList  />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
