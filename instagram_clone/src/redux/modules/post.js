import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/instance";
import { indexOf, slice } from "lodash";

const SET_POST = "SET_POST";
const LOADING = "LOADING";


const setPost = createAction(SET_POST, (post_list, paging) => ({ post_list, paging }));
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

    // if (_paging.start && !_paging.next) {
    //   return;
    // }
    

    dispatch(loading(true));

    instance.get("/posts").then((res) => {
      console.log(res);

      let post_list = res.data;

      console.log(post_list);

      // let post_lists = post_list.slice(start.findIndex(), size + 1);
      

      dispatch(setPost(post_list));
      
      // if (start){
      //   post_lists = post_list.slice(start.findIndex(), size + 1);
      // } 

      // let paging = {
      //   start: post_list[0],
      //   next: post_list.length === size + 1 ? post_list[post_list.length - 1] : null,
      //   size: size,
      // };
    }).catch((err) => {
      console.log(err);
    });

  }
};


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
    
  }, initialState
);

const actionsCreators = {
  setPost,
  getPostDB,
}

export { actionsCreators };