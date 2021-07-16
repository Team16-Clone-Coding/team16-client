import React from "react";
import { Grid, Text } from "../elements";

const PostContents = (props) => {
  return(
    <React.Fragment>
      <Grid>
        <Text>닉네임 내용</Text>
        <Text>1시간 전</Text>
      </Grid>
    </React.Fragment>
  );
}

export default PostContents;
