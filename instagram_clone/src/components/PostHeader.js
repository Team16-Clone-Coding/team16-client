import React from "react";
import { Grid, Text, Image } from "../elements";

const PostHeader = (props) => {
  return(
    <React.Fragment>
      <Grid padding="0 0 0 10px" is_flex>
        <Grid is_flex width="10%">
          <Image size="32"></Image>
        </Grid>
        <Grid is_flex>
          <Text>닉네임</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PostHeader;
