import React from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import PostButton from "./PostButton";
import PostComments from "./PostComments";
import PostContents from "./PostContents";
import { Grid, Image, Text } from "../elements";
import { useDispatch, useSelector } from "react-redux";


const Post = (props) => {


  return(
    <React.Fragment>
      <Grid height="50px"></Grid>
        <PostCard>
          <PostHeader name={props.user.userName}></PostHeader>

          <Image shape="post" src={props.postImage}></Image>

          <PostButton isComment={props.likes.userList} likes={props.likes} postId={props.postId}></PostButton>

          <PostContents writer={props.user.userName} contents={props.postContent} comment={props.commentList} time={props.createdAt}></PostContents>

          <PostComments postIdx={props.postId}></PostComments>
        </PostCard>
    </React.Fragment>
  );
}

const PostCard = styled.div`
  width: 100%;
  margin-top: 50px;
  border: 1px solid rgba(var(--ce3,239,239,239),1);
  background: #fff;
`;
export default Post;
