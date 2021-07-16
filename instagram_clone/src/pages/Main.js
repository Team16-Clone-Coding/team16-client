import React from "react";
import { history } from "../redux/configStore";
import Post from "../components/Post";

const Main = (props) => {
  return(
    <React.Fragment>
      <Post></Post>
    </React.Fragment>
  );
}

export default Main;