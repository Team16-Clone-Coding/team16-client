import React from "react";
import { Grid, Button, Text } from "../elements";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";

const PostButton = (props) => {

  const dispatch = useDispatch();

  const plus_like = () => {
    console.log(props.postId);
    dispatch(postActions.likeDB(props.postId));
  }

  // const is_like = useSelector(s)

  return(
    <React.Fragment>
      <Grid height="40px" padding="10px">
        <FavoriteBorderIcon onClick={plus_like} cursor="pointer" fontSize="medium"></FavoriteBorderIcon>
      </Grid>
      <Grid height="40px" margin="0 0 0 10px" display="flex">
        <Text bold>좋아요 &nbsp; </Text>
        <Text bold>{props.likes.howManyLike}개</Text>
      </Grid>
      
    </React.Fragment>
  );
}

export default PostButton;
