import React from "react";
import { Grid, Button, Text } from "../elements";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const PostButton = (props) => {


  return(
    <React.Fragment>
      <Grid height="40px" padding="10px">
        <FavoriteBorderIcon cursor="pointer" fontSize="medium" onClick={()=>{window.alert("ddd")}}></FavoriteBorderIcon>
      </Grid>
      <Grid height="40px" margin="0 0 0 10px" display="flex">
        <Text bold>좋아요 &nbsp; </Text>
        <Text bold>{props.likes.howManyLike}개</Text>
      </Grid>
      
    </React.Fragment>
  );
}

export default PostButton;
