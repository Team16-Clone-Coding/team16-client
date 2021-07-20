import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/instance";
import { indexOf, slice } from "lodash";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const LOADING = "LOADING";



const setPost = createAction(SET_POST, (post_list, paging) => ({ post_list, paging }));
const addPost = createAction(ADD_POST, (post) => ({post}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));


const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false,
}

const initialPost = {
  id: 0,
  name: "닉네임",
  contents: "내용",
  time: "시간",
  comment: "2021-07-18",
}

const getPostDB = (start = null, size = 3) => {
  return function (dispatch, getState, {history}) {

    let _paging = getState().post.paging;

    console.log(_paging);

    instance.get("/posts").then((res) => {
      
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
    
    instance.post("/posts", {postImage, contents}).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }
}


export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.post_list;
      if (action.payload.paging) {
        draft.paging = action.payload.paging;
      }

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
    
  }, initialState
);

const actionCreators = {
  setPost,
  getPostDB,
  addPostDB,
}

export { actionCreators };