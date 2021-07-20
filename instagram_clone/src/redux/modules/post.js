import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/instance";
import { indexOf, slice } from "lodash";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const LOADING = "LOADING";
const ADD_COMMENT = "ADD_COMMENT";


const setPost = createAction(SET_POST, (post_list, paging) => ({ post_list, paging }));
const addPost = createAction(ADD_POST, (post) => ({post}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));

const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false,
  comment: "",
}

const initialPost = {
  User : "유저 객체",
  postImage : "게시글 사진",
  postContnent : "게시글 내용",
  createdAt : "작성 시간",
}

const getPostDB = () => {
  return function (dispatch, getState, {history}) {

    instance.get("/posts").then((res) => {
      
      console.log(res);
      let postList = res.data; 
     
      console.log(postList);

      dispatch(setPost(postList));

    }).catch((err) => {
      console.log(err);
    });
  }
};

const addPostDB = (postImage, contents) => {
  return function (dispatch, getState, { history }) {
    console.log(postImage,contents);

    instance.post("/posts", {postImage, contents}).then((res) => {

      console.log(res);

      dispatch(addPost(res.data))
      
    }).catch((err) => {
      console.log(err);
    });
  }
}

const addCommentDB = (commentContent, postId) => {
  return function (dispatch, getState, { history }) {
    instance.post(`/post/${postId}/comment`, {commentContent}).then((res) => {

    console.log(res);

    dispatch(addComment(commentContent));
  }).catch((err) => {
    console.log(err);
  });
}
}


export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.post_list;
      draft.is_loading = false;
    }),

    [LOADING]: (state, action) => produce(state, (draft) => {
      draft.is_loading = action.payload.is_loading;
    }),

    [ADD_POST]: (state, action) => produce(state, (draft) => {
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      })
    }),

    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
      draft.comment = action.payload.comment;
    })
    
  }, initialState
);

const actionCreators = {
  setPost,
  getPostDB,
  addPostDB,
  addCommentDB,
}

export { actionCreators };