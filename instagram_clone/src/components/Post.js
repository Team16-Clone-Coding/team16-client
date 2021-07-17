import React from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import PostButton from "./PostButton";
import PostComments from "./PostComments";
import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  
  return(
    <React.Fragment>
      <Grid height="50px;"></Grid>
      <PostCard>
        <PostHeader></PostHeader>
        <Image shape="rectangle"></Image>
        <PostButton></PostButton>
        <Grid>
        <Text>{props.name}</Text>
        <Text>{props.time}</Text>
      </Grid>
      
        <PostComments></PostComments>
      </PostCard>
    </React.Fragment>
  );
}

const PostCard = styled.div`
  width: 100%;
  margin-top: 50px;
  border: 1px solid rgba(var(--ce3,239,239,239),1);
`;
export default Post;
