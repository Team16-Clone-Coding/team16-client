import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance, { getCookie } from "../../shared/instance";
import { indexOf, slice } from "lodash";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const LOADING = "LOADING";
const ADD_COMMENT = "ADD_COMMENT";
const SET_INFO = "SET_INFO";


const setPost = createAction(SET_POST, (post_list, paging) => ({ post_list, paging }));
const addPost = createAction(ADD_POST, (post) => ({post}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const setInfo = createAction(SET_INFO, ( my_info ) => ({ my_info }));

const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false,
  comment: "",
  my_info: [],
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
     
      dispatch(setPost(postList));

    }).catch((err) => {
      console.log(err);
    });
  }
};

const addPostDB = (postImage, postContent) => {
  return function (dispatch, getState, { history }) {
    console.log(postImage,postContent);

    instance.post("/posts", {postImage, postContent}).then((res) => {

      dispatch(getPostDB());
      
    }).catch((err) => {
      console.log(err);
    });
  }
}

const addCommentDB = (commentContent, postId) => {
  return function (dispatch, getState, { history }) {
    instance.post(`/posts/${postId}/comment`, {commentContent}).then((res) => {

    console.log(res);

    dispatch(addComment(commentContent));
    dispatch(getPostDB());
    
  }).catch((err) => {
    console.log(err);
  });
}
}

const likeDB = (id) => {
  return function (dispatch, getState, { history }) {
    instance.post(`/posts/${id}/like`).then((res) => {
      console.log(res);
      dispatch(getPostDB());
    }).catch((err) => {
      console.log(err);
    })
    
  }
}

const getInfoDB = () => {
  return function (dispatch, getState, { history }) {
    instance.get("/user/myinfo").then((res) => {

      dispatch(setInfo(res.data));

    }).catch((err) => {
      console.log(err);
    })
  }
}

const editNameDB = (userName) => {
  return function (dispatch, getState, { history }) {
    instance.put("/user/edit", {userName}).then((res) => {
      dispatch(getInfoDB());
      history.push('/mypage');
    }).catch((err) => {
      console.log(err);
    })
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
        draft.list.unshift(action.payload.post);
    }),

    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
      draft.comment = action.payload.comment;
    }),

    [SET_INFO]: (state, action) => produce(state, (draft) => {
      draft.my_info = action.payload.my_info;
    })
    
  }, initialState
);

const actionCreators = {
  setPost,
  getPostDB,
  addPostDB,
  addCommentDB,
  likeDB,
  getInfoDB,
  editNameDB,
}

export { actionCreators };