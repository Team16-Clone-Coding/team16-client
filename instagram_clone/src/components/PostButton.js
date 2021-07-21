import React from "react";
import { Grid, Button, Text } from "../elements";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";

const PostButton = (props) => {

  const dispatch = useDispatch();

  const _comment = props.isComment;

  const plus_like = () => {
    dispatch(postActions.likeDB(props.postId));
    
  }

  
  const user_Id = localStorage.getItem("userId");
  console.log(user_Id);

  const itemDict = {};

  for (let i = 0; i < _comment.length; i++) {
    const item = _comment[i];
    itemDict[item.userId] = item;
  }

  const isHeart = Object.keys(itemDict).indexOf(user_Id);

  console.log(isHeart);

  return(
    <React.Fragment>
      <Grid height="40px" padding="10px">
        {
          isHeart === -1
         ? <FavoriteBorderIcon onClick={plus_like} cursor="pointer" fontSize="medium"></FavoriteBorderIcon>
         : <FavoriteIcon color="secondary" onClick={plus_like} cursor="pointer" fontSize="medium"></FavoriteIcon>
         }
      </Grid>
      <Grid height="40px" margin="0 0 0 10px" display="flex">
        <Text bold>좋아요 &nbsp; </Text>
        <Text bold>{props.likes.howManyLike}개</Text>
      </Grid>
      
    </React.Fragment>
  );
}

export default PostButton;
