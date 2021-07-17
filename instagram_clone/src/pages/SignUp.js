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
        <Grid is_flex_column height="100%" width="350px">
          <Grid center padding="30px 40px 40px" border="1px solid #dbdbdb" bg="#ffffff">
            <Logo src={imgLogo} alt=""/>
            <Desc>친구들의 사진과 동영상을 보려면 가입하세요.</Desc>
            <Button
              fontweight="bold"
              bg="#0095F2"
              borderradius="5px"
              height="30px"
              padding="0"
              text="Facebook으로 로그인"
              _onClick={() => {
                console.log("로그인 했어!");
              }}
            >Facebook으로 로그인</Button>

            <OrBox>
              <OrBorder></OrBorder>
              <OrText>또는</OrText>
              <OrBorder></OrBorder>
            </OrBox>

            {/* = 휴대폰 또는 이메일 */}
            <Grid margin="5px 0">
              <Input
                placeholder="휴대폰 번호 또는 이메일 주소"
                _onChange={() => {
                  console.log("휴대폰 번호 또는 이메일 주소 입력했어!");
                }}
              />
            </Grid>

            {/* = 휴대폰 또는 이메일 */}
            <Grid margin="5px 0">
              <Input
                placeholder="성명"
                _onChange={() => {
                  console.log("성명 입력했어!");
                }}
              />
            </Grid>

            {/* = 사용자 이름 */}
            <Grid margin="5px 0">
              <Input
                placeholder="사용자 이름"
                _onChange={() => {
                  console.log("사용자 이름 입력했어!");
                }}
              />
            </Grid>

            {/* = 비밀번호 */}
            <Grid margin="5px 0">
              <Input
                placeholder="비밀번호"
                _onChange={() => {
                  console.log("비밀번호 입력했어!");
                }}
              />
            </Grid>

            {/* = 로그인 */}
            <Grid margin="10px 0 0 0">
              <Button
                fontweight="bold"
                bg="#0095F2"
                borderradius="5px"
                height="30px"
                padding="0"
                text="로그인하기"
                _onClick={() => {
                  console.log("로그인 했어!");
                }}
              >로그인</Button>
            </Grid>
          </Grid>
        
          <Grid center padding="21px" margin="10px 0 0 0" border="1px solid #dbdbdb" bg="#ffffff">
            <SignupLink>
              계정이 있으신가요? 
              <Link onClick={() => {props.history.push('/login');}}
              > 로그인</Link>
            </SignupLink>
          </Grid>
          
          <AppDownload>
            <AppMessage>앱을 다운로드하세요.</AppMessage>
            <AppImg href="https://apps.apple.com/app/instagram/id389801252?vt=lo" target="_blank"><img src={imgAppStore} alt="App Store에서 이용 가능" /></AppImg>
            <AppImg href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DD98A0D7A-4F19-4BF8-8A84-D436DF7FA009%26utm_content%3Dlo%26utm_medium%3Dbadge" target="_blank"><img src={imgGoogleStore} alt="Google Play에서 이용 가능" /></AppImg>
          </AppDownload>
        </Grid>
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
const Logo = styled.img`
  max-width: 175px;
  width: 100%;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  color: #8e8e8e;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 20px;
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
  cursor: pointer;
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