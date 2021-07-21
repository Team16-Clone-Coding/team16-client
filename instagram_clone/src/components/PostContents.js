import React from "react";
import { Grid, Text, Image } from "../elements";

const PostContents = (props) => {

  const comment_list = props.comment;

  
  
  return(
    <React.Fragment>
      <Grid display="flex" alignitems="center" height="30px">
        <Text bold size="14px" margin="0 10px">{props.writer}</Text>
        <Text size="14px">{props.contents}</Text>
      </Grid>
      <Grid>
        <Text margin="10px" size="12px" color="#8e8e8e">댓글 {comment_list.length}개</Text>
        {comment_list.map((c, idx) => {
          return(
            <Grid key={idx} display="flex" alignitems="center" height="20px">
                <Text bold size="14px" margin="0 10px">{c.commentAuthor}</Text>
                <Text size="14px">{c.commentContent}</Text>
            </Grid>
          )
        })}
        <Text color="#8e8e8e" size="11px" margin="10px">{props.time}</Text>
      </Grid>
    </React.Fragment>
  );
}

export default PostContents;
