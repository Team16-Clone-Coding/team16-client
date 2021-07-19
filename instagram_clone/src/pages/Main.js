import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configStore";
import {Grid} from "../elements";
import Post from "../components/Post";
import Header from "../components/Header";
import post, { actionsCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/InfinityScroll";
const Main = (props) => {

  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);
  const paging = useSelector((state) => state.post.paging);

  React.useEffect(() => {
    if (post_list.length < 2) {
      dispatch(postActions.getPostDB());
    }

  },[])
  
  console.log(post_list);

  return(
    <React.Fragment>
      <Header></Header>
      <Grid height="100vh" max="550px" margin="0 auto;">
        <InfinityScroll
          callNext={() => {
            dispatch(postActions.getPostDB(paging.next));
          }}
          is_next = {paging.next ? true : false}
          // loading = {is_loading}
        >
          {post_list.map((_, idx) =>{
            return(<Post key={idx} {..._}></Post>)
          })}
        </InfinityScroll>
        
      </Grid>
    </React.Fragment>
  );
}

export default Main;