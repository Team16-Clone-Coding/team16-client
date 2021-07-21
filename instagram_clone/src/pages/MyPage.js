import React from "react";
import { history } from "../redux/configureStore";
import styled from "styled-components";
import { Grid, Image, Button } from "../elements"


const MyPage = (props) => {
  return(
    <React.Fragment>
      {/* == 프로필 */}
      <Grid width="975px" padding="0 20px" margin="0 auto">
        <Col>
          <ColLeft>
            <Image shape="circle" src={props.src} size="150" margin="0 auto" alt=""/>
          </ColLeft>
          <ColRight>
            <TxtName>유저이메일</TxtName>
            <TztPosting>게시물 <strong>(게시물 수)</strong></TztPosting>
            <TztPosting><strong>유저네임</strong></TztPosting>
          </ColRight>
        </Col>

        <HR/>
      
        {/* == 게시물 (사진이미지) */}
        <Grid>
          <Grid display="flex" alignitems="center" justifycontent="center">
            <PostLink ClassName="active">게시물</PostLink>
            <PostLink>IGTV</PostLink>
            <PostLink>저장됨</PostLink>
            <PostLink>태그됨</PostLink>
          </Grid>
          <PostImage>
            <PostRow>
              <PostItem>
                <Button onClick={() => {props.history.push('/signup');}}>
                  <Image shape="rectangle" src={props.src} alt=""/>
                </Button>
              </PostItem>
              <PostItem>
                <Button onClick={() => {props.history.push('/signup');}}>
                  <Image shape="rectangle" src={props.src} alt=""/>
                </Button>
              </PostItem>
              <PostItem>
                <Button onClick={() => {props.history.push('/signup');}}>
                  <Image shape="rectangle" src={props.src} alt=""/>
                </Button>
              </PostItem>
            </PostRow>
          </PostImage>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const Col = styled.div`
  display: flex;
  align-items: center;
`;
const ColLeft = styled.div`
  width: 290px;
  text-align: center;
  margin-right: 30px;
`;
const ColRight = styled.div`

`;
const TxtName = styled.h2`
  font-size: 28px;
  font-weight: 300;
  margin-top: 0;
  marign-bottom: 30px;
`;
const TztPosting  = styled.p`
  font-size:  16px;
  font-weight: 400;
`;
const HR = styled.hr`
  width: 100%;
  height: 1px;
  background: #dbdbdb;
  border: 0;
  margin: 20px 0 0;
`;
const PostImage = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: stretch;
  padding-bottom: 0px;
  padding-top: 0px;
`;
const PostRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-shrink: 0;
`;
const PostItem = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 0%;
  -ms-flex: 1 0 0%;
  flex: 1 0 0%;
  margin-right: 28px;

  &:last-child {
    margin-right: 0;
  }
`;
const PostLink = styled.div`
  font-size: 12px;
  padding: 20px 30px;

  &.active {
    color: red;
    font-weight: 600;
  }
`;

export default MyPage;