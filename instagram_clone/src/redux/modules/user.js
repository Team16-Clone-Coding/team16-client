import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/instance";
import { getCookie } from "../../shared/instance";

import { setCookie, deleteCookie } from "../../shared/Cookie";


// Actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const GET_TOKEN = "GET_TOKEN";

// Action Creators
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const getToken = createAction(GET_TOKEN, (user_token) => ({ user_token }));

// InitialState
const initialState = {
  user: null,
  is_login: false,
};

// Middleware actions
const loginFB = (userEmail, userPassword) => {
  return function (dispatch, getState, {history}) {
    instance.post("/user/login", 
      {userEmail: userEmail, userPassword: userPassword}
    ).then(function (response) {

      if (response.data.result === "success") {
        dispatch(
          setUser({
            userEmail: userEmail,
            userPassword: userPassword,
            userName: response.data.userName,
          })
        );

        const USER_TOKEN = response.data.token;

        dispatch(
          getToken({
            user_token: USER_TOKEN,
          })
        );

        localStorage.setItem('userEmail', response.data.userEmail);
        // localStorage.setItem('nickname', response.data.nickname);

        let date = new Date(Date.now() + 86400e3);
        date = date.toUTCString();

        document.cookie = "USER_TOKEN" + "=" + USER_TOKEN + "; " + "expires=" + date;


        axios.defaults.headers.common["Authorization"] = "Bearer " + USER_TOKEN;

        // window.alert("공부하러 가볼까요??")
        history.push('/');
      } 
      else{
        window.alert("로그인 정보가 존재하지 않습니다.");
      }
    }).catch((error) => {
      console.log(error);
    });
  };
};

const signupFB = (userEmail, userName, userPassword) => {
  return function (dispatch, getState, {history}) {
    instance.post('/user/signup',{
      userEmail: userEmail, userName: userName, userPassword: userPassword},
    ).then(function (response) {

      console.log(response.data.result);
      // if(response.data.result === "nicknameExist" ) {
      //   window.alert("이미 존재하는 닉네임입니다.")
      //   return;
      // }

      // if(response.data.result === "emailExist" ) {
      //   window.alert("이미 존재하는 이메일입니다.")
      //   return;
      // }

      // if(response.data.result === "existError" ) {
      //   window.alert("이메일 주소 @ 앞 부분은 비밀번호에 포함시킬 수 없습니다.")
      //   return;
      // }

      window.alert("환영해요!")
      history.push("/login");
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const is_Token = document.cookie.match("USER_TOKEN") ? true : false;
    // const is_UserId = localStorage.getItem("userId");

    console.log(is_Token);

    if(is_Token) {
      dispatch(
        setUser({
          is_login: true,
          // userId: is_UserId,
        })
      );
    } else {
      dispatch(logOutFB());
    }
  }
}

const logOutFB = () => {
  return function (dispatch, getState, {history}) {
    dispatch(logOut());
    document.cookie = "USER_TOKEN" + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    history.push("/");
  }
}


// Reducer
export default handleActions(
  {
    [LOG_OUT]: (state, action) =>
    produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
    }),

    [SET_USER]: (state, action) =>
    produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
    }),

    [GET_TOKEN]: (state, action) =>
    produce(state, (draft) => {
        draft.user_token = action.payload.user_token;
    }),

    [GET_USER]: (state, action) => 
    produce(state, (draft) => {}),
  },
  initialState
);

// actionCreators
const actionCreators = {
  loginFB,
  signupFB,
  loginCheckDB,
  logOutFB,
  setUser,
  getUser,
  getToken,
};

export { actionCreators };