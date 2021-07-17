import React from "react";
import styled from "styled-components";
import { Input, Grid, Button } from "../elements";
import { history } from "../redux/configStore";
import imgLogo from "../images/instagram_logo.png";
import imgLogin from "../images/instagram_login.png";
import imgAppStore from "../images/download_app.png";
import imgGoogleStore from "../images/download_google.png";


const LogIn = (props) => {
  return (
    <React.Fragment>
      <Col>
        <ColLeft>
          <LogInImg src={imgLogin} alt=""/>
        </ColLeft>
        <Colright>
          <Grid is_flex_column height="100%" width="350px">
            <Grid center padding="30px 40px 20px" border="1px solid #dbdbdb" bg="#ffffff">
              <Logo src={imgLogo} alt=""/>
              {/* = 아이디 */}
              <Grid margin="5px 0">
                <Input
                  bg="#00000"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  _onChange={() => {
                    console.log("아이디 입력했어!");
                  }}
                />
              </Grid>

              {/* = 패스워드 */}
              <Grid margin="5px 0">
                <Input
                  bg="red"
                  placeholder="비밀번호"
                  _onChange={() => {
                    console.log("패스워드 입력했어!");
                  }}
                />
              </Grid>

              {/* = 로그인 */}
              <Grid margin="10px 0 0 0">
                <Button
                  bg="#0095F2"
                  borderradius="5px"
                  height="30px"
                  padding="0"
                  text="로그인하기"
                  _onClick={() => {
                    console.log("로그인 했어!");
                  }}
                >로그인</Button>
                <OrBox>
                  <OrBorder></OrBorder>
                  <OrText>또는</OrText>
                  <OrBorder></OrBorder>
                </OrBox>
                <SocialLogin href="#">Facebook으로 로그인</SocialLogin>
                <FindPwd href="#">비밀번호를 잊으셨나요?</FindPwd>
              </Grid>
            </Grid>
          
            <Grid center padding="21px" margin="10px 0 0 0" border="1px solid #dbdbdb" bg="#ffffff">
              <SignupLink>계정이 없으신가요? <Link href="#">가입하기</Link></SignupLink>
            </Grid>
            
            <AppDownload>
              <AppMessage>앱을 다운로드하세요.</AppMessage>
              <AppImg href="#"><img src={imgAppStore} alt="" /></AppImg>
              <AppImg href="#"><img src={imgGoogleStore} alt="" /></AppImg>
            </AppDownload>
          </Grid>
        </Colright>
      </Col>
    </React.Fragment>
  );
}

const Col = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const ColLeft = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
const Colright = styled.div`
`;
const Logo = styled.img`
  max-width: 175px;
  width: 100%;
  margin-bottom: 35px;
`;
const LogInImg = styled.img`
  max-width: 420px;
  width: 100%;
`;
const SignupLink = styled.div`
  font-size: 14px;
`;
const Link = styled.a`
  color: #0095f6;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  text-decoration: none;
`;
const SocialLogin = styled.a`
  display: block;
  width: 100%;
  color: #385185;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 15px;
`;
const FindPwd = styled.a`
  display: block;
  width: 100%;
  color: #00376b;
  font-size: 12px;
  text-decoration: none;
`;
const OrBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: stretch;
  margin: 20px 0 25px;
  padding: 0;
  position: relative;
`;
const OrBorder = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  background-color: #dbdbdb;
  background-color: rgba(var(--b38,219,219,219),1);
  height: 1px;
  position: relative;
  top: .45em;
`;
const OrText = styled.div`
  color: #8e8e8e;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 13px;
  font-weight: bold;
  line-height: 15px;
  margin: 0 18px;
  text-transform: uppercase;
`;
const AppDownload = styled.div`
  text-align: center;
`;
const AppMessage = styled.div`
  font-size: 14px;
  padding: 20px 0;
`;
const AppImg = styled.a`
  display: inline-block;

  img {
    width: 136px;

    &:first-child {
      margin-right: 10px;
    }
  }
`;

export default LogIn;