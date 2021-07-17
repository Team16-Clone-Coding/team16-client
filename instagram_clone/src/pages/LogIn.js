import React from "react";
import styled from "styled-components";
import { Text, Input, Grid, Button } from "../elements";
import { history } from "../redux/configStore";
import img from "../instagram_logo.png";


const LogIn = (props) => {
  return (
    <React.Fragment style={{ width: "80%", margin: "-70px 16px 48px 16px" }}>
      <Grid is_flex_column height="100%" padding="100px">
        <Grid center padding="40px" border="1px solid #dbdbdb">
          <IMG src={img} alt=""/>
          {/* = 아이디 */}
          <Grid margin="5px 0">
            <Input
              bg="#000"
              placeholder="아이디를 입력해주세요."
              _onChange={() => {
                console.log("아이디 입력했어!");
              }}
            />
          </Grid>

          {/* = 패스워드 */}
          <Grid margin="5px 0">
            <Input
              bg="red"
              placeholder="패스워드 입력해주세요."
              _onChange={() => {
                console.log("패스워드 입력했어!");
              }}
            />
          </Grid>

          {/* = 로그인 */}
          <Grid margin="10px 0 0 0">
            <Button
              bg="#0095F2"
              text="로그인하기"
              _onClick={() => {
                console.log("로그인 했어!");
              }}
            >로그인</Button>
          </Grid>
        </Grid>
        
        <Grid padding="40px" margin="10px 0 0 0" border="1px solid #dbdbdb">
          <Button
            bg="#0095F2"
            text="로그인하기"
            _onClick={() => {
              console.log("로그인 했어!");
            }}
          >로그인</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const IMG = styled.img`
  max-width: 175px;
  width: 100%;
  margin-bottom: 35px;
`;

export default LogIn;