import React from "react";
import styled from "styled-components";
import { Input, Grid, Button } from "../elements";

import imgLogo from "../images/instagram_logo.png";
import imgAppStore from "../images/download_app.png";
import imgGoogleStore from "../images/download_google.png";

import { emailCheck, passwordCheck } from "../shared/Common";
import {actionCreators as userActions} from "../redux/modules/user";
import { useDispatch } from "react-redux";


const SignUp = (props) => {
  const dispatch = useDispatch();

  const [userEmail, setEmail] = React.useState("");
  const [userPassword, setPwd] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changeName = (e) => {
    setUserName(e.target.value);
  }

  const changePwd = (e) => {
    setPwd(e.target.value);
  }

  const signup = () => {
    console.log(userEmail, userName, userPassword);

    if(userEmail === "" || userName === "" || userPassword === "") {
      window.alert("아이디, 비밀번호, 닉네임을 모두 입력해주세요.");
      return;
    }

    if(!emailCheck(userEmail)) {
      window.alert("이메일 형식이 맞지 않습니다.");
      return;
    }

    if(!passwordCheck(userPassword)) {
      window.alert("비밀번호 형식이 맞지 않습니다.");
      return;
    }

    dispatch(userActions.signupFB(userEmail, userName, userPassword));
  }

  return (
    <React.Fragment>
      <Col>
        <Grid is_flex_column height="100%" width="350px">
          <Grid center padding="30px 40px 40px" border="1px solid #dbdbdb" bg="#ffffff">
            <Logo src={imgLogo} alt=""/>
            <Desc>친구들의 사진과 동영상을 보려면 가입하세요.</Desc>
            <SocialLogin target="_blank" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522czvbxrm54xutxl3fteywtp51livx5usifvac1i8o6q9158zxij%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dko_KR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D75959a59-da08-4399-8c31-10e6e1aff0e3%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522czvbxrm54xutxl3fteywtp51livx5usifvac1i8o6q9158zxij%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0">Facebook으로 로그인</SocialLogin>

            <OrBox>
              <OrBorder></OrBorder>
              <OrText>또는</OrText>
              <OrBorder></OrBorder>
            </OrBox>

            {/* = 휴대폰 또는 이메일 */}
            <Grid margin="5px 0">
              <Input
                placeholder="휴대폰 번호 또는 이메일 주소"
                _onChange={changeEmail}
              />
            </Grid>

            {/* = 사용자 이름 */}
            <Grid margin="5px 0">
              <Input
                placeholder="사용자 이름"
                _onChange={changeName}
              />
            </Grid>

            {/* = 비밀번호 */}
            <Grid margin="5px 0">
              <Input
                type="password"
                placeholder="비밀번호"
                _onChange={changePwd}
              />
              <p>최소 8 자, 최소 하나의 문자 및 하나의 숫자</p>
            </Grid>

            {/* = 가입 */}
            <Grid margin="10px 0 0 0">
              <Button
                fontweight="bold"
                bg="#0095F2"
                borderradius="5px"
                height="30px"
                padding="0"
                _onClick={signup}
              >가입</Button>
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
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  background-color: #0095F2;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 15px;
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

export default SignUp;