import React from "react";
import styled from "styled-components";
import { Grid, Text, Image } from "../elements";

const PostHeader = (props) => {
  
  const userName = localStorage.getItem("userName");
  
  return(
    <React.Fragment>
      <Grid padding="0 0 0 15px" is_flex>
        <Grid is_flex width="10%">
          <Image size="32" src={props.profileImage}></Image>
        </Grid>
        <Grid is_flex>
          <Text bold>{props.name ? props.name : userName}</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PostHeader;
