import React from "react";
import { Grid, Text, Image } from "../elements";

const PostHeader = (props) => {
  
  const userName = localStorage.getItem("userName");
  
  return(
    <React.Fragment>
      <Grid padding="0 0 0 10px" is_flex>
        <Grid is_flex width="10%">
          <Image size="32"></Image>
        </Grid>
        <Grid is_flex>
          <Text bold>{props.name ? props.name : userName}</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PostHeader;
