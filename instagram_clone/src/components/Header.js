import React from "react";
import { history } from "../redux/configureStore";
import {setCookie, getCookie, deleteCookie} from "../shared/Cookie";
import { actionCreators as userActions } from "../redux/modules/user";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Image, Button } from "../elements"
import styled from "styled-components";

import imghome from "../images/ico_home.png";
import imgairplane from "../images/ico_airplane.png";
import imgcompass from "../images/ico_compass.png";
import imgheart from "../images/ico_heart.png";
import { Route, Link } from "react-router-dom";


const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const logOutBtn = () => { dispatch(userActions.logOutFB()); };

  if(is_login){
    return(
      <React.Fragment>
        <FixedHeader className="header">
          <Grid is_flex height="50px" width="100%" max="550px" margin="0 auto" padding="10px">
            <Logo onClick={()=>{history.push('/main');}}></Logo>
            <Gnb>
              <Button 
                _onClick={() => {history.push('/main');}}
                width="inherit"
                bg="#fff"
                padding="0 10px"
              ><Img src={imghome} alt="목록 이동"/></Button>
              <Button bg="#fff" padding="0 10px" _onClick={() => {history.push('/main');}}><Img src={imgairplane} alt="목록 이동"/></Button>
              <Button bg="#fff" padding="0 10px" _onClick={() => {history.push('/main');}}><Img src={imgcompass} alt=""/></Button>
              <Button bg="#fff" padding="0 10px" _onClick={() => {history.push('/main');}}><Img src={imgheart} alt=""/></Button>
              <Button bg="#fff" padding="0 10px" _onClick={() => {history.push('/mypage');}} bg="#fff" padding="0">
                <Image shape="circle" src={props.src} size="28" alt="" className="profile-header"/>
              </Button>
              <Button 
                width="inherit"
                
                color="#333"
                bg="#fff"
                whitespace="nowrap"
                padding="0 10px"
                _onClick={logOutBtn}
              >로그아웃</Button>
            </Gnb>
          </Grid>
        </FixedHeader>
      </React.Fragment>
    );
  }

  return null;
}


const Logo = styled.div`
  background-image: url("https://cdn.discordapp.com/attachments/865553698898051122/865751365622824980/instagram_logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 103px;
  height: 29px;
  cursor: pointer;
`;

const FixedHeader = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const Gnb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GnbLink = styled.a`
  display: inline-block;
  padding: 0 10px;
`;
const Img = styled.img`
  width: 22px;
`;

export default Header;