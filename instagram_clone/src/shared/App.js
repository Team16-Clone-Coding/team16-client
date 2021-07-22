import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Header from "../components/Header";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import EditInfo from "../pages/EditInfo";

function App() {

  const dispatch = useDispatch();

  const is_Token = document.cookie.match("USER_TOKEN") ? true : false;
  

  React.useEffect(() => {
    if (is_Token) {
      dispatch(userActions.loginCheckDB());
      console.log(is_Token);
    } 
  }, []);


  return (
    <React.Fragment>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={LogIn}/>
        <Route path='/mypage' exact component={MyPage}/>
        <Route path='/main' exact component={Main}/>
        <Route path='/signup' exact component={SignUp}/>
        <Route path='/edit' exact component={EditInfo}></Route>
      </ConnectedRouter>
    </React.Fragment>
  );
}
export default App;
