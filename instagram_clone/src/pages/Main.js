import React from "react";
import { history } from "../redux/configStore";
import Post from "../components/Post";
import Header from "../components/Header";

const Main = (props) => {
  return(
    <React.Fragment>
      <Header></Header>
      <Post></Post>
    </React.Fragment>
  );
}

export default Main;