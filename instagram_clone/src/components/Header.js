import React from "react";
import { history } from "../redux/configureStore";
import {setCookie, getCookie, deleteCookie} from "../shared/Cookie";
import { Grid, Image, Button } from "../elements"
import styled from "styled-components";

import imghome from "../images/ico_home.png";
import { useSelector } from "react-redux";


const Header = (props) => {
  const [is_login, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    // 쿠키를 가져와요!
    let cookie = getCookie('쿠키 이름 넣기!');
    // 확인해봅시다!
    console.log(cookie);
    // 쿠키가 있으면?
    if(cookie){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  });

  console.log(is_login);

  if(is_login){
    return(
      <React.Fragment>
        <FixedHeader>
          <Grid is_flex height="50px" width="100%" max="550px" margin="0 auto" padding="10px">
            <Logo></Logo>
            <Button _onClick={() => {props.history.push('/');}}
                  ><img src={imghome} alt="목록 이동"/></Button>
            <Button width="20%">게시글 작성</Button>
            <Button width="20%">마이페이지</Button>
            <Button bg="red" _onClick={() => {deleteCookie('login');}}>로그아웃</Button>
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
  background-size: contain;
  width: 102px;
  height: 27px;
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
const Link = styled.a`
  color: #0095f6;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  img {
    width: 22px;
  }
`;

export default Header;