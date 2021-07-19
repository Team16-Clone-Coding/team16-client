import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/instance";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";


// Actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// Action Creators
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// InitialState
const initialState = {
  user: null,
  is_login: true,
};


// Middleware actions
const loginFB = (userEmail : "이메일", userPassword : "비밀번호") => {
  return function (dispatch, getState, { history }) {
    console.log("미들웨어 실행");
    history.push("/");
    instance.get("/user/login").then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  };
};

// Reducer
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
				draft.is_login = true;
      }),
		[LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
				draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// actionCreators
const actionCreators = {
  logIn,
  getUser,
  logOut,
  loginFB,
};

export { actionCreators };