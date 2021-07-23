import React from "react";
import { Grid, Button, Text } from "../elements";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";

const PostButton = (props) => {

  const dispatch = useDispatch();

  const _comment = props.isComment;

  console.log(_comment);

  const plus_like = () => {
    dispatch(postActions.likeDB(props.postId));
    
  }

  const user_Id = localStorage.getItem("userId");

  const itemDict = {};

  for (let i = 0; i < _comment.length; i++) {
    const item = _comment[i];
    itemDict[item.userId] = item;
  }

  const isHeart = Object.keys(itemDict).indexOf(user_Id);

  const nameDict = {};

  for (let i = 0; i < _comment.length; i++) {
    const item = _comment[i];
    nameDict[item.userName] = item;
  }

  const isName = Object.keys(nameDict);


  return(
    <React.Fragment>
      <Grid height="40px" padding="10px">
        {
          isHeart === -1
         ? <FavoriteBorderIcon onClick={plus_like} cursor="pointer" fontSize="medium"></FavoriteBorderIcon>
         : <FavoriteIcon color="secondary" onClick={plus_like} cursor="pointer" fontSize="medium"></FavoriteIcon>
         }
      </Grid>
      <Grid padding="0 0 0 10px" display="flex" alignitems="center">
        <Text size='14px' bold margin="0">{isName[0] ? isName[0] : null}</Text>
        <Text size="14px" margin="0">{isName[0] ? "님 외" : null}</Text>
        <Text size='14px' bold margin="0">&nbsp; {props.likes.howManyLike}명</Text>
        <Text size="14px" margin="0">이 좋아합니다.</Text>
      </Grid>
      
    </React.Fragment>
  );
}

export default PostButton;
