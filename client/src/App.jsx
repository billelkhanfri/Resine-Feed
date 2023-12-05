/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import logo from "./images/9722fa15-591e-4aaf-9660-f2bf75bcecdc.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

import "./App.css";

function App() {
  return (
    <Container maxidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Resine Feeds
        </Typography>
        <img src={logo} alt="logo e resine media" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems=" stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
