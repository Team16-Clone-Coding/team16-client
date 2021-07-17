import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import styled from "styled-components";

function App() {
  return (
    <React.Fragment>
        <ConnectedRouter history={history}>
            <ContainerBox>
            <Route path='/' exact component={Main}/>
            <Route path='/mypage' exact component={MyPage}/>
            <Route path='/login' exact component={LogIn}/>
            <Route path='/signup' exact component={SignUp}/>
            </ContainerBox>
        </ConnectedRouter>
        
    </React.Fragment>
    
  );
}


const ContainerBox = styled.div`
  width: 100%;
  max-width: 550px;
  background: #fff;
  margin: 0 auto;
  height: 100vh;
`;

export default App;
