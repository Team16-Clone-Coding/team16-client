import React from "react";
import { Grid, Text, Image } from "../elements";

const PostContents = (props) => {
  return(
    <React.Fragment>
      <Grid>
        <Text>{props.contents}</Text>
        <Text>{props.comment}</Text>
      </Grid>
    </React.Fragment>
  );
}

export default PostContents;
