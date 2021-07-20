import React from "react";
import { Grid, Text, Image } from "../elements";

const PostContents = (props) => {

  console.log(props)
  const comment_list = props.comment;

  
  
  return(
    <React.Fragment>
      <Grid display="flex" alignitems="center">
        <Text bold size="14px" margin="0 10px">{props.writer}</Text>
        <Text size="14px">{props.contents}</Text>
      </Grid>
      <Grid>
        {comment_list.map((c, idx) => {
          return(
            <Grid key={idx} display="flex" alignitems="center">
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
