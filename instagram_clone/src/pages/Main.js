import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import {Grid , Button} from "../elements";
import Post from "../components/Post";
import Header from "../components/Header";
import { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/InfinityScroll";
import PostWirte from "../components/PostWrite";
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

const Main = (props) => {

  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);
  const paging = useSelector((state) => state.post.paging);
  const is_loading = useSelector((state) => state.post.is_loading);
  

  const [modal, setModal] = React.useState(false);
  

	const modal_Open = () => {
        setModal(true);
    };
    
    const modal_Close = () => {
        setModal(false);
    }

  React.useEffect(() => {
    
    if (post_list.length < 2) {
      dispatch(postActions.getPostDB());
    }
 
    dispatch(postActions.getInfoDB());

    
  },[]);

  const reversedList = [...post_list].reverse();

  console.log(post_list);

  return(
    <React.Fragment>
      <Grid height="100vh" max="550px" margin="0 auto;">
        <PostWirte open={modal} close={modal_Close}></PostWirte>
          {reversedList.map((_, idx) =>{
            return(<Post key={idx} {..._}></Post>)
          })}
        <Button is_float _onClick={modal_Open}><CreateOutlinedIcon></CreateOutlinedIcon></Button>
      </Grid>
      
      
    </React.Fragment>
  );
}

export default Main;