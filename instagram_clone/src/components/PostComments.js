import React from "react";
import { Grid, Text, Button } from "../elements";

const PostComments = (props) => {
  return(
    <React.Fragment>
      <Grid is_flex height="56px" margin="4px 0 0 0" topline>
        <Grid is_flex>
          <Text>댓글</Text>
        </Grid>
        
        <Grid is_flex width="15%">
          <Button>게시</Button>
        </Grid>       
      </Grid>
    </React.Fragment>
  );
}

export default PostComments;
