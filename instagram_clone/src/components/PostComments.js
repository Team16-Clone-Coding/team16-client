import React from "react";
import { Grid, Text, Button, Input } from "../elements";
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostComments = (props) => {

  const dispatch = useDispatch();

  const postId = props.postIdx;

  const [content, setContent] = React.useState('');
  
  const changeContent = (e) => {
    setContent(e.target.value);
  }
  
  const createComment = () => {
    if (!content) {
      return;
    }
    dispatch(postActions.addCommentDB(content, postId));
  }



  return(
    <React.Fragment>
      <Grid is_flex height="56px" margin="4px 0 0 0" topline>
        <Grid display="flex" margin="10px" alignitems="center">
          <SentimentVerySatisfiedIcon fontSize="large"></SentimentVerySatisfiedIcon>
          <InputComment placeholder="댓글 달기..." onChange={changeContent}></InputComment>
        </Grid>
        
        <Grid is_flex width="15%">
          <Button fontweight="bold" bg="#fff" color="rgba(var(--d69,0,149,246),1)" _onClick={createComment}>게시</Button>
        </Grid>       
      </Grid>
    </React.Fragment>
  );
}


const InputComment = styled.input`
  height: 30px;
  border: none;
  width: 100%;
  padding-left: 10px;
`;
export default PostComments;
