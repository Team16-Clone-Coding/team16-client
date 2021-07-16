import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import ContainerGrid  from "../elements/ContainerGrid";

function App() {
  return (
    <React.Fragment>
      
        <ConnectedRouter history={history}>
          <ContainerGrid>
          <Route path='/' exact component={Main}/>
          <Route path='/mypage' exact component={MyPage}/>
          <Route path='/login' exact component={LogIn}/>
          <Route path='/signup' exact component={SignUp}/>
          </ContainerGrid>
        </ConnectedRouter>
        
    </React.Fragment>
    
  );
}



export default App;
