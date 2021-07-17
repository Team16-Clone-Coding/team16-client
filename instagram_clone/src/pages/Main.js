import React from "react";
import { history } from "../redux/configStore";
import {Grid} from "../elements";
import Post from "../components/Post";
import Header from "../components/Header";

const Main = (props) => {

  const postList = [
    {name: "닉네임1", contents: "테스트용 글내용1 테스트용 글내용1 테스트용 글내용1", time: "2021-07-17"},
    {name: "닉네임2", contents: "테스트용 글내용2 테스트용 글내용2", time: "2021-07-17"},
    {name: "닉네임3", contents: "테스트용 글내용3 테스트용 글내용3 테스트용 글내용3 테스트용 글내용3 테스트용 글내용3", time: "2021-07-17"}
  ]

  return(
    <React.Fragment>
      <Header></Header>
      <Grid height="100vh" max="550px" margin="0 auto;">
        {postList.map((_, idx) =>{
          return(<Post key={idx} {..._}></Post>)
        })}
      </Grid>
    </React.Fragment>
  );
}

export default Main;