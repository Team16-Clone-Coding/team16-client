import React from "react";
import { history } from "../redux/configStore";
import {Grid} from "../elements";
import Post from "../components/Post";
import Header from "../components/Header";

const Main = (props) => {
  return(
    <React.Fragment>
      <Header></Header>
      <Grid height="100vh" max="550px" margin="0 auto;">
        <Post></Post>
      </Grid>
    </React.Fragment>
  );
}

export default Main;